import React, {useState, useEffect} from 'react';

import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-toast-message'; //for popup update
import {AsyncStorage} from 'react-native';
import {ImageSlider} from 'react-native-image-slider-banner';

const LoginScreen = ({navigation}) => {
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
        }}>
        <View
          style={{
            width: '100%',
            height: 30,
            paddingTop: 60,
          }}>
          <Image
            source={require('./../assets/logoo.png')}
            style={{height: 60, width: '100%'}}
          />
          <View
            style={{
              width: '100%',
              height: 240,
              marginTop: 20,
              marginRight: 10,
            }}>
            <ImageSlider
              data={[
                {
                  img: 'https://img.freepik.com/free-vector/people-using-online-apps-set_74855-4457.jpg?w=2000',
                },
                {
                  img: 'https://img.freepik.com/free-vector/freelancer-working-laptop-her-house_1150-35054.jpg',
                },
                {
                  img: 'https://img.freepik.com/free-vector/freelancer-working-laptop-her-house_1150-35048.jpg?w=2000',
                },
              ]}
              autoPlay={true}
              onItemChanged={item => console.log('item', item)}
              closeIconColor="#fff"
              // caroselImageStyle={{resizeMode: 'cover'}}
              showIndicator={false}
            />
          </View>
          <View
            style={{
              height: 30,
              justifyContent: 'center',

              width: '100%',
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 170,
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
            <Icon style={styles.iconn} name="user" size={17} />
            <View style={styles.inputContainer}>
              <TextInput
                onChangeText={password => {
                  setPassword(password);
                }}
                placeholder={'Password:'}
                secureTextEntry={true}
                style={styles.input}
              />
              <Icon style={styles.icon} name="lock" size={17} color="grey" />
            </View>
            <View
              style={{
                paddingBottom: 24,

                width: '100%',
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ForgetPassword');
                }}>
                <Text style={styles.forget}>Forget Your Password?</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                height: 60,
                marginTop: 10,
                justifyContent: 'center',
                width: '100%',
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SellerDashboard');
                }}>
                <Text style={styles.Loginbuttonblack}>LOGIN</Text>
              </TouchableOpacity>
              <View
                style={{
                  justifyContent: 'center',
                  paddingHorizontal: 40,
                  marginTop: 20,
                  width: '100%',
                  flexDirection: 'row',
                }}>
                <Text style={styles.signup}>Don't Have An Account?</Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('SignupScreen');
                  }}>
                  <Text
                    style={{
                      color: '#1260CC',
                      fontSize: 12,
                      marginLeft: 5,
                      // fontWeight: 'bold',
                    }}>
                    Signup
                  </Text>
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

  inputContainer: {
    justifyContent: 'center',
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

  icon: {
    position: 'absolute',
    right: 295,
    bottom: 36,
  },
  iconn: {
    position: 'absolute',
    right: 316,
    bottom: 85,
  },

  input: {
    height: 40,
    padding: 10,
    // borderWidth: 1,
    borderColor: 'black',

    marginBottom: 90,
    borderRadius: 30,
    backgroundColor: '#fbfbfb',
    paddingLeft: 30,
    fontWeight: 'bold',

    elevation: 2.5,
  },

  signup: {
    color: 'black',
    fontSize: 12,
  },

  Loginbuttonblack: {
    fontSize: 15,
    color: 'white',
    // fontWeight: 'bold',
    backgroundColor: '#1260CC',
    height: 40,
    borderRadius: 30,
    paddingLeft: 135,
    paddingTop: 10,
    elevation: 2,

    fontWeight: 'bold',
  },
});

export default LoginScreen;
