import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';

const InputChat = ({value, onChangeText, onBtnPress}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Tulis pesan untuk Nairobi"
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
      />
      <Button
        title="send"
        type="btn-icon-send"
        onPress={onBtnPress}
        disable={value.length < 1}
      />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: colors.white,
  },
  textInput: {
    flex: 1,
    backgroundColor: colors.textInput.background,
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border.primary,
    color: colors.textInput.disable,
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    maxHeight: 45,
    marginRight: 10,
  },
});
