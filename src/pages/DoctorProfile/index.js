import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Profile, ProfileItem} from '../../components';
import {colors} from '../../utils';

const DoctorProfile = ({navigation, route}) => {
  const dataDoctor = route.params;
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Profile
        name={dataDoctor.data.fullName}
        desc={dataDoctor.data.profession}
        avatar={{uri: dataDoctor.data.photo}}
      />
      <Gap height={26} />
      <ProfileItem label="Alumnus" value={dataDoctor.data.university} />
      <Gap height={16} />
      <ProfileItem
        label="Tempat Praktik"
        value={dataDoctor.data.hospital_address}
      />
      <Gap height={16} />
      <ProfileItem label="No. STR" value={dataDoctor.data.str_number} />
      <Gap height={23} />
      <View style={styles.wrapperBtn}>
        <Button
          title="Start Consultation"
          onPress={() => navigation.navigate('Chatting', dataDoctor)}
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
