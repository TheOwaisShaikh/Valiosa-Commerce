import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Entypo';
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
  ToastAndroid,
  StatusBar,
  ScrollView,
} from 'react-native';

const BecomeSeller = ({navigation}) => {
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
          height: 50,
          width: '100%',
          backgroundColor: 'white',
          // elevation: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('APICall')}>
          <Image
            source={require('./../assets/images.png')}
            style={{
              height: 13,
              width: 13,
              marginTop: 40,
              marginLeft: 25,
            }}
          />
          <Text
            style={{
              fontSize: 16,
              fontStyle: 'italic',
              fontWeight: 'bold',
              color: 'grey',
              justifyContent: 'center',
              textAlign: 'center',
              marginLeft: 3,
            }}>
            Go Back
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          height: 40,
          paddingTop: 20,

          // padding: 10,
        }}>
        <Image
          source={require('./../assets/logoo.png')}
          style={{height: 60, width: '100%'}}
        />
        <View
          style={{
            height: 120,
            width: '100%',
            marginTop: 40,
          }}>
          <Text
            style={{
              marginLeft: 8,
              color: 'black',
              fontSize: 23,
              fontWeight: 'bold',
              letterSpacing: 3,
            }}>
            Work Your Way
          </Text>
          <Text
            style={{
              marginLeft: 10,
              color: 'black',
              fontSize: 15,
              // fontWeight: 'bold',
              letterSpacing: 1,
              marginTop: 20,
            }}>
            You bring the skill.
          </Text>
          <Text
            style={{
              marginLeft: 10,
              color: 'black',
              fontSize: 15,
              // fontWeight: 'bold',
              letterSpacing: 1,
            }}>
            We will make earning easy.
          </Text>
        </View>

        <View
          style={{
            height: 100,
            width: '100%',
            // backgroundColor: 'yellow',
            flexDirection: 'row',
          }}>
          <Image
            source={require('./../assets/Profoliologo.jpg')}
            style={{height: 100, width: 80}}
          />
          <View
            style={{
              height: 100,
              width: '100%',
              // backgroundColor: 'yellow',
              flexDirection: 'column',
            }}>
            <Text
              style={{
                marginLeft: 10,
                color: 'black',
                fontSize: 20,
                fontWeight: 'bold',
                letterSpacing: 2,
              }}>
              Upload Portfolio
            </Text>

            <Text
              style={{
                marginLeft: 12,
                color: 'black',
                fontSize: 11,
                letterSpacing: 1,
                // fontWeight: 'bold',
              }}>
              Upload your complete Portfolio you will get{'\n'}no need to an
              email with schedule of{'\n'}
              interview compete for clients in comment {'\n'}section enroll
              yourself here and sit out of {'\n'}the crowd.
            </Text>
          </View>
        </View>

        <View
          style={{
            height: 100,
            width: '100%',
            // backgroundColor: 'yellow',
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <Image
            source={require('./../assets/getpaid.jpg')}
            style={{height: 100, width: 80}}
          />
          <View
            style={{
              height: 100,
              width: '100%',
              // backgroundColor: 'yellow',
              flexDirection: 'column',
            }}>
            <Text
              style={{
                marginLeft: 10,
                color: 'black',
                fontSize: 20,
                fontWeight: 'bold',
                letterSpacing: 1,
              }}>
              Get Paid
            </Text>
            <Text
              style={{
                marginLeft: 12,
                color: 'black',
                fontSize: 11,
                marginTop: 5,
                letterSpacing: 1,
                // fontWeight: 'bold',
              }}>
              Get paid on time, everytime. payment is{'\n'}trasferred to your
              account and is{'\n'}available for withdrawl once it's cleared
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 100,
            width: '100%',
            // backgroundColor: 'yellow',
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <Image
            source={require('./../assets/equit.jpg')}
            style={{height: 90, width: 80}}
          />
          <View
            style={{
              height: 100,
              width: '100%',
              // backgroundColor: 'yellow',
              flexDirection: 'column',
            }}>
            <Text
              style={{
                marginLeft: 10,
                color: 'black',
                fontSize: 20,
                fontWeight: 'bold',
                letterSpacing: 2,
              }}>
              Equity
            </Text>
            <Text
              style={{
                marginLeft: 11,
                color: 'black',
                fontSize: 11,
                marginTop: 5,
                letterSpacing: 1,
                // fontWeight: 'bold',
              }}>
              Get contract base equity on store secure{'\n'}and safe
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ScheduleInterview');
          }}>
          <Text
            style={{
              marginLeft: 40,
              height: 40,
              width: '80%',
              borderRadius: 10,
              elevation: 5,
              backgroundColor: '#1260cc',
              paddingTop: 6,
              color: 'white',
              fontSize: 18,
              textAlign: 'center',
            }}>
            Continue
          </Text>
        </TouchableOpacity>
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
    height: 40,
    padding: 10,
    // borderWidth: 1,
    borderColor: 'black',

    marginBottom: 40,
    borderRadius: 30,
    backgroundColor: '#fbfbfb',

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
    // color: 'black',
    fontWeight: 'bold',
    paddingTop: 10,
  },
  textStyle: {
    fontSize: 2,
    color: 'grey',
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
    fontstyle: 'white',
  },
  textStyle: {
    backgroundColor: '#fff',
    fontSize: 10,
    marginLeft: 40,
    color: 'black',
  },
  text: {
    color: 'black',
    paddingLeft: 10,
    textAlign: 'center',
    paddingRight: 5,
  },
  maintext: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 14,
  },
  upload: {
    marginLeft: 10,
  },
});

export default BecomeSeller;
