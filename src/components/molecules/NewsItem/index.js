import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyNews1} from '../../../assets';
import {colors, fonts} from '../../../utils';

const NewsItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Is it safe to stay at home during coronavirus?
        </Text>
        <Text style={styles.days}>Today</Text>
      </View>
      <Image source={DummyNews1} style={styles.photo} />
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border.primary,
    paddingBottom: 12,
    paddingTop: 16,
  },
  wrapper: {flex: 1},
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginBottom: 4,
  },
  days: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
  },
  photo: {width: 80, height: 60, borderRadius: 11},
});
