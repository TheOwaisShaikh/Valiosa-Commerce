import React, {useState,useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  Button,
  Animated,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import Iconss from 'react-native-vector-icons/MaterialCommunityIcons';
import Location from 'react-native-vector-icons/Entypo';
import Blink from 'react-native-vector-icons/MaterialIcons';

const ChatScreen = ({navigation}) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input) return;
    setMessages([...messages, {text: input, type: 'text', time: new Date().toLocaleTimeString()}]);;
    setInput('');
  };

  const handleDocumentPicker = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setMessages([...messages, {text: result.uri, type: 'document'}]);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('Canceled from single doc picker');
      } else {
        throw err;
      }
    }
  };
const sendMessage = text => {
  const currentTime = new Date().toLocaleString();
  const message = {text, type: 'text', time: currentTime};
  setMessages([...messages, message]);
};

const renderMessage = ({item}) => {
  const {text, type, time} = item;
  let backgroundColor = '#ededed';
  if (text.length > 20) {
    backgroundColor = '#f1f0f0';
  }
  if (text.length > 40) {
    backgroundColor = '#e5e5e5';
  }
  return (
    <View
      style={{
        alignSelf: 'flex-start',
        backgroundColor: backgroundColor,
      
        height: 25,
        borderRadius: 10,
        marginLeft: 10,
        marginBottom: 10,
        paddingTop: 3,
        paddingLeft: 10,
        flexDirection:'row',
      }}>
      {type === 'text' ? <Text>{text}</Text> : <Text>Document : {text}</Text>}
      <Text style={{ fontSize: 8, color: 'grey',marginLeft:10,paddingTop:10, }}>
        {time}
      </Text>
    </View>
  );
};


const messageTextStyle = {color: 'black'};
    const [fadeAnim] = useState(new Animated.Value(1));

    useEffect(() => {
        Animated.loop(
          Animated.sequence([
            Animated.timing(fadeAnim, {
              toValue: 0,
              duration: 1000,
              useNativeDriver: true,
            }),
            Animated.timing(fadeAnim, {
              toValue: 1,
              duration: 1000,
              useNativeDriver: true,
            }),
          ]),
        ).start();
    }, [fadeAnim]);
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 250,
          width: '100%',
          backgroundColor: '#f1f0f0',
          elevation: 5,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}>
        <View
          style={{
            height: 40,
            width: '100%',
            backgroundColor: '#1260cc',
            elevation: 5,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}></View>
        <Image
          source={require('./../assets/owaishaikh.jpg')}
          style={{
            width: 100,
            height: 100,
            borderRadius: 400 / 2,
            marginLeft: '36%',

            marginTop: 10,
          }}
        />
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            textAlign: 'center',
            marginTop: 10,
            fontWeight: 'bold',
          }}>
          Owais Shaikh
        </Text>
        <View
          style={{
            height: 20,
            width: '100%',
            flexDirection: 'row',
          }}>
          <Location
            style={{marginLeft: 100}}
            name="location-pin"
            size={12}
            color="grey"
          />
          <Text
            style={{
              color: 'grey',
              fontSize: 10,
              textAlign: 'center',
              marginLeft: 5,

              letterSpacing: 1,
            }}>
            Hyderabad City,Pakistan
          </Text>
        </View>
        <Text
          style={{
            color: 'black',
            fontSize: 14,
            textAlign: 'center',
            marginTop: 5,
            marginLeft: 3,
            letterSpacing: 4,
          }}>
          SocialMediaMarketer
        </Text>
      </View>

      <FlatList data={messages} renderItem={renderMessage} inverted />
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          // borderTopWidth: 1,
          // borderColor: '#1260cc',
          backgroundColor: '#f1f0f0',
          borderRadius: 10,
          padding: 5,
          width: '95%',
          marginLeft: 10,
          marginBottom: 5,
          height: 50,
        }}>
        <TextInput
          style={{
            flex: 1,
            padding: 10,
            color: 'black',
           
            borderRadius: 10,
          }}
          value={input}
          onChangeText={text => setInput(text)}
          placeholder="Type a message"
        />

        <Icon
          onPress={handleSend}
          style={{marginTop: 10}}
          name="send"
          size={20}
          color="black"
        />
        <Iconss
          onPress={handleDocumentPicker}
          style={{marginTop: 10, marginLeft: 10}}
          name="file-document-outline"
          size={23}
          color="black"
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Hiring');
        }}
        style={{
          width: 100,
          height: 35,
          marginTop: 50,
          flexDirection: 'row',
          elevation: 2,
          position: 'absolute',

          right: 10,
          backgroundColor: 'white',
          borderRadius: 30,
        }}>
        <Image
          source={require('./../assets/owaishaikh.jpg')}
          style={{
            width: 25,
            height: 25,
            borderRadius: 400 / 2,
            marginTop: 5,
            marginLeft: 8,
          }}
        />
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: 'bold',

            marginTop: 6,
            marginLeft: 5,
          }}>
          Hire
        </Text>
        <Animated.View style={{opacity: fadeAnim}}>
          <Blink
            style={{marginTop: 11, marginLeft: 5}}
            name="stop-circle"
            size={14}
            color="#1260cc"
          />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {},
  input: {},
  message: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
});
export default ChatScreen;
