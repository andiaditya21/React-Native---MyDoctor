import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {NullPhoto} from '../../assets';
import {Button, Gap, Header, Input, Profile} from '../../components';
import {Fire} from '../../config';
import {colors, getData, showError, storeData} from '../../utils';

const UpdateProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    job: '',
    email: '',
  });

  const [password, setPassword] = useState('');

  const [photo, setPhoto] = useState(NullPhoto);
  const [photoForDB, setPhotoForDB] = useState('');

  useEffect(() => {
    // ambil data di localstorage
    getData('user').then((res) => {
      const data = res;
      setPhoto({uri: res.photo});
      setProfile(data);
    });
  }, []);

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

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
          console.log('response GetImage from imagePicker: ', response);
          // masukkan data ke DB dengan format string / base64, format: data:'typeDatanya';base64, 'resBase64nya'
          setPhotoForDB(`data:${response.type};base64, ${response.base64}`);
          //ganti foto (Secara UI) dengan format uri
          const source = {uri: response.uri};
          setPhoto(source);
        }
      },
    );
  };

  const update = () => {
    console.log('profile state data', profile);

    // kondisi ketika password pengen diubah
    if (password.length > 0) {
      if (password.length < 6) {
        showError('Password anda masih kurang dari 6 karakter');
      } else {
        updateProfileData();
        updatePassword();
        navigation.replace('MainApp');
      }
    } else {
      updateProfileData();
      navigation.replace('MainApp');
    }
  };

  const updatePassword = () => {
    Fire.auth().onAuthStateChanged((user) => {
      if (user) {
        //new password
        user.updatePassword(password).catch((err) => {
          showError(err.message);
        });
      }
    });
  };

  const updateProfileData = () => {
    const data = profile;
    data.photo = photoForDB;
    Fire.database()
      .ref(`users/${profile.uid}/`)
      .update(data)
      .then(() => {
        console.log('success update DB', data);
        storeData('user', data);
      })
      .catch((err) => {
        showError(err.message);
      });
  };

  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
          <Profile avatar={photo} isRemove onPress={getImage} />
          <Gap height={26} />
          <Input
            label="Full name"
            value={profile.fullName}
            onChangeText={(value) => changeText('fullName', value)}
          />
          <Gap height={24} />
          <Input
            label="Pekerjaan"
            value={profile.job}
            onChangeText={(value) => changeText('job', value)}
          />
          <Gap height={24} />
          <Input label="Email Address" value={profile.email} disable />
          <Gap height={24} />
          <Input
            label="Password"
            value={password}
            onChangeText={(value) => setPassword(value)}
            secureTextEntry
          />
          <Gap height={40} />
          <Button title="Save Profile" onPress={update} />
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  wrapper: {padding: 40, paddingBottom: 48},
});
