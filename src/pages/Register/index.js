import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Header, Input} from '../../components';

const Register = ({navigation}) => {
  return (
    <View>
      <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <Input label="Full Name" />
        <Input label="Pekerjaan" />
        <Input label="Email Address" />
        <Input label="Password" />
        <Button
          title="Continue"
          onPress={() => navigation.navigate('UploadPhoto')}
        />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {padding: 40},
});
