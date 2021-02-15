import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  IcDoctorAnak,
  IcDoctorObat,
  IcDoctorUmum,
  IcPsikiater,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const DoctorCategory = ({category, onPress}) => {
  const Icon = () => {
    if (category === 'dokter umum') {
      return <IcDoctorUmum style={styles.illustration} />;
    }
    if (category === 'psikiater') {
      return <IcPsikiater style={styles.illustration} />;
    }
    if (category === 'dokter obat') {
      return <IcDoctorObat style={styles.illustration} />;
    }
    if (category === 'dokter anak') {
      return <IcDoctorAnak style={styles.illustration} />;
    }
    return <IcDoctorUmum style={styles.illustration} />;
  };
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Icon />
      <Text style={styles.label}>Saya butuh</Text>
      <Text style={styles.section}>{category}</Text>
    </TouchableOpacity>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  card: {
    padding: 12,
    backgroundColor: colors.card.primary,
    width: 100,
    height: 130,
    alignSelf: 'flex-start',
    marginRight: 10,
    borderRadius: 10,
  },
  illustration: {marginBottom: 28},
  label: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
  },
  section: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
