import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  DummyDoctor4,
  DummyDoctor5,
  DummyDoctor6,
  DummyDoctor7,
  DummyDoctor8,
} from '../../assets';
import {Header, List} from '../../components';

const ChooseDoctor = ({navigation}) => {
  return (
    <View>
      <Header
        title="Pilih dokter anak"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <List
        type="next"
        pic={DummyDoctor4}
        name="Alexander Jannie"
        desc="Wanita"
        onPress={() => navigation.navigate('Chatting')}
      />
      <List
        type="next"
        pic={DummyDoctor5}
        name="John McParker Steve"
        desc="Pria"
      />
      <List
        type="next"
        pic={DummyDoctor6}
        name="Nairobi Putri Hayza"
        desc="Wanita"
      />
      <List type="next" pic={DummyDoctor7} name="James Rivillia" desc="Pria" />
      <List
        type="next"
        pic={DummyDoctor8}
        name="Liu Yue Tian Park"
        desc="Wanita"
      />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({});
