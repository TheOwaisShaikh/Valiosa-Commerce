import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Image,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Button,
  TextInput,
} from 'react-native';
import Toast from 'react-native-toast-message'; //for popup update
import {AsyncStorage} from 'react-native';

const LoginFormClient = ({navigation}) => {
  const [loading, setLoading] = useState(false); // why use state is false
  const [getEmail, setEmail] = useState('');
  const [getPassword, setPassword] = useState('');

  const validateEmail = email => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
  };

  const [showText, setShowText] = useState(true);

  useEffect(() => {
    // Change the state every second or the time given by User.
    const interval = setInterval(() => {
      setShowText(showText => !showText);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  //   const loginOnPress = async () => {
  // navigation.navigate('APICall');
  //     if (getEmail === '') {
  //       Toast.show({
  //         type: 'error', //success,error,info
  //         text1: 'Dear User',
  //         text2: 'Please Enter Email',
  //       });
  //     } else if (getPassword === '') {
  //       alert('Insert Password');
  //     } else if (getEmail != '') {
  //       if (validateEmail(getEmail)) {
  //         Toast.show({
  //           type: 'success', //success,error,info
  //           text1: 'Dear User',
  //           text2: 'Welcome',
  //         });
  //         await AsyncStorage.setItem('userEmail', getEmail);
  //         await AsyncStorage.setItem('isLogin', 'true');
  //         const userObj = {
  //           name: 'Mr Owais',
  //           email: getEmail,
  //         };
  //         await AsyncStorage.setItem('user', JSON.stringify(userObj));

  //         setLoading(true);
  //         // setTimeout(() => {
  //         setLoading(false);
  //         navigation.navigate('APICall');
  //         // }, 1000);
  //       } else {
  //         alert('Email format is invalid');
  //       }
  //     }
  //   };

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
          elevation: 5,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}>
        <View
          style={{
            width: '100%',
            height: 120,
            paddingTop: 50,
            // padding: 10,
          }}>
          <Image
            source={require('./../assets/logoo.png')}
            style={{height: 60, width: '100%', }}
          />

          <View
            style={{
              height: 30,
              justifyContent: 'center',
              width: '100%',
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 270,
            }}>
            <TextInput
              onChangeText={text => {
                // console.log(text);
                setEmail(text);
              }}
              value={getEmail}
              placeholder={'UserName:'}
              style={styles.input}
              keyboardType="email-address"
            />

            <TextInput
              onChangeText={password => {
                setPassword(password);
              }}
              placeholder={'Password:'}
              secureTextEntry={true}
              style={styles.input}
            />

            <View
              style={{
                height: 60,
                marginTop: 40,
                justifyContent: 'center',
                width: '100%',
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('MainScreenExtreme');
                }}>
                <Text style={styles.Loginbuttonblack}>LOGIN</Text>
              </TouchableOpacity>
              <View
                style={{
                  height: 10,
                  paddingTop: 20,

                  width: '100%',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('ForgetPassword');
                  }}>
                  <Text style={styles.forget}>Forget password?</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  forget: {
    fontSize: 11,
    marginLeft: 232,
    flexDirection: 'row',
    height: 20,
    color: 'grey',
    width: '100%',
  },
  service: {
    fontWeight: 'bold',
    fontSize: 20,
    height: 60,
    color: 'white',
  },
  hint: {
    fontSize: 20,
    color: 'white',
  },
  button: {
    fontWeight: 'bold',
    borderRadius: 50,
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
  input: {
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    textDecorationLine: 'underline', //ye work kion nai krrha
    marginBottom: 30,
    borderRadius: 10,
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
    borderRadius: 5,
    paddingLeft: 135,
    paddingTop: 10,
    elevation: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  text: {
    color: 'black',
    paddingLeft: 10,
    textAlign: 'center',
    paddingRight: 5,
  },
});

export default LoginFormClient;
