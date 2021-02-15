import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DummyUser} from '../../assets';
import {Gap} from '../../components/atoms';
import {Header, List, Profile} from '../../components/molecules';
import {colors} from '../../utils';

const UserProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Profile
        avatar={DummyUser}
        name="Shayna Melinda"
        desc="Product Designer"
      />
      <Gap height={30} />

      <List
        type="next"
        name="Edit Profile"
        desc="Last update yesterday"
        icon="edit-profile"
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <List
        type="next"
        name="Language"
        desc="Available 12 Languages"
        icon="language"
      />
      <List
        type="next"
        name="Give Us Rating"
        desc="On Google Play Store"
        icon="rating"
      />
      <List
        type="next"
        name="Help Center"
        desc="Last update yesterday"
        icon="Read Our Guidelines"
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {backgroundColor: colors.white, flex: 1},
});
