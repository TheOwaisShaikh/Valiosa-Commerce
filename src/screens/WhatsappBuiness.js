import React, {useState} from 'react';
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

const WhatsappBuiness = ({navigation}) => {
  const [loading, setLoading] = useState(false); // why use state is false
  const [getEmail, setEmail] = useState('');
  const [getPassword, setPassword] = useState('');

  const validateEmail = email => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
  };

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
          width: '100%',
          // backgroundColor:'red',
          height: 140,
          marginTop: 40,
        }}>
        <Text style={styles.Login}>
          سياسي طور مضبوط ۽ معاشي طور خوشحال پاڪستان ئي ڪشمير جي آزاديءَ جي
          ضمانت قرار: پاڪستاني عوام جون دليون ڪشميري ڀائرن سان گڏ ڌڙڪن ٿيون،
          والاريل ڪشمير ۾ انساني حقن جون سنگين ڀڃڪڙيون جاري آهن
        </Text>
        <Text style={styles.Newtext}>Sign In To Continue</Text>
        <View
          style={{
            height: 250,
            justifyContent: 'center',
            width: '100%',
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: 40,
          }}>
          <TextInput
            onChangeText={text => {
              // console.log(text);
              setEmail(text);
            }}
            value={getEmail}
            placeholder={'Email'}
            style={styles.input}
            keyboardType="email-address"
          />
          <TextInput
            onChangeText={password => {
              setPassword(password);
            }}
            placeholder={'Password'}
            secureTextEntry={true}
            style={styles.input}
          />
          <View style={{width: '100%', height: 20}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ForgetPassword');
              }}>
              <Text style={styles.forget}>Forget password?</Text>
            </TouchableOpacity>
            <View
              style={{
                height: 50,
                marginTop: 40,
                justifyContent: 'center',
                width: '100%',
              }}>
              <Button
                color="black"
                title={'Login'}
                style={{zIndex: 3}} //ek hi jaga pe 2 view ajate hen view pe view ajat he to zindex dedo
                onPress={async () => {
                  await loginOnPress();
                }}
              />

              {loading && <ActivityIndicator />}
              <View
                style={{
                  justifyContent: 'center',
                  paddingHorizontal: 40,
                  marginTop: 30,
                  width: '100%',
                  flexDirection: 'row',
                }}>
                <Text style={styles.signup}>Don't Have An Account?</Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Signup');
                  }}>
                  <Text style={styles.signuplink}>Signup</Text>
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
    fontSize: 30,
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
});

export default WhatsappBuiness;


// import React, {useState} from 'react';
// import {
//   FlatList,
//   Image,
//   Text,
//   View,
//   StyleSheet,
//   ActivityIndicator,
//   TouchableOpacity,
//   Button,
//   TextInput,
// } from 'react-native';
// import Toast from 'react-native-toast-message'; //for popup update
// import {AsyncStorage} from 'react-native';

// const WhatsappBuiness = ({navigation}) => {
//   const [loading, setLoading] = useState(false); // why use state is false
//   const [getEmail, setEmail] = useState('');
//   const [getPassword, setPassword] = useState('');

//   const validateEmail = email => {
//     return email.match(
//       /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//     );
//   };

//   const loginOnPress = async () => {
//     // navigation.navigate('APICall');
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

