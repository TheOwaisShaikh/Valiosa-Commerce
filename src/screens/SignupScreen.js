import React, {useState, useEffect} from 'react';
// import OTPInputView from '@twotalltotems/react-native-otp-input';
// import {useIsFocused} from '@react-navigation/native';
// import {useRef} from 'react';
// import {useTimeout} from '../../hooks/useTimeout';
import {IconName} from 'react-icons/entypo';
import DocumentPicker from 'react-native-document-picker';
import Iconic from 'react-native-vector-icons/FontAwesome';
import {
  FlatList,
  Image,
  Text,
  View,
  ToastAndroid,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Button,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-toast-message'; //for popup update
import {AsyncStorage} from 'react-native';
import {ImageSlider} from 'react-native-image-slider-banner';

const SignupScreen = ({navigation}) => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [repeatPassword, setRepeatPassword] = useState('');

   const handleSignup = async () => {
     if (password !== repeatPassword) {
       alert("Passwords don't match");
       return;
     }
     try {
       const user = {name, email, password};
       await AsyncStorage.setItem('user', JSON.stringify(user));
       alert('Signup successful!');
       navigation.navigate('Home');
     } catch (e) {
       console.log(e);
     }
   };

   const [multipleFile, setMultipleFile] = useState([]);
   function showToast() {
     ToastAndroid.show('Request sent successfully!', ToastAndroid.SHORT);
   }
  const validateEmail = email => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
  };
  const [showText, setShowText] = useState(true);
  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      'Sent Sucessfully',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };
  
 const selectMultipleFile = async () => {
   //Opening Document Picker for selection of multiple file
   try {
     const results = await DocumentPicker.pickMultiple({
       type: [DocumentPicker.types.images],
       //There can me more options as well find above
     });
     for (const res of results) {
       //Printing the log realted to the file
       console.log('res : ' + JSON.stringify(res));
       //  console.log('URI : ' + res.uri);
       //  console.log('Type : ' + res.type);
       console.log('File Name : ' + res.name);
       //  console.log('File Size : ' + res.size);
     }
     //Setting the state to show multiple file attributes
     setMultipleFile(results);
   } catch (err) {
     //Handling any exception (If any)
     if (DocumentPicker.isCancel(err)) {
       //If user canceled the document selection
       alert('Canceled from multiple doc picker');
     } else {
       //For Unknown Error
       alert('Unknown Error: ' + JSON.stringify(err));
       throw err;
     }
   }
 };



  useEffect(() => {
    // Change the state every second or the time given by User.
    const interval = setInterval(() => {
      setShowText(showText => !showText);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const loginOnPress = async () => {
    navigation.navigate('APICall');
    if (getEmail === '') {
      Toast.show({
        type: 'error', //success,error,info
        text1: 'Dear User',
        text2: 'Please Enter Email',
      });
    } else if (getPassword === '') {
      alert('Insert Password');
    } else if (getEmail != '') {
      if (validateEmail(getEmail)) {
        Toast.show({
          type: 'success', //success,error,info
          text1: 'Dear User',
          text2: 'Welcome',
        });
        await AsyncStorage.setItem('userEmail', getEmail);
        await AsyncStorage.setItem('isLogin', 'true');
        const userObj = {
          name: 'Mr Owais',
          email: getEmail,
        };
        await AsyncStorage.setItem('user', JSON.stringify(userObj));

        setLoading(true);
        // setTimeout(() => {
        setLoading(false);
        navigation.navigate('APICall');
        // }, 1000);
      } else {
        alert('Email format is invalid');
      }
    }
  };

  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          height: 40,
          width: '100%',
          backgroundColor: '#1260cc',
          elevation: 8,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}></View>
      <View
        style={{
          width: '100%',
          height: '20%',
          paddingTop: 20,
        }}>
        <Image
          source={require('./../assets/logoo.png')}
          style={{height: 60, width: '100%'}}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Hiring');
        }}
        style={{
          width: 90,
          height: 90,

          // elevation: 2,
          position: 'absolute',
          marginTop: 140,
          marginLeft: 140,
          zIndex: 1,
          backgroundColor: 'white',
          borderRadius: 400 / 2,
        }}>
        <Iconic
          style={{marginTop: 13, marginLeft: 10}}
          name="user-circle"
          size={70}
          color="grey"
        />
      </TouchableOpacity>
      <View
        style={{
          height: '60%',
          padding: 10,
          elevation: 5,
          width: '90%',
          borderRadius: 5,
          marginLeft: 20,
          marginTop:20,
          backgroundColor: '#ededed',
          justifyContent:'space-between',
        }}>
        <TextInput
          value={name}
          placeholder={'Name:'}
          onChangeText={text => setName(text)}
        />
        <View
          style={{
            height: 1,
            width: '98%',
            marginLeft: 5,
            backgroundColor: 'black',
          }}></View>

        <TextInput
          value={email}
          placeholder={'Password:'}
          onChangeText={text => setEmail(text)}
        />
        <View
          style={{
            height: 1,
            width: '98%',
            marginLeft: 5,
            backgroundColor: 'black',
          }}></View>

        <TextInput
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder={'Password:'}
          secureTextEntry={true}
        />
        <View
          style={{
            height: 1,
            width: '98%',
            marginLeft: 5,
            backgroundColor: 'black',
          }}></View>

        <TextInput
          value={repeatPassword}
          placeholder={'Repeat Password:'}
          onChangeText={text => setRepeatPassword(text)}
          secureTextEntry={true}
        />
        <View
          style={{
            height: 1,
            width: '98%',
            marginLeft: 5,
            backgroundColor: 'black',
          }}></View>
        {/*Showing the data of selected Multiple files*/}
        {multipleFile.map((item, key) => (
          <View key={key}>
            <View
              style={{
                height: 40,
                width: '100%',
                // backgroundColor: 'black',
                // elevation:5,
                marginLeft: 1,
                marginTop: 10,
              }}>
              <Text style={styles.textStyle}>
                File Name: {item.name ? item.name : ''}
                {'\n'}
                {/* Type: {item.type ? item.type : ''}
                {'\n'}
                File Size: {item.size ? item.size : ''}
                {'\n'}
                URI: {item.uri ? item.uri : ''}
                {'\n'} */}
              </Text>
            </View>
          </View>
        ))}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LoginScreen');
          }}>
          <View
            style={{
              height: 40,
              width: '100%',
              backgroundColor: 'black',
              elevation: 5,
              paddingTop: 5,
              paddingLeft: 25,
              // flexDirection: 'row',
              marginTop: 30,
              borderRadius: 5,
            }}>
            {/*Single file selection button*/}
            <Text
              style={{
                fontSize: 18,
                color: 'white',
                fontWeight: 'bold',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 100,
              }}>
              Signup
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: 30,
            width: '100%',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 12,
              color: 'black',
              marginTop: 10,
              marginLeft: 70,
            }}>
            Already Have An Account?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SellerLogin');
            }}>
            <Text
              style={{
                fontSize: 12,
                color: '#1260cc',
                marginTop: 10,
                marginLeft: 5,
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  inputContainer: {
    justifyContent: 'center',
  },

  input: {
    height: 50,
  },
  forget: {
    fontSize: 10,
    marginLeft: 212,
    flexDirection: 'row',
    height: 20,
    color: 'grey',
    width: '100%',
    fontWeight: 'bold',
  },
  service: {
    fontWeight: 'bold',
    fontSize: 20,
    height: 60,
    color: 'white',
  },
  icon: {
    position: 'absolute',
    right: 295,
    bottom: 37,
  },
  iconn: {
    position: 'absolute',
    right: 316,
    bottom: 85,
  },
  hint: {
    fontSize: 20,
    color: 'white',
  },
  button: {
    fontWeight: 'bold',
    borderRadius: 60,
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
  textStyle: {
    fontSize: 10,
    color: 'grey',
  },
  number: {
    marginTop: 30,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#fbfbfb',
    paddingLeft: 30,
    fontWeight: 'bold',
    // color: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 2,

    elevation: 2.5,
  },
  uploadImage: {
    marginTop: 30,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#fbfbfb',
    paddingLeft: 30,
    fontWeight: 'bold',
    // color: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 2,

    elevation: 2.5,
  },
  upload: {
    marginTop: 7,
  },

  email: {
    marginTop: 30,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#fbfbfb',
    paddingLeft: 30,
    fontWeight: 'bold',
    // color: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 2,

    elevation: 2.5,
  },
  name: {
    marginTop: 10,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#fbfbfb',
    paddingLeft: 30,
    fontWeight: 'bold',
    // color: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 2,

    elevation: 2.5,
  },
  baseText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  Login: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  Newtext: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    paddingTop: 10,
  },
  signup: {
    color: 'black',
    fontSize: 12,
  },
  signuplink: {
    color: 'black',
    fontSize: 12,
    paddingHorizontal: 6,
    color: 'grey',
    textDecorationLine: 'underline',
  },
  Loginbuttonblack: {
    fontSize: 15,
    color: 'white',
    // fontWeight: 'bold',
    fontstyle: 'white',
    backgroundColor: '#1260CC',
    height: 40,
    borderRadius: 30,
    paddingLeft: 135,
    paddingTop: 10,
    elevation: 2,
    shadowOpacity: 0.5,
    shadowRadius: 2,
    // borderWidth: 1,
    // borderColor: 'black',
    fontWeight: 'bold',
  },
  text: {
    color: 'black',
    paddingLeft: 10,
    textAlign: 'center',
    paddingRight: 5,
  },
  register: {
    paddingHorizontal: 10,
    fontSize: 10,
  },
});

export default SignupScreen;
