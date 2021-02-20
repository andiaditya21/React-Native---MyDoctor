import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {fonts} from '../../../utils';
import {colors} from '../../../utils/Color';
import BtnSend from './BtnSend';
import IconOnly from './IconOnly';

const Button = ({type, title, onPress, icon, disable}) => {
  if (type === 'btn-icon-send') {
    return <BtnSend disable={disable} />;
  }
  if (type === 'icon-only') {
    return <IconOnly onPress={onPress} icon={icon} />;
  }
  if (disable) {
    return (
      <View style={styles.disableBg}>
        <Text style={styles.disableText}>{title}</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (type) => ({
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor:
      type === 'secondary'
        ? colors.button.secondary.background
        : colors.button.primary.background,
  }),
  text: (type) => ({
    fontSize: 18,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    color:
      type === 'secondary'
        ? colors.button.secondary.color
        : colors.button.primary.color,
  }),
  disableBg: {
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: colors.textInput.background,
  },
  disableText: {
    fontSize: 18,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    color: colors.textInput.disableText,
  },
});
