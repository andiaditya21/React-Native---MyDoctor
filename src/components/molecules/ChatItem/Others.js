import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const Others = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.chat}>
        Ibu dokter, apakah memakan jeruk tiap hari itu buruk?
      </Text>
      <Text style={styles.date}>4.20 AM</Text>
    </View>
  );
};

export default Others;

const styles = StyleSheet.create({
  container: {alignItems: 'flex-start', marginLeft: 20, marginTop: 20},
  chat: {
    backgroundColor: colors.chatOther,
    fontFamily: fonts.primary.normal,
    color: colors.white,
    paddingVertical: 12,
    paddingLeft: 12,
    paddingRight: 18,
    maxWidth: '70%',
    borderRadius: 10,
    borderBottomRightRadius: 0,
  },
  date: {
    color: colors.text.secondary,
    fontSize: 11,
    marginTop: 8,
    marginBottom: 20,
  },
});
