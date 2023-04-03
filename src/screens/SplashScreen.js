// import React, {useEffect} from 'react';
// import {ImageBackground, StyleSheet, Text, View, Image} from 'react-native';
// import {AsyncStorage} from 'react-native';

// const image = {
//   uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1c7d8093097935.5e5c95723aba7.jpg',
// };

// const SplashScreen = ({navigation}) => {
//   useEffect(() => {
//     (async function anyy() {
//       const isLogin = await AsyncStorage.getItem('isLogin');
//       const email = await AsyncStorage.getItem('userEmail');
//       //2 line code
//       // const user = await AsyncStorage.getItem('user');
//       // const userObj = JSON.parse(user);
//       //1 line code
//       const userObj = JSON.parse(await AsyncStorage.getItem('user'));
//       if (isLogin !== null && isLogin !== 'false') {
//         alert('Welcome back ' + userObj.name);
//         navigation.navigate('APICall');
//       } else {
//         navigation.navigate('WhatsappBuiness');
//       }
//     })();
//     // setTimeout(() => {
//     //   navigation.navigate('WhatsappBuiness');
//     // }, 2000);
//   }, []);
//   return (
//     <View
//       style={{
//         flex: 0.5,
//         width: '100%',
//         height: 100,
//       }}>
//       <Image
//         source={require('./../assets/azaad.png')}
//         style={{height: 330, width: '100%'}}
//       />
//       <Image
//         source={require('./../assets/furorrr.jpg')}
//         style={{height: 360, width: '100%'}}
//       />
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
//   image: {
//     flex: 1,
//     justifyContent: 'center',
//   },
// });
// export default SplashScreen;

import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet, Text, View, Image} from 'react-native';
import {AsyncStorage} from 'react-native';

const image = {
  uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1c7d8093097935.5e5c95723aba7.jpg',
};

const SplashScreen = ({navigation}) => {
  // useEffect(() => {
  //   (async function anyy() {
  //     const isLogin = await AsyncStorage.getItem('isLogin');
  //     const email = await AsyncStorage.getItem('userEmail');
  //     //2 line code
  //     // const user = await AsyncStorage.getItem('user');
  //     // const userObj = JSON.parse(user);
  //     //1 line code
  //     const userObj = JSON.parse(await AsyncStorage.getItem('user'));
  //     if (isLogin !== null && isLogin !== 'false') {
  //       alert('Welcome back ' + userObj.name);
  //       navigation.navigate('APICall');
  //     } else {
  //       navigation.navigate('WhatsappBuiness');
  //     }
    // })();
  setTimeout(() => {
    navigation.navigate('MainScreen');
  }, 2000);
 // }, []);
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        height: 100,
        backgroundColor: 'white',
      

        justifyContent: 'center',
      }}>
      <Image
        source={require('./../assets/valiosacommerce.png')}
        style={{height: '65%', width: '100%'}}
      />
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
    justifyContent: 'center',
  },
});
export default SplashScreen;
