import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {fonts} from '../../../utils';
import {colors} from '../../../utils/Color';

const Input = ({label}) => {
  const [border, setBorder] = useState(colors.border.primary);
  const onFocusForm = () => {
    setBorder(colors.border.secondary);
  };
  const onBlurForm = () => {
    setBorder(colors.border.primary);
  };
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.input(border)}
      />
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
  input: (border) => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    padding: 12,
  }),
});
