import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts} from '../../../utils';
import {colors} from '../../../utils/Color';
import {Button, Gap} from '../../atoms';
import DarkProfile from './DarkProfile';

const Header = ({onPress, title, type}) => {
  if (type === 'dark-profile') {
    return <DarkProfile onPress={onPress} />;
  }
  return (
    <View style={styles.page(type)}>
      <Button
        type="icon-only"
        icon={type === 'dark' ? 'back-light' : 'back-dark'}
        onPress={onPress}
      />
      <Text style={styles.text(type)}>{title}</Text>
      <Gap width={16} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  page: (type) => ({
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 30,
    alignItems: 'center',
    backgroundColor: type === 'dark' ? colors.secondary : colors.white,
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
    borderBottomRightRadius: type === 'dark' ? 20 : 0,
  }),
  text: (type) => ({
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    color: type === 'dark' ? colors.white : colors.text.primary,
    fontFamily: fonts.primary.normal,
    textTransform: 'capitalize',
  }),
});
