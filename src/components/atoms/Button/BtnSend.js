import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcSend, IcSendDisable} from '../../../assets';
import {colors} from '../../../utils';

const BtnSend = ({disable}) => {
  return (
    <View style={styles.container(disable)}>
      {disable && <IcSend />}
      {!disable && <IcSendDisable />}
    </View>
  );
};

export default BtnSend;

const styles = StyleSheet.create({
  container: (disable) => ({
    backgroundColor: disable
      ? colors.button.icon.sendDisable
      : colors.button.icon.send,
    width: 45,
    height: 45,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 8,
    paddingLeft: 8,
    borderRadius: 10,
  }),
});
