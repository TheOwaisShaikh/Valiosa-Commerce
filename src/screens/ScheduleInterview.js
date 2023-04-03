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
  ToastAndroid,
  StatusBar,
  ScrollView,
} from 'react-native';
import Toast from 'react-native-toast-message'; //for popup update
import {AsyncStorage} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import Icon from 'react-native-vector-icons/Entypo';
const ScheduleInterview = ({navigation}) => {

   const [multipleFile, setMultipleFile] = useState([]);
   function showToast() {
     ToastAndroid.show('Request sent successfully!', ToastAndroid.SHORT);
   }

  const [showText, setShowText] = useState(true);
   const showToastWithGravity = () => {
     ToastAndroid.showWithGravity(
       'Sent Sucessfully',
       ToastAndroid.SHORT,
       ToastAndroid.CENTER,
     );
   };


  useEffect(() => {
    // Change the state every second or the time given by User.
    const interval = setInterval(() => {
      setShowText(showText => !showText);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
 const selectMultipleFile = async () => {
   //Opening Document Picker for selection of multiple file
   try {
     const results = await DocumentPicker.pickMultiple({
       type: [DocumentPicker.types.pdf],
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
        }}></View>
      <View
        style={{
          width: '100%',
          height: 100,
          paddingTop: 20,
          // padding: 10,
        }}>
        <Image
          source={require('./../assets/logoo.png')}
          style={{height: 60, width: '100%'}}
        />
        <View
          style={{
            height: 240,
            width: '80%',
            marginTop: 40,
            marginLeft: 40,
          }}>
          <Image
            source={require('./../assets/Profoliologo.jpg')}
            style={{height: 220, width: '100%'}}
          />
        </View>
        <Text
          style={{
            marginLeft: 85,
            color: 'black',
            fontSize: 20,
            // fontWeight: 'bold',
          }}>
          Upload Your Portfolio
        </Text>
        <Text
          style={{
            marginLeft: 22,
            color: 'grey',
            fontSize: 12,
            marginTop: 10,
          }}>
          Upload A PDF In Which Portfolio With Resume,Certifications,
        </Text>
        <Text
          style={{
            marginLeft: 23,
            color: 'grey',
            fontSize: 12,
            marginTop: 5,
          }}>
          Case Studies Should Be Displayed Clearly, Once Team Find It
        </Text>
        <Text
          style={{
            marginLeft: 58,
            color: 'grey',
            fontSize: 12,
            marginTop: 5,
          }}>
          As A Strong Profile Than You Will Get An Email
        </Text>
        <Text
          style={{
            marginLeft: 92,
            color: 'grey',
            fontSize: 12,
            marginTop: 5,
          }}>
          With Interview Details Good Luck.
        </Text>

        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={selectMultipleFile}>
          <View
            style={{
              height: 40,
              width: '45%',
              backgroundColor: 'black',
              elevation: 5,
              borderRadius: 6,
              paddingTop: 5,
              marginLeft: 100,
              flexDirection: 'row',
              marginTop: 20,
            }}>
            <Icon style={styles.upload} name="upload" size={25} color="white" />
            <View
              style={{
                height: 30,
                width: '70%',
                backgroundColor: 'black',
                marginLeft: 5,
              }}>
              {/*Single file selection button*/}
              <Text
                style={{
                  marginTop: 6,
                  fontSize: 15,
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                Upload Portfolio
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/*Showing the data of selected Multiple files*/}
        {multipleFile.map((item, key) => (
          <View key={key}>
            <View
              style={{
                height: 20,
                width: '80%',
                // backgroundColor: 'black',
                // elevation:5,
                marginLeft: 95,
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

            <TouchableOpacity onPress={showToastWithGravity}>
             
                {/*Single file selection button*/}
                <TouchableOpacity
                 onPress={() => {
    navigation.navigate('MainScreen');
    ToastAndroid.show('Sent Successfully', ToastAndroid.SHORT);
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
                      fontWeight:'bold',
                      textAlign: 'center',
                      marginTop:10,
                      letterSpacing:2,
                    }}>
                    Submit
                  </Text>
                </TouchableOpacity>
            
            </TouchableOpacity>
          </View>
        ))}
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
    marginLeft:40,
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

export default ScheduleInterview;

 

