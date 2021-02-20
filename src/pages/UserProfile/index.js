import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {DummyUser, NullPhoto} from '../../assets';
import {Gap} from '../../components/atoms';
import {Header, List, Profile} from '../../components/molecules';
import {colors, getData, showError} from '../../utils';
import {Fire} from '../../config';

const UserProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    job: '',
    photo: NullPhoto,
  });
  useEffect(() => {
    getData('user').then((res) => {
      // console.log('getdata', res);
      const data = res;
      // didalam res / data sudah terdapat photo, akan tetapi masih dalam base64/string. Jadi perlu dijadiin uri dulu
      data.photo = {uri: res.photo};
      setProfile(data);
    });
  }, []);

  const signOut = () => {
    Fire.auth()
      .signOut()
      .then(() => {
        console.log('success logout');
        navigation.replace('GetStarted');
      })
      .catch((err) => showError(err.message));
  };

  return (
    <View style={styles.container}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      {profile.fullName.length > 0 && (
        <Profile
          avatar={profile.photo}
          name={profile.fullName}
          desc={profile.job}
        />
      )}
      <Gap height={30} />

      <List
        type="next"
        name="Edit Profile"
        desc="Last update yesterday"
        icon="edit-profile"
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <List
        type="next"
        name="Language"
        desc="Available 12 Languages"
        icon="language"
      />
      <List
        type="next"
        name="Give Us Rating"
        desc="On Google Play Store"
        icon="rating"
      />
      <List
        type="next"
        name="Sign Out"
        desc="Last update yesterday"
        icon="Read Our Guidelines"
        onPress={signOut}
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {backgroundColor: colors.white, flex: 1},
});
