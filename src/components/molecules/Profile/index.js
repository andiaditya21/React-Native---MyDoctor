import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyUser, IcRemovePhoto} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Profile = ({name, desc, avatar, isRemove}) => {
  return (
    <View style={styles.container}>
      <View style={styles.borderAvatar}>
        <Image source={avatar} style={styles.avatar} />
        {isRemove && <IcRemovePhoto style={styles.icon} />}
      </View>
      {name && (
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.desc}>{desc}</Text>
        </View>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  borderAvatar: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    borderColor: colors.border.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {width: 110, height: 110, borderRadius: 110 / 2},
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    textAlign: 'center',
  },
  desc: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    textAlign: 'center',
  },
  icon: {
    position: 'absolute',
    right: 2,
    bottom: 2,
  },
});
