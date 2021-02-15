import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import IsMe from './IsMe';
import Others from './Others';
import {colors} from '../../../utils';

const ChatItem = ({isMe}) => {
  if (isMe) {
    return <IsMe />;
  }
  return <Others />;
};

export default ChatItem;
