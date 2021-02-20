import React from 'react';
import {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Fire} from '../../config';
import {colors} from '../../utils/Color';

// props.navigation berasal dari react-navigation yang dihubungkan di router
const Splash = ({navigation}) => {
  useEffect(() => {
    const unsubscribe = Fire.auth().onAuthStateChanged((user) => {
      setTimeout(() => {
        // memeriksa apakah user masih login apa tidak (ketika user sudah login tetapi keluar sebentar dan memilih masuk lagi, maka itu masih disebut lagin). login di firebase +- 1jam
        if (user) {
          // user masih login
          navigation.replace('MainApp');
        } else {
          // user sudah tidak login
          navigation.replace('GetStarted');
        }
      }, 3000);
    });

    // Secara teori, navigation bersifat tumpuk-menumpuk. Dan juga splash adlah page pertama dan menggunakan useEffect, maka useEffect tersebut ada terus terpanggil dihalaman lain ketika prosesi tumpuk-menumpuk. Solusinya: dilakukan pembersihan pada useEffect
    return () => unsubscribe();
  }, [navigation]);

  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>My Doctor</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text.primary,
    marginTop: 20,
  },
});
