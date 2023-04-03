import {StatusBar} from 'expo-status-bar';
import React, {useRef, useState, useEffect} from 'react';
import BlinkView from 'react-native-blink-view';
// import VideoPlayer from 'react-native-video-player';
import {
  Animated,
  Image,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  ScrollView,
  Linking,
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import {ImageSlider} from 'react-native-image-slider-banner';

const HomeScreen = ({navigation}) => {

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };


  // Tab ICons...

  // Photo

  const [showText, setShowText] = useState(true);
  useEffect(() => {
    // Change the state every second or the time given by User.
    const interval = setInterval(() => {
      setShowText(showText => !showText);
    }, 700);
    return () => clearInterval(interval);
  }, []);
  const [currentTab, setCurrentTab] = useState('Home');
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(700).then(() => setRefreshing(false));
  }, []);
  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;
  const image = {
    uri: 'https://pbs.twimg.com/media/Ee-M0BHWsAEY10Z.jpg',
  };
  const [mobileNumber, setMobileNumber] = useState('3121332108');
  const [whatsAppMsg, setWhatsAppMsg] = useState(
    'Please follow https://aboutreact.com',
  );
  const initiateWhatsApp = () => {
    // Check for perfect 10 digit length
    if (mobileNumber.length != 10) {
      alert('Please insert correct WhatsApp number');
      return;
    }
    // Using 91 for India
    // You can change 91 with your country code
    let url =
      'whatsapp://send?text=' + whatsAppMsg + '&phone=92' + mobileNumber;
    Linking.openURL(url)
      .then(data => {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        alert('Make sure Whatsapp installed on your device');
      });
  };
  return (
    
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{flexGrow: 1}}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }>
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  flex: 1,
                  backgroundColor: 'white',
                }}>
              
                 <View
                style={{
                  width: '96%',
                  height: 300,
                marginLeft:7,
                elevation:10,
                  backgroundColor: 'white',
                 borderRadius:10,
                 
                }}>
                <ImageSlider
                  data={[
                    {img: require('../../src/assets/banners.png')},
                    {img: require('../../src/assets/bannersecond.png')},
                    {img: require('../../src/assets/bannerthird.png')},
                  ]}
                  localImg
                  timer={4000}
                  autoPlay={true}
                  onItemChanged={item => console.log('item', item)}
                  closeIconColor="#fff"
                  // caroselImageStyle={{resizeMode: 'contain'}}
                  showIndicator={false}
                />
                </View>
                <Image
                  source={require('./../assets/bannersthree.png')}
                  style={{
                    height: 200,
                    width: '100%',
                  }}
                />
               
               
                </View>
              
            </ScrollView>
            
      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  image: {
    flex: 1,
  },
  containerr: {
    flex: 1,
  },
  infoicon: {
    marginBottom: 1,

    marginTop: 2,
    elevation: 5,
  },
  icon: {
    paddingLeft: 10,
    marginTop: 15,
  },
  iconhome: {
    paddingLeft: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'grey',
    alignItems: 'center',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
export default HomeScreen;
