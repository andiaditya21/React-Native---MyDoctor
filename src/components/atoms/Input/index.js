import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {fonts} from '../../../utils';
import {colors} from '../../../utils/Color';

const Input = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontFamily: fonts.primary.normal,
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border.primary,
    borderRadius: 10,
    padding: 12,
  },
});
