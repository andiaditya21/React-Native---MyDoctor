import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyDoctor6} from '../../assets';
import {Button, Gap, Header, Profile, ProfileItem} from '../../components';
import {colors} from '../../utils';

const DoctorProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Profile
        name="Nairobi Putri Hayza"
        desc="Dokter Anak"
        avatar={DummyDoctor6}
      />
      <Gap height={26} />
      <ProfileItem label="Alumnus" value="Universitas Indonesia, 2020" />
      <Gap height={16} />
      <ProfileItem label="Tempat Praktik" value="Rumah Sakit Umum, Bandung" />
      <Gap height={16} />
      <ProfileItem label="No. STR" value="0000116622081996" />
      <Gap height={23} />
      <View style={styles.wrapperBtn}>
        <Button
          title="Start Consultation"
          onPress={() => navigation.navigate('Chatting')}
        />
      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  wrapperBtn: {paddingHorizontal: 40},
});
