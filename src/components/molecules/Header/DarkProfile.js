import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DummyDoctor6} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';

const DarkProfile = ({onPress, fullName, job, photo}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-light" onPress={onPress} />
      <View style={styles.content}>
        <Text style={styles.name}>{fullName}</Text>
        <Text style={styles.spesialis}>{job}</Text>
      </View>
      <Image source={{uri: photo}} style={styles.pic} />
    </View>
  );
};

export default DarkProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingVertical: 30,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {flex: 1},
  name: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: fonts.primary[600],
    color: colors.white,
  },
  spesialis: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.text.third,
  },
  pic: {width: 46, height: 46, borderRadius: 46 / 2},
});
