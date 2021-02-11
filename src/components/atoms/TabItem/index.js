import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  IcDoctorInactive,
  IcMessagesInactive,
  IcHospitalsInactive,
  IcDoctorActive,
  IcMessagesActive,
  IcHospitalsActive,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Doctor') {
      return active ? <IcDoctorActive /> : <IcDoctorInactive />;
    }
    if (title === 'Messages') {
      return active ? <IcMessagesActive /> : <IcMessagesInactive />;
    }
    if (title === 'Hospitals') {
      return active ? <IcHospitalsActive /> : <IcHospitalsInactive />;
    }
    return <IcDoctorInactive />;
  };
  return (
    <View style={styles.item}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </View>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  item: {alignItems: 'center'},
  text: (active) => ({
    color: active ? colors.text.menuActive : colors.text.menuInactive,
    fontSize: 10,
    fontFamily: fonts.primary[600],
    marginTop: 4,
  }),
});
