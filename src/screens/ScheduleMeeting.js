import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  FlatList,
  ScrollView,
  Image,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Button,
  TextInput,
 
} from 'react-native';


const ScheduleMeeting = ({navigation}) => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          height: '10%',
          width: '100%',
          backgroundColor: '#1260cc',
          elevation: 5,

          flexDirection: 'row',
          paddingTop: 30,
        }}>
        <Text style={styles.name}>Owais Shaikh</Text>
      </View>
      <View
        style={{
          width: '100%',
          height: '20%',
          backgroundColor: '#1260cc',
        }}>
        <Image
          source={{
            uri: 'https://qph.cf2.quoracdn.net/main-qimg-d0d09de78e6ec195faf64ba82c2e8c6a-lq',
          }}
          style={{
            width: 80,
            height: 80,
            borderRadius: 400 / 2,
            marginLeft: 8,
          }}
        />
        <Text style={styles.name}>Owais Shaikh</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  image: {
    flex: 1,
  },
  Button: {
    fontWeight: 'bold',
  },
  text: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
  detail: {
    color: 'lightblack',
    fontSize: 15,
    paddingLeft: 10,
  },
  name: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 100,
    paddingTop:10,
  },
  sucessratio: {
    color: 'black',
    fontSize: 11,
    fontWeight: 'bold',
    paddingLeft: 12,
  },
  Portfolios: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 15,
    paddingTop: 5,
  },
  Portfoliodetail: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    paddingLeft: 14,
  },
  Portfolioss: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 15,
  },
  Portfoliodetails: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    paddingLeft: 14,
  },
  OverView: {
    color: 'black',
    fontSize: 13,

    paddingLeft: 17,
  },

  meeting: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ScheduleMeeting;
