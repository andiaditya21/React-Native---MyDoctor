import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import IsMe from './IsMe';
import Others from './Others';
import {colors} from '../../../utils';

const ChatItem = ({isMe, text, date, photo}) => {
  if (isMe) {
    return <IsMe text={text} date={date} />;
  }
  return <Others text={text} date={date} photo={photo} />;
};

export default ChatItem;