//   return (
//     <View
//       style={{
//         flex: 1,
//         width: '100%',
//         height: '100%',
//         backgroundColor: 'white',
//       }}>
//       <View
//         style={{
//           width: '100%',
//           // backgroundColor:'red',
//           height: 140,
//           marginTop: 40,
//         }}>
//         <Text style={styles.Login}>LOGIN</Text>
//         <Text style={styles.Newtext}>Sign In To Continue</Text>
//         <View
//           style={{
//             height: 250,
//             justifyContent: 'center',
//             width: '100%',
//             paddingLeft: 20,
//             paddingRight: 20,
//             marginTop: 40,
//           }}>
//           <TextInput
//             onChangeText={text => {
//               // console.log(text);
//               setEmail(text);
//             }}
//             value={getEmail}
//             placeholder={'Email'}
//             style={styles.input}
//             keyboardType="email-address"
//           />
//           <TextInput
//             onChangeText={password => {
//               setPassword(password);
//             }}
//             placeholder={'Password'}
//             secureTextEntry={true}
//             style={styles.input}
//           />
//           <View style={{width: '100%', height: 20}}>
//             <TouchableOpacity
//               onPress={() => {
//                 navigation.navigate('ForgetPassword');
//               }}>
//               <Text style={styles.forget}>Forget password?</Text>
//             </TouchableOpacity>
//             <View
//               style={{
//                 height: 50,
//                 marginTop: 40,
//                 justifyContent: 'center',
//                 width: '100%',
//               }}>
//               <Button
//                 color="black"
//                 title={'Login'}
//                 style={{zIndex: 3}} //ek hi jaga pe 2 view ajate hen view pe view ajat he to zindex dedo
//                 onPress={async () => {
//                   await loginOnPress();
//                 }}
//               />

