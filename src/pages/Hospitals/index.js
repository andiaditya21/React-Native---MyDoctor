import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {
  DummyHospital1,
  DummyHospital2,
  DummyHospital3,
  ILBgHospital,
} from '../../assets';
import {ListHospital} from '../../components/molecules';
import {colors, fonts} from '../../utils';

const Hospitals = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILBgHospital} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.subTitle}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital
          type="Rumah Sakit"
          pic={DummyHospital1}
          name="Citra Bunga Merdeka"
          address="Jln. Surya Sejahtera 20"
        />
        <ListHospital
          type="Rumah Sakit Anak"
          pic={DummyHospital2}
          name="Happy Family & Kids"
          address="Jln. Surya Sejahtera 20"
        />
        <ListHospital
          type="Rumah Sakit Jiwa"
          pic={DummyHospital3}
          name="Tingkatan Paling Atas"
          address="Jln. Surya Sejahtera 20"
        />
      </View>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.secondary, flex: 1},
  background: {height: 240, paddingTop: 30, alignItems: 'center'},
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    marginBottom: 6,
  },
  subTitle: {fontSize: 14, fontFamily: fonts.primary[300], color: colors.white},
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 14,
  },
});
