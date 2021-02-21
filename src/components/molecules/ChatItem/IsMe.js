import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const isMe = ({text, date}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.chat}>{text}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};

export default isMe;

const styles = StyleSheet.create({
  container: {alignItems: 'flex-end', marginRight: 20, marginTop: 20},
  chat: {
    backgroundColor: colors.chatMe,
    fontFamily: fonts.primary.normal,
    color: colors.secondary,
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