//               {loading && <ActivityIndicator />}
//               <View
//                 style={{
//                   justifyContent: 'center',
//                   paddingHorizontal: 40,
//                   marginTop: 30,
//                   width: '100%',
//                   flexDirection: 'row',
//                 }}>
//                 <Text style={styles.signup}>Don't Have An Account?</Text>
//                 <TouchableOpacity
//                   onPress={() => {
//                     navigation.navigate('Signup');
//                   }}>
//                   <Text style={styles.signuplink}>Signup</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   image: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   forget: {
//     fontSize: 11,
//     marginLeft: 232,
//     flexDirection: 'row',
//     height: 20,
//     color: 'grey',
//     width: '100%',
//   },
//   service: {
//     fontWeight: 'bold',
//     fontSize: 20,
//     height: 60,
//     color: 'white',
//   },
//   hint: {
//     fontSize: 20,
//     color: 'white',
//   },
//   button: {
//     fontWeight: 'bold',
//     borderRadius: 50,
//   },
//   loginText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 17,
//   },
//   input: {
//     height: 44,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: 'white',
//     textDecorationLine: 'underline', //ye work kion nai krrha
//     marginBottom: 20,
//     backgroundColor: '#ececec',
//   },
//   baseText: {
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   Login: {
//     fontWeight: 'bold',
//     fontSize: 30,
//     color: 'black',
//     paddingHorizontal: 20,
//     paddingTop: 60,
//   },
//   Newtext: {
//     fontSize: 15,
//     color: 'black',
//     paddingHorizontal: 21,
//     paddingTop: 10,
//   },
//   signup: {
//     color: 'black',
//     fontSize: 12,
//   },
//   signuplink: {
//     color: 'black',
//     fontSize: 12,
//     paddingHorizontal: 6,
//     color: 'grey',
//     textDecorationLine: 'underline',
//   },
// });

// export default WhatsappBuiness;





// import React, {useState} from 'react';
// import {
//   FlatList,
//   Image,
//   Text,
//   View,
//   StyleSheet,
//   ActivityIndicator,
//   TouchableOpacity,
//   Button,
//   TextInput,
// } from 'react-native';
// import Toast from 'react-native-toast-message'; //for popup update
// import {AsyncStorage} from 'react-native';

// const WhatsappBuiness = ({navigation}) => {
//   const [loading, setLoading] = useState(false); // why use state is false
//   const [getEmail, setEmail] = useState('');
//   const [getPassword, setPassword] = useState('');

//   const validateEmail = email => {
//     return email.match(
//       /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//     );
//   };

//   const loginOnPress = async () => {
//     // navigation.navigate('APICall');
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

//   return (
//     <View
//       style={{
//         flex: 1,
//         width: '100%',
//         height: '100%',
//         backgroundColor: 'white',
//       }}>
//       <View
//         style={{
//           width: '100%',
//           // backgroundColor:'red',
//           height: 140,
//           marginTop: 40,
//         }}>
//         <Text style={styles.Login}>LOGIN</Text>
//         <Text style={styles.Newtext}>Sign In To Continue</Text>
//         <View
//           style={{
//             height: 250,
//             justifyContent: 'center',
//             width: '100%',
//             paddingLeft: 20,
//             paddingRight: 20,
//             marginTop: 40,
//           }}>
//           <TextInput
//             onChangeText={text => {
//               // console.log(text);
//               setEmail(text);
//             }}
//             value={getEmail}
//             placeholder={'Email'}
//             style={styles.input}
//             keyboardType="email-address"
//           />
//           <TextInput
//             onChangeText={password => {
//               setPassword(password);
//             }}
//             placeholder={'Password'}
//             secureTextEntry={true}
//             style={styles.input}
//           />
//           <View style={{width: '100%', height: 20}}>
//             <TouchableOpacity
//               onPress={() => {
//                 navigation.navigate('ForgetPassword');
//               }}>
//               <Text style={styles.forget}>Forget password?</Text>
//             </TouchableOpacity>
//             <View
//               style={{
//                 height: 50,
//                 marginTop: 40,
//                 justifyContent: 'center',
//                 width: '100%',
//               }}>
//               <Button
//                 color="black"
//                 title={'Login'}
//                 style={{zIndex: 3}} //ek hi jaga pe 2 view ajate hen view pe view ajat he to zindex dedo
//                 onPress={async () => {
//                   await loginOnPress();
//                 }}
//               />

//               {loading && <ActivityIndicator />}
//               <View
//                 style={{
//                   justifyContent: 'center',
//                   paddingHorizontal: 40,
//                   marginTop: 30,
//                   width: '100%',
//                   flexDirection: 'row',
//                 }}>
//                 <Text style={styles.signup}>Don't Have An Account?</Text>
//                 <TouchableOpacity
//                   onPress={() => {
//                     navigation.navigate('Signup');
//                   }}>
//                   <Text style={styles.signuplink}>Signup</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   image: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   forget: {
//     fontSize: 11,
//     marginLeft: 232,
//     flexDirection: 'row',
//     height: 20,
//     color: 'grey',
//     width: '100%',
//   },
//   service: {
//     fontWeight: 'bold',
//     fontSize: 20,
//     height: 60,
//     color: 'white',
//   },
//   hint: {
//     fontSize: 20,
//     color: 'white',
//   },
//   button: {
//     fontWeight: 'bold',
//     borderRadius: 50,
//   },
//   loginText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 17,
//   },
//   input: {
//     height: 44,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: 'white',
//     textDecorationLine: 'underline', //ye work kion nai krrha
//     marginBottom: 20,
//     backgroundColor: '#ececec',
//   },
//   baseText: {
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   Login: {
//     fontWeight: 'bold',
//     fontSize: 30,
//     color: 'black',
//     paddingHorizontal: 20,
//     paddingTop: 60,
//   },
//   Newtext: {
//     fontSize: 15,
//     color: 'black',
//     paddingHorizontal: 21,
//     paddingTop: 10,
//   },
//   signup: {
//     color: 'black',
//     fontSize: 12,
//   },
//   signuplink: {
//     color: 'black',
//     fontSize: 12,
//     paddingHorizontal: 6,
//     color: 'grey',
//     textDecorationLine: 'underline',
//   },
// });

// export default WhatsappBuiness;


// import React, {useState} from 'react';
// import {
//   FlatList,
//   Image,
//   Text,
//   View,
//   StyleSheet,
//   ActivityIndicator,
//   TouchableOpacity,
//   Button,
//   TextInput,
// } from 'react-native';
// import Toast from 'react-native-toast-message'; //for popup update
// import {AsyncStorage} from 'react-native';

// const WhatsappBuiness = ({navigation}) => {
//   const [loading, setLoading] = useState(false); // why use state is false
//   const [getEmail, setEmail] = useState('');
//   const [getPassword, setPassword] = useState('');

//   const validateEmail = email => {
//     return email.match(
//       /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//     );
//   };

//   const loginOnPress = async () => {
//     // navigation.navigate('APICall');
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
//   return (
//     <View
//       style={{
//         flex: 1,
//         width: '100%',
//         height: '100%',
//         backgroundColor: 'white',
//       }}>
//       <View
//         style={{
//           width: '100%',
//           height: 100,
//           marginTop: 60,
//           padding: 20,
//         }}>
//         <Image
//           source={require('./../assets/extremecommercee.png')}
//           style={{height: 65, width: '100%'}}
//         />
//         <View
//           style={{
//             width: '100%',
//             // backgroundColor:'red',
//             height: 140,
//           }}>
//           <Text style={styles.Login}>LOGIN</Text>
//           <View
//             style={{
//               height: 250,
//               justifyContent: 'center',
//               width: '100%',
//               paddingTop:30,
//             }}>
//             <TextInput
//               onChangeText={text => {
//                 // console.log(text);
//                 setEmail(text);
//               }}
//               value={getEmail}
//               placeholder={'Email'}
//               style={styles.input}
//               keyboardType="email-address"
//             />
//             <TextInput
//               onChangeText={password => {
//                 setPassword(password);
//               }}
//               placeholder={'Password'}
//               secureTextEntry={true}
//               style={styles.input}
//             />
//             <View style={{width: '100%', height: 20}}>
//               <TouchableOpacity
//                 onPress={() => {
//                   navigation.navigate('ForgetPassword');
//                 }}>
//                 <Text style={styles.forget}>Forget password?</Text>
//               </TouchableOpacity>
//               <View
//                 style={{
//                   height: 50,
//                   marginTop: 70,
//                   justifyContent: 'center',
//                   width: '100%',
//                 }}>
//                 <Button
//                   color="#1260cc"
//                   title={'Login'}
//                   style={{zIndex: 3}} //ek hi jaga pe 2 view ajate hen view pe view ajat he to zindex dedo
//                   onPress={async () => {
//                     await loginOnPress();
//                   }}
//                 />
//                 <Text style={styles.or}>
//                   -------------------------------- OR
//                   -------------------------------
//                 </Text>
//                 {loading && <ActivityIndicator />}
//                 <View
//                   style={{
//                     justifyContent: 'center',
//                     paddingHorizontal: 40,
//                     marginTop: 30,
//                     width: '100%',
//                     flexDirection: 'row',
//                   }}>
//                   <Text style={styles.signup}>Don't Have An Account?</Text>
//                   <TouchableOpacity
//                     onPress={() => {
//                       navigation.navigate('Signup');
//                     }}>
//                     <Text style={styles.signuplink}>Signup</Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </View>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   image: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   forget: {
//     fontSize: 11,
//     marginLeft: 232,
//     flexDirection: 'row',
//     height: 20,
//     color: 'black',
//     width: '100%',
//   },
//   service: {
//     fontWeight: 'bold',
//     fontSize: 20,
//     height: 60,
//     color: 'white',
//   },
//   hint: {
//     fontSize: 20,
//     color: 'white',
//   },
//   button: {
//     fontWeight: 'bold',
//     borderRadius: 50,
//   },
//   loginText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 17,
//   },
//   input: {
//     height: 44,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: 'white',
//     textDecorationLine: 'underline', //ye work kion nai krrha
//     marginBottom: 20,
//     backgroundColor: '#ececec',
//   },
//   baseText: {
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   Login: {
//     fontWeight: 'bold',
//     fontSize: 25,
//     color: 'black',

//     paddingTop: 40,
//   },
//   Newtext: {
//     fontSize: 15,
//     color: 'black',
//     paddingHorizontal: 21,
//     paddingTop: 10,
//   },
//   signup: {
//     color: 'black',
//     fontSize: 12,
//   },
//   signuplink: {
//     color: 'black',
//     fontSize: 12,
//     paddingHorizontal: 6,
//     color: "#1260cc",
//     textDecorationLine: 'underline',
//   },
//   or: {
//     color: 'grey',
//     fontSize: 12,
//     paddingLeft: 40,
//     marginTop: 10,
//   },
// });

// export default WhatsappBuiness;


