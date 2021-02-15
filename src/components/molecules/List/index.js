import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  IcDocs,
  IcEditProfile,
  IcLanguage,
  IcNext,
  IcRate,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const List = ({pic, name, desc, type, onPress, icon}) => {
  const Icon = () => {
    if (icon === 'edit-profile') {
      return <IcEditProfile />;
    }
    if (icon === 'language') {
      return <IcLanguage />;
    }
    if (icon === 'rating') {
      return <IcRate />;
    }
    if (icon === 'help-center') {
      return <IcDocs />;
    }
    return <IcEditProfile />;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon ? <Icon /> : <Image source={pic} style={styles.photo} />}
      <View style={styles.wrapper}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      {(type = 'next' && <IcNext />)}
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    padding: 16,
    borderBottomColor: colors.border.primary,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  photo: {width: 46, height: 46, borderRadius: 46 / 2},
  wrapper: {justifyContent: 'center', flex: 1, marginLeft: 16},
  name: {
    fontFamily: fonts.primary.normal,
    fontSize: 16,
    color: colors.text.primary,
  },
  desc: {
    fontFamily: fonts.primary[300],
    fontSize: 12,
    color: colors.text.secondary,
  },
});
