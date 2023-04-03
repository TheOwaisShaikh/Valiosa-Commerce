import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Image,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Button,
  TextInput,
} from 'react-native';
const ForgetPassword = ({navigation}) => {
  //   get  Value, set value  =   default value==>  hook
  const [loading, setLoading] = useState(false); // why use state is false
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    console.warn(counter);
  }, [counter]);

  useEffect(() => {
    console.log('tera kam hogya  ' + loading);
  }, [loading]);
  //[] dependancy array
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
              elevation:5,
              borderBottomLeftRadius:30,
              borderBottomRightRadius:30,
        
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
            onChangeText={username => {}}
            placeholder={'Enter Email'}
            style={styles.input}
          />
          <View
            style={{
              height: 50,
              marginTop: 40,
              justifyContent: 'center',
              width: '100%',
            }}>
           <TouchableOpacity
              onPress={() => {
                
              }}>
              <Text style={styles.sendemail}>SEND EMAIL</Text>
            </TouchableOpacity>
            <View
              style={{
                justifyContent: 'center',
                paddingHorizontal: 40,
                marginTop: 30,
                width: '100%',
                flexDirection: 'row',
              }}>
              <Text style={styles.signup}>Forget Email Address?</Text>
              <TouchableOpacity
                onPress={() => {
                  // navigation.navigate('Signup');
                  setLoading(true);
                }}>
                <Text style={styles.signuplink}>Try Another Way</Text>
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
    height: 44,
    padding: 10,
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 10,
  },
  baseText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  Login: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  Newtext: {
    fontSize: 15,
    color: 'black',
    paddingHorizontal: 21,
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
  sendemail:{
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    fontstyle: 'white',
    backgroundColor: '#1260CC',
    height: 40,
    borderRadius: 5,
    paddingLeft: 115,
    paddingTop: 10,
    elevation:5,
          borderWidth:1,
              borderColor:'black',
  },

});

export default ForgetPassword;
