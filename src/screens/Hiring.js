import React, {useState, useEffect} from 'react';

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
  Alert,
  Animated,
} from 'react-native';

import DocumentPicker from 'react-native-document-picker';
import Icon from 'react-native-vector-icons/AntDesign';
import Iconss from 'react-native-vector-icons/MaterialCommunityIcons';
import Location from 'react-native-vector-icons/Entypo';
import Blink from 'react-native-vector-icons/MaterialIcons';
import { Linking } from 'react-native';


const Hiring = ({navigation}) => {
    const [inputValue, setInputValue] = useState('');
     const handleTextInputPress = () => {
       Alert.alert(
         'Enter Amount',
          'Send amount on 00697900403403',
         [
           {
             text: 'OK',
             onPress: () => {
               // do something when OK button is pressed
             },
           },
         ],
         {cancelable: false},
       );
     };
  
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
 const [showIcon, setShowIcon] = useState(false);
  const handleSend = () => {
    if (!input) return;
    setMessages([...messages, {text: input, type: 'text'}]);
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

 const [isVisible, setIsVisible] = useState(false);
 const [selectedCurrency, setSelectedCurrency] = useState('');
 const currencies = ['$', '€', '¥', '£', '₹', '₩'];

 const toggleCurrencyList = () => {
   setIsVisible(!isVisible);
 };

 const handleCurrencySelection = currency => {
   setSelectedCurrency(currency);
   setIsVisible(false);
 };
//   const [fadeAnim] = useState(new Animated.Value(1));

//   useEffect(() => {
//     Animated.loop(
//       Animated.sequence([
//         Animated.timing(fadeAnim, {
//           toValue: 0,
//           duration: 1000,
//           useNativeDriver: true,
//         }),
//         Animated.timing(fadeAnim, {
//           toValue: 1,
//           duration: 1000,
//           useNativeDriver: true,
//         }),
//       ]),
//     ).start();
//   }, [fadeAnim]);
   const handleClick = () => {
     Alert.alert('Sent successfully!');
     navigation.navigate('ChatScreen');
   };
   const handleClicks = () => {
     Alert.alert('Cancled');
     navigation.navigate('ChatScreen');
   };
   
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 240,
          width: '100%',
          backgroundColor: '#f1f0f0',
          elevation: 5,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
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
      <ScrollView>
        <View
          style={{
            height: 110,
            width: '97.5%',
            backgroundColor: 'white',
            elevation: 5,
            borderRadius: 10,
            marginTop: 15,
            marginLeft: 5,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              marginLeft: 7,
              marginTop: 10,
              fontWeight: 'bold',
              letterSpacing: 2,
            }}>
            Contract Title
          </Text>
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              borderColor: '#1260cc',
              borderWidth: 1,
              borderRadius: 5,
              padding: 5,
              width: '98%',
              marginLeft: 4,
              marginBottom: 5,
              height: 50,
              elevation: 2,
              marginTop: 10,
            }}>
            <TextInput
              style={{
                flex: 1,
                padding: 10,
              }}
              placeholder="Type Here..."
            />
          </View>
        </View>
        <View
          style={{
            height: 110,
            width: '97.5%',
            backgroundColor: 'white',
            elevation: 5,
            borderRadius: 10,
            marginTop: 15,
            marginLeft: 5,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              marginLeft: 8,
              marginTop: 10,
              fontWeight: 'bold',
              letterSpacing: 2,
            }}>
            Terms
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 12,
              marginLeft: 12,
              marginTop: 10,
              fontWeight: 'bold',
              letterSpacing: 2,
            }}>
            Amount
          </Text>
          <View
            style={{
              flexDirection: 'row',

              width: 120,
              height: 40,
            }}>
            <TouchableOpacity
              onPress={toggleCurrencyList}
              style={{
                marginLeft: 12,
                marginTop: 10,
              }}>
              <Text>{selectedCurrency || '$'}</Text>
            </TouchableOpacity>
            {isVisible && (
              <FlatList
                data={currencies}
                numColumns={1}
                renderItem={({item}) => (
                  <TouchableOpacity
                    onPress={() => handleCurrencySelection(item)}>
                    <Text>{item}</Text>
                  </TouchableOpacity>
                )}
                keyExtractor={item => item}
              />
            )}
           
              
              <TextInput
                style={{
                  flex: 1,

                  fontSize: 14,
                }}
                placeholder="Enter Amount"
                keyboardType="numeric"
                value={inputValue}
                onChangeText={text => setInputValue(text)}
                onFocus={handleTextInputPress}
              />
          
          </View>
        </View>
        <View
          style={{
            height: 220,
            width: '97.5%',
            backgroundColor: 'white',
            elevation: 5,
            borderRadius: 10,
            marginTop: 15,
            marginLeft: 5,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              marginLeft: 7,
              marginTop: 10,
              fontWeight: 'bold',
              letterSpacing: 2,
            }}>
            Work Description
          </Text>
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              borderColor: '#1260cc',
              borderWidth: 1,
              borderRadius: 5,
              padding: 5,
              width: '98%',
              marginLeft: 4,
              marginBottom: 5,
              height: 100,
              elevation: 2,
              marginTop: 10,
            }}>
            <ScrollView>
              <TextInput
                style={{
                  flex: 1,
                  padding: 10,
                }}
                placeholder="Type Here..."
              />
            </ScrollView>
          </View>
          <TouchableOpacity onPress={handleDocumentPicker}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#1260cc',
                width: 110,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                marginLeft: 5,
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 10,

                  fontWeight: 'bold',
                  letterSpacing: 2,
                }}>
                Attach File
              </Text>
              <Iconss
                style={{marginLeft: 10}}
                name="file-document-outline"
                size={15}
                color="white"
              />
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: 110,
            width: '97.5%',
            backgroundColor: 'white',
            elevation: 5,
            borderRadius: 10,
            marginTop: 15,
            marginLeft: 5,
          }}>
          <View
            style={{
              height: 40,
              width: '100%',

              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => setShowIcon(!showIcon)}
              style={{marginTop: 10}}>
              <View
                style={{
                  width: 14,
                  height: 14,
                  borderColor: '#1260cc',
                  borderWidth: 0.5,
                  marginLeft: 11,
                  marginTop: 5,
                }}>
                {showIcon && (
                  <Icon
                    style={{}}
                    name="checksquare"
                    size={13}
                    color="#1260cc"
                  />
                )}
              </View>
            </TouchableOpacity>
            <Text
              style={{
                color: '#1260cc',
                fontSize: 10,
                marginLeft: 10,
                marginTop: 10,
              }}>
              Yes,i understand and agree to the{' '}
              <Text
                style={{color: '#1260cc', fontSize: 10, fontWeight: 'bold'}}>
                Terms of Service
              </Text>{' '}
              including the
              <Text
                style={{color: '#1260cc', fontSize: 10, fontWeight: 'bold'}}>
                {' '}
                User Agreement
              </Text>{' '}
              and{' '}
              <Text
                style={{color: '#1260cc', fontSize: 10, fontWeight: 'bold'}}>
                Privacy Policy
              </Text>
            </Text>
          </View>
          <View
            style={{
              height: 70,
              width: '100%',
              marginTop: 30,
              flexDirection: 'row',
            }}>
            <TouchableOpacity onPress={handleClick}>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#1260cc',
                  width: 200,
                  height: 30,
                  elevation: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  marginLeft: 5,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 12,

                    fontWeight: 'bold',
                    letterSpacing: 1,
                  }}>
                  Hire Owais Shaikh
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleClicks}>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#ededed',
                  width: 100,
                  height: 30,

                  elevation: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  marginLeft: 25,
                }}>
                <Text
                  style={{
                    color: '#1260cc',
                    fontSize: 12,

                    fontWeight: 'bold',
                    letterSpacing: 1,
                  }}>
                  Cancle
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  message: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
});
export default Hiring;
