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
  ImageBackground,
} from 'react-native';


const MainScreen = ({navigation}) => {
  
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

  const image = {
    uri: 'https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View
          style={{
            width: '100%',
            height: '10%',
            paddingTop: 6,
            // backgroundColor:'white',
          }}></View>
        <View
          style={{
            width: '100%',
            height: '30%',
            marginTop: 250,
            zIndex: 1,
            padding: 5,
          }}>
          <View
            style={{
              width: '100%',
              height: '80%',
              // backgroundColor: 'white',
              marginTop: 120,
              borderRadius: 10,
              zIndex: 1,

              // transform: [{rotateX: '180deg'}],
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: '100%',
                height: '90%',
                // backgroundColor: 'yellow',
                marginTop: 20,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: '46%',
                  height: 160,
                  backgroundColor: 'white',
                  borderRadius: 15,
                  marginLeft: 8,
                  elevation: 5,
                  // transform: [{rotateX: '180deg'}],
                }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('BecomeSeller');
                  }}>
                  <Image
                    source={require('./../assets/sellerrr.jpg')}
                    style={{
                      height: 125,
                      width: '100%',
                      resizeMode: 'contain',
                      borderTopRightRadius: 10,
                      borderTopLeftRadius: 10,
                      // transform: [{rotateX: '180deg'}],
                    }}
                  />
                  {/* <View
                  style={{
                    width: '100%',
                    height: 40,

                    backgroundColor: 'white',
                    // borderRadius: 15,
                    // marginTop: 25,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    elevation: 5,
                  }}> */}

                  <Text
                    style={{
                      color: 'black',
                      fontSize: 15,
                      marginLeft: 20,
                      marginBottom: 10,
                      marginTop: 6,
                      // fontWeight: 'bold',
                      letterSpacing: 1,
                      // transform: [{rotateX: '180deg'}],
                    }}>
                    Become a seller
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  width: '46%',
                  height: 160,
                  backgroundColor: 'white',
                  borderRadius: 15,
                  marginLeft: 12,

                  elevation: 5,
                  // transform: [{rotateX: '180deg'}],
                }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('SellerLogin');
                  }}>
                  <Image
                    source={require('./../assets/sellers.jpg')}
                    style={{
                      height: 125,
                      width: '100%',
                      resizeMode: 'cover',
                      borderTopRightRadius: 10,
                      borderTopLeftRadius: 10,
                      // transform: [{rotateX: '180deg'}],
                    }}
                  />

                  {/* <View
                    style={{
                      width: '100%',
                      height: 40,
                      backgroundColor: 'white',
                      // borderRadius: 15,
                      // marginTop: 25,
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      elevation: 5,
                    }}> */}
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 15,
                      marginLeft: 30,
                      marginBottom: 10,
                      marginTop: 6,
                      // fontWeight: 'bold',
                      letterSpacing: 1,
                      // transform: [{rotateX: '180deg'}],
                    }}>
                    Find a service
                  </Text>
                  {/* </View> */}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: '30%',
            backgroundColor: 'white',
            flexDirection: 'row',
            borderRadius: 10,
            marginTop: 20,

            // transform: [{rotateX: '180deg'}],
          }}>
         
          <View
            style={{
              width: '80%',
              height: '25%',
              // backgroundColor: 'yellow',
              paddingLeft: 10,
              marginTop: 140,
              flexDirection: 'row',

              // transform: [{rotateX: '180deg'}],
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('LoginScreen');
              }}>
              <Text
                style={{
                  color: '#1260cc',
                  fontSize: 13,

                  fontWeight: 'bold',
                  marginLeft: 6,
                }}>
                Seller Login
              </Text>
            </TouchableOpacity>
            <View
              style={{
                width: '100%',
                height: '25%',
                // backgroundColor: 'yellow',
                marginLeft: 80,
                paddingRight: 10,
                // transform: [{rotateX: '180deg'}],
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SellerLogin');
                }}>
                <Text
                  style={{
                    color: '#1260cc',
                    fontSize: 13,
                    height: 20,
                    fontWeight: 'bold',
                    marginLeft: 120,
                  }}>
                  User Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
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
  Account: {
    color: 'black',
    fontSize: 13,
  },
  RegisterHere: {
    fontSize: 13,
    paddingHorizontal: 6,
    color: '#1260cc',
    // textDecorationLine: 'underline',
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
    // color: 'black',

    elevation: 5,
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
    backgroundColor: 'black',
    height: 40,
    borderRadius: 30,
    paddingLeft: 65,
    paddingTop: 10,
    elevation: 2.5,
    // borderWidth: 1,
    // borderColor: 'black',
    // fontWeight: 'bold',
  },
  Loginbuttonblackk: {
    fontSize: 15,
    color: 'white',
    // fontWeight: 'bold',
    fontstyle: 'white',
    backgroundColor: '#1260CC',
    height: 40,
    borderRadius: 30,
    paddingLeft: 100,
    paddingTop: 10,
    elevation: 2.5,
    // borderWidth: 1,
    // borderColor: 'black',
    // fontWeight: 'bold',
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
export default MainScreen;
