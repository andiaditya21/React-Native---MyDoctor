import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input, Loading} from '../../components';
import {colors, showError, storeData, useForm} from '../../utils';
import {Fire} from '../../config';

const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    job: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const onContinue = () => {
    // console.log('Init Form:', form);

    setLoading(true);
    // navigation.navigate('UploadPhoto', form);

    Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        setLoading(false);
        setForm('reset');
        // cuplik data yang diambil dari useForm
        const data = {
          fullName: form.fullName,
          job: form.job,
          email: form.email,
          uid: success.user.uid,
        };
        //connect database firebase
        Fire.database()
          .ref('users/' + data.uid + '/')
          .set(data);
        // menyimpan data ke localstorage
        storeData('users', data);
        // navigasi ke UploadPhoto dengan mengirimkan data sebagai params
        navigation.navigate('UploadPhoto', data);
      })
      // tangkap error
      .catch((error) => {
        setLoading(false);
        const errorMessage = error.message;
        showError(errorMessage);
      });
  };

  return (
    <>
      <View style={styles.page}>
        <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
        <View style={styles.container}>
          <Input
            label="Full Name"
            value={form.fullName}
            onChangeText={(value) => setForm('fullName', value)}
          />
          <Gap height={24} />
          <Input
            label="Pekerjaan"
            value={form.job}
            onChangeText={(value) => setForm('job', value)}
          />
          <Gap height={24} />
          <Input
            label="Email Address"
            value={form.email}
            onChangeText={(value) => setForm('email', value)}
          />
          <Gap height={24} />
          <Input
            label="Password"
            value={form.password}
            onChangeText={(value) => setForm('password', value)}
            secureTextEntry={true}
          />
          <Gap height={40} />
          <Button title="Continue" onPress={onContinue} />
        </View>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
  container: {padding: 40},
});
