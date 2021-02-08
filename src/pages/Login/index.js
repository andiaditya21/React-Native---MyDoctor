import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';
import {fonts} from '../../utils';
import {colors} from '../../utils/Color';

const Login = () => {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Masuk dan mulai berkontribusi</Text>
      <Input label="Email Address" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} />
      <Link text="Forgot My Password" size={12} />
      <Gap height={40} />
      <Button title="Sign In" />
      <Gap height={30} />
      <Link text="Create New Account" size={16} align="center" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {padding: 40, backgroundColor: colors.white, flex: 1},
  title: {
    marginVertical: 40,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    fontSize: 20,
    maxWidth: 153,
  },
});