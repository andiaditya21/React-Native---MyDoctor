import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {IcArrowBack} from '../../../assets';

const IconOnly = ({onPress, type}) => {
  const Icon = () => {
    if (type === 'back-dark') {
      return <IcArrowBack />;
    }
    if (type === 'back-light') {
      return <IcArrowBack />;
    }
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;

const styles = StyleSheet.create({});
