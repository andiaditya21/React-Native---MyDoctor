import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Gap} from '../../components/atoms';
import {
  DoctorCategory,
  HomeProfile,
  NewsItem,
  RatedDoctor,
} from '../../components/molecules';
import {colors, fonts, showError} from '../../utils';
import {Fire} from '../../config';

const Doctor = ({navigation}) => {
  const [news, setNews] = useState([]);
  const [categoryDoctor, setCategoryDoctor] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getCategoryDoctor();
    getTopRatedDoctor();
    getNews();
  }, []);

  const getCategoryDoctor = () => {
    Fire.database()
      .ref('category_doctor')
      .once('value')
      .then((res) => setCategoryDoctor(res.val()))
      .catch((err) => showError(err.message));
  };

  const getTopRatedDoctor = () => {
    Fire.database()
      .ref('doctors/')
      .orderByChild('rate') // akan mengurutkan dari kecil -> besar
      .limitToLast(3) // mengambil 3 terbawah (karena pengurutannya mulai dari terkecil -> terbesar)
      .once('value')
      .then((res) => {
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          // mengubah obj menjadi array of object & membongkarnya menjadi per item (hanya mengambil judul keynya saja)
          Object.keys(oldData).map((key) => {
            // key berisi judul key dari per object DB
            data.push({
              id: key, // id diisi dengan key DB
              data: oldData[key], //data diisi dengan data-data object DB tergantung key DBnya
            });
          });
          setDoctors(data);
        }
      })
      .catch((err) => showError(err.message));
  };

  const getNews = () => {
    Fire.database()
      .ref('news/')
      .once('value')
      .then((res) => {
        if (res.val()) {
          setNews(res.val());
        }
      })
      .catch((err) => showError(err.message));
  };
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperUp}>
            <Gap height={30} />
            <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
            <Text style={styles.mainTitle}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
            <View style={styles.doctorSection}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.doctorWrapper}>
                  <Gap width={16} />
                  {categoryDoctor.map((item) => {
                    return (
                      <DoctorCategory
                        key={item.id}
                        category={item.category}
                        onPress={() =>
                          navigation.navigate('ChooseDoctor', item)
                        }
                      />
                    );
                  })}
                  <Gap width={6} />
                </View>
              </ScrollView>
            </View>
          </View>
          <View style={styles.wrapperRated}>
            <Text style={styles.title}>Top Rated Doctors</Text>
            {doctors.map((doctor) => {
              return (
                <RatedDoctor
                  key={doctor.id}
                  name={doctor.data.fullName}
                  desc={doctor.data.profession}
                  avatar={{uri: doctor.data.photo}}
                  onPress={() => navigation.navigate('DoctorProfile', doctor)}
                />
              );
            })}
            <Text style={styles.title}>Good News</Text>
          </View>
          {news.map((item) => {
            return (
              <NewsItem
                key={item.id}
                title={item.title}
                date={item.date}
                cover={item.cover}
              />
            );
          })}
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  wrapperUp: {paddingHorizontal: 16},
  mainTitle: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    maxWidth: 209,
    marginBottom: 16,
  },
  doctorWrapper: {flexDirection: 'row'},
  doctorSection: {marginHorizontal: -16},
  wrapperRated: {paddingHorizontal: 16},
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: '90%',
  },
});
