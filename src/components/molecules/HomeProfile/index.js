import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {NullPhoto} from '../../../assets';
import {colors, fonts, getData} from '../../../utils';

const HomeProfile = ({onPress}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    job: '',
    photo: NullPhoto,
  });
  // melihat result getData localstorage
  useEffect(() => {
    getData('user').then((res) => {
      // res dipindahkan ke variable baru 'data' kemudian 'key' photo ditimpa dengan nilai baru (guna mengkonversi menjadi uri yang dapat dibaca). ganti profile dengan data terbaru
      const data = res;
      data.photo = {uri: res.photo};
      // console.log('res di home profile:', data);
      setProfile(data);
    });
  }, []);
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={profile.photo} style={styles.avatar} />
      <View>
        <Text style={styles.name}>{profile.fullName}</Text>
        <Text style={styles.job}>{profile.job}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {width: 46, height: 46, borderRadius: 46 / 2, marginRight: 12},
  name: {
    fontSize: 16,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
  },
  job: {fontSize: 12, color: colors.text.secondary},
});
