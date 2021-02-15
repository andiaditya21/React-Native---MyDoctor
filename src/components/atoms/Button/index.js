import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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
    textAlign: 'center',
    color:
      type === 'secondary'
        ? colors.button.secondary.color
        : colors.button.primary.color,
  }),
});
