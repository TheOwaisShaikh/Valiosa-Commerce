// import React, {useState, useEffect} from 'react';
// import {
//   TouchableOpacity,
//   View,
//   FlatList,
//   Text,
//   Image,
//   TextInput,
//   Button,
//   StyleSheet,
// } from 'react-native';
// import {AsyncStorage} from 'react-native';
// import FlatListItem from './FlatListItem';
// import {myData, array} from './../utils/dummyData';

// const FlatListWithSearch = ({navigation}) => {
//   // alert(JSON.stringify(array));
//   // alert(array.password);
//   // alert(Object.keys(array));
//   // alert(Object.values(array));

//   const [searchData, setSearchData] = useState(myData);

//   useEffect(() => {
//     //(hooks)use of use effects
//     console.log('check', searchData.length);
//   }, [searchData]);

//   return (
//     <View>
//       {/* header */}
//       <View style={{width: '100%', height: 50}}>
//         <TouchableOpacity
//           onPress={async () => {
//             await AsyncStorage.setItem('userEmail', '');
//             await AsyncStorage.setItem('isLogin', 'false');

//             setTimeout(() => {
//               // alert('go back')
//               navigation.navigate('WhatsappBuiness');
//             }, 500);
//           }}>
//           <Text>Logout</Text>
//         </TouchableOpacity>
//       </View>

//       <FlatList
//         data={searchData}
//         numColumns={2}
//         renderItem={({item, index}) => {
//           return (
//             <View
//               style={{
//                 flex: 1,
//                 resizeMode: 'cover',
//                 height: 280,
//                 alignItems: 'center',
//                 backgroundColor: 'white',
//               }}>
//               <FlatListItem
//                 item={item}
//                 navigation={navigation}
//                 bgColor={index % 2 == 0 ? '#f2c' : '#fc2'}
//                 onPress={() => {
//                   alert('Call   back received ' + index);
//                   navigation.navigate('Product', {product: item});
//                 }}
//               />
//             </View>
//           );
//         }}
//       />
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   button: {
//     borderRadius: 25,
//     borderWidth: 2,
//     backgroundColor: '#585D5B',
//     borderColor: 'black',
//     paddingLeft: 20,
//     alignSelf: 'flex-end',
//   },
// });
// export default FlatListWithSearch;

import React, {useState} from 'react';
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
import {ImageSlider} from 'react-native-image-slider-banner';
const RegisterExtreme = ({navigation}) => {
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
            marginTop: 40,
            padding: 30,
          }}>
          <Image
            source={require('./../assets/logoo.png')}
            style={{height: 60, width: '100%'}}
          />
          <View
            style={{
              width: '100%',
              height: 250,
              marginTop: 40,
            }}>
            <ImageSlider
              data={[
                {
                  img: 'https://previews.123rf.com/images/vpif/vpif2005/vpif200500032/147790596-freelance-work-concept-people-working-from-home-freelancer-in-comfortable-conditions-vector-illustra.jpg',
                },
                {
                  img: 'https://img.freepik.com/free-vector/freelancer-working-laptop-her-house_1150-35054.jpg',
                },
                {
                  img: 'https://c8.alamy.com/comp/2CPNMWR/online-shopping-and-e-commerce-template-with-people-cartoon-vector-illustration-2CPNMWR.jpg',
                },
              ]}
              autoPlay={true}
              onItemChanged={item => console.log('item', item)}
              closeIconColor="#fff"
              // caroselImageStyle={{resizeMode: 'cover'}}
              showIndicator={false}
            />
            <View
              style={{
                height: 50,
                marginTop: 120,
                justifyContent: 'center',
                width: '100%',
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ScheduleInterview');
                }}>
                <Text style={styles.Loginbutton}>Find a service</Text>
              </TouchableOpacity>
              <View
                style={{
                  height: 50,
                  marginTop: 40,
                  justifyContent: 'center',
                  width: '100%',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('MainScreenExtreme');
                  }}>
                  <Text style={styles.Loginbuttonblack}>Become a seller</Text>
                </TouchableOpacity>
                <View
                  style={{
                    justifyContent: 'center',
                    paddingHorizontal: 40,
                    width: '100%',
                    height: 60,
                    flexDirection: 'row',
                    // backgroundColor:'red',
                    paddingTop: 20,
                  }}>
                  <Text style={styles.signup}>Already Registered?</Text>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('APICall');
                    }}>
                    <Text style={styles.signuplink}>Login</Text>
                  </TouchableOpacity>
                </View>
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
    borderRadius: 40,
  },
  forget: {
    fontSize: 11,
    marginLeft: 260,
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
    borderColor: 'blue',
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
    borderColor: 'white',
    textDecorationLine: 'underline', //ye work kion nai krrha
    marginBottom: 20,
    backgroundColor: '#ececec',
  },
  baseText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  Login: {
    fontWeight: 'bold',
    fontSize: 35,
    color: 'black',
    // backgroundColor:'red',
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  GetStarted: {
    fontSize: 15,
    color: 'black',
    // backgroundColor:'red',
    paddingHorizontal: 27,
    paddingTop: 10,
  },
  signup: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'Qamila',
  },
  signuplink: {
    fontSize: 15,
    paddingHorizontal: 6,
    color: '#1260cc',
    // textDecorationLine: 'underline',
  },
  Loginbutton: {
    fontSize: 15,
    color: 'white',
    // fontWeight: 'bold',
    fontstyle: 'white',
    backgroundColor: '#1260cc',
    height: 40,
    borderRadius: 20,
    paddingLeft: 100,
    paddingTop: 10,
    elevation:2.5,
  },
  Loginbuttonblack: {
    fontSize: 15,
    color: 'white',
    // fontWeight: 'bold',
    fontstyle: 'white',
    backgroundColor: 'black',
    height: 40,
elevation:2.5,
    borderRadius: 20,
    paddingLeft: 95,
    paddingTop: 10,
  },
});

export default RegisterExtreme;
