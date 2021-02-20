import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcAddPhoto, IcRemovePhoto, NullPhoto} from '../../assets';
import {Button, Gap, Header, Link} from '../../components';
import {colors, fonts, showError, storeData} from '../../utils';
import {launchImageLibrary} from 'react-native-image-picker';
import {Fire} from '../../config';

const UploadPhoto = ({navigation, route}) => {
  // destructuring
  const {fullName, job, uid} = route.params;

  // setPhotoForDB
  const [photoForDB, setPhotoForDB] = useState('');

  // hasPhoto = ketika uploadFoto berhasil/tidak
  const [hasPhoto, setHasPhoto] = useState(false);
  // photo = awalnya adalah avatar kosong, setelah diisi akan berganti menjadi avatar user
  const [photo, setPhoto] = useState(NullPhoto);

  // function u/ get image menggunakan image-picker
  const getImage = () => {
    launchImageLibrary(
      {includeBase64: true, quality: 0.8, maxWidth: 200, maxHeight: 200},
      (response) => {
        // ketika mendapatkan error / didCancel = tidak jadi milih foto
        if (response.didCancel || response.error) {
          // alert menggunakan flash-message
          showError('Oopss, ternyata anda tidak jadi upload foto ya?');
        }
        // ketika tidak ada error / didCancel
        else {
          // karena kebetulan format foto menggunakan uri, maka dibuatkan object lagi
          // yang dibutuhkan database adalah bentuk string / base64 dari foto
          // kemudian mengganti state awal photo (yang awalnya kosong) menjadi ada fotonya
          // console.log('response GetImage', response);
          setPhotoForDB(`data:${response.type};base64, ${response.base64}`);
          const source = {uri: response.uri};
          setPhoto(source);
          setHasPhoto(true);
        }
      },
    );
  };

  const uploadAndContinue = () => {
    // memasukkan data photo kedalam DB (mengupdate DB)
    Fire.database()
      .ref('users/' + uid + '/')
      .update({photo: photoForDB});

    // memasukkan photo kedalam obj data (dari params register berisikan fullname, job, email, dan uid)
    // obj terupdate dari data di masukkan ke localstorage
    const data = route.params;
    data.photo = photoForDB;
    storeData('user', data);

    // navigation
    navigation.reset({
      index: 0,
      routes: [{name: 'MainApp'}],
    });
  };

  return (
    <View style={styles.page}>
      <Header title="Upload Photo" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.avatarWrap} onPress={getImage}>
            <Image source={photo} style={styles.avatar} />
            {/* Jika foto sudah diupload, maka akan merender icon remove, jika belum upload foro maka akan merender icon add */}
            {hasPhoto && <IcRemovePhoto style={styles.addPhoto} />}
            {!hasPhoto && <IcAddPhoto style={styles.addPhoto} />}
          </TouchableOpacity>
          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.profesion}>{job}</Text>
        </View>
        <View>
          <Button
            disable={!hasPhoto}
            title="Upload and Continue"
            onPress={uploadAndContinue}
          />
          <Gap height={30} />
          <Link
            text="Skip for this"
            align="center"
            size={16}
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{name: 'MainApp'}],
              })
            }
          />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {flex: 1},
  avatar: {width: 110, height: 110, borderRadius: 110 / 2},
  avatarWrap: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    borderColor: colors.border.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 8,
  },
  name: {
    fontSize: 24,
    color: colors.text.primary,
    fontFamily: fonts.primary.normal,
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 4,
  },
  profesion: {
    fontSize: 18,
    color: colors.text.secondary,
    fontFamily: fonts.primary.normal,
    textAlign: 'center',
  },
  content: {
    paddingHorizontal: 40,
    paddingBottom: 64,
    flex: 1,
    justifyContent: 'space-between',
  },
  profile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
