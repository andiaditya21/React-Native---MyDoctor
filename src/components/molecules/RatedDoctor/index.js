import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcStar} from '../../../assets';

const RatedDoctor = ({name, desc, avatar, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={avatar} style={styles.photo} />
      <View style={styles.bio}>
        <Text>{name}</Text>
        <Text>{desc}</Text>
      </View>
      <View style={styles.starWrapper}>
        <IcStar />
        <IcStar />
        <IcStar />
        <IcStar />
        <IcStar />
      </View>
    </TouchableOpacity>
  );
};

export default RatedDoctor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 16,
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 12,
  },
  bio: {flex: 1},
  starWrapper: {flexDirection: 'row'},
});
