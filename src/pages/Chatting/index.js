import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ChatItem, Header, InputChat} from '../../components';
import {colors, fonts, getData, showError} from '../../utils';
import {Fire} from '../../config';
import {getChatTime, getSendChat} from '../../utils/date';

const Chatting = ({navigation, route}) => {
  const dataDoctor = route.params;
  const [chatContent, setChatContent] = useState('');
  const [user, setUser] = useState({});
  const [chatData, setChatData] = useState([]);

  useEffect(() => {
    getDataFromLocal();
    const idUserDoctor = `${user.uid}_${dataDoctor.data.uid}`;
    const urlDB = `chatting/${idUserDoctor}/all_chat/`;
    Fire.database()
      .ref(urlDB)
      .on('value', (snapshot) => {
        if (snapshot.val()) {
          // OUTPUTnya akan membentuk array of object yang didalamnya ada juga array of object
          // snapshot.val() berisi data untuk subObject tanggal (2020-02-21) yang masih berupa object, maka perlu diubah menjadi array of object
          const dataSnaphot = snapshot.val();
          const allDataChat = [];
          // diubah menjadi array of object dengan format baru
          Object.keys(dataSnaphot).map((key) => {
            // dikarenakan dalam subObject tanggal masih ada subObject lain yaitu subObject idChatting (dirender oleh firebase) masih object juga, maka perlu diubah menjadi array of object juga
            // dataChat akan diisi oleh data berdasarkan key 'tanggal'
            const dataChat = dataSnaphot[key];
            const newDataChat = [];

            Object.keys(dataChat).map((itemChat) => {
              newDataChat.push({
                id: itemChat,
                data: dataChat[itemChat],
              });
            });
            // semua data-data yang telah diubah menjadi array of object kemudian dimasukkan kedalam array kosong 'allDataChat'
            allDataChat.push({
              id: key,
              data: newDataChat,
            });
          });
          console.log('allDataChat', allDataChat);
          setChatData(allDataChat);
        }
      });
  }, [dataDoctor.data.uid, user.uid]);

  const getDataFromLocal = () => {
    getData('user').then((res) => setUser(res));
  };

  const chatSend = () => {
    const today = new Date();

    const data = {
      sentBy: user.uid,
      chatDate: new Date().getTime(),
      chatTime: getChatTime(today),
      chatContent: chatContent,
    };

    // kirim ke DB
    const idUserDoctor = `${user.uid}_${dataDoctor.data.uid}`;
    const urlDB = `chatting/${idUserDoctor}/all_chat/${getSendChat(today)}`;

    Fire.database()
      .ref(urlDB)
      .push(data)
      .then((res) => setChatContent(''))
      .catch((err) => showError(err.message));
  };
  return (
    <View style={styles.page}>
      <Header
        type="dark-profile"
        onPress={() => navigation.goBack()}
        fullName={dataDoctor.data.fullName}
        job={dataDoctor.data.category}
        photo={dataDoctor.data.photo}
      />
      <View style={styles.wrapperChat}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {chatData.map((chat) => {
            return (
              <View key={chat.id}>
                <Text style={styles.dateChat}>{chat.id}</Text>
                {chat.data.map((itemChat) => {
                  return (
                    <ChatItem
                      key={itemChat.id}
                      isMe={itemChat.data.sentBy === user.uid}
                      text={itemChat.data.chatContent}
                      date={itemChat.data.chatTime}
                    />
                  );
                })}
                {/* <ChatItem />
                <ChatItem isMe /> */}
              </View>
            );
          })}
        </ScrollView>
      </View>
      <InputChat
        value={chatContent}
        onChangeText={(value) => setChatContent(value)}
        onBtnPress={chatSend}
      />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'space-between',
  },
  dateChat: {
    fontSize: 11,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    textAlign: 'center',
    paddingVertical: 20,
  },
  wrapperChat: {flex: 1},
});
