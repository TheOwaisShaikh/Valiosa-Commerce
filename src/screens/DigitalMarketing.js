import {StatusBar} from 'expo-status-bar';
import React, {useRef, useState, useEffect} from 'react';
import BlinkView from 'react-native-blink-view';
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
const DigitalMarketing = ({navigation}) => {
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
    <View>
      <View
        style={{
          width: '100%',
          height: 60,
          flexDirection: 'column',
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',

          // backgroundColor: '#1260cc',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Services')}>
          <Image
            source={require('./../assets/images.png')}
            style={{
              height: 13,
              width: 13,
              marginTop: 40,
              marginLeft: 24,
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
        <View
          style={{
            width: '40%',
            height: 30,
            paddingTop: 3,
            paddingLeft: 40,

            // marginLeft: 40,
          }}></View>
      </View>

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

            backgroundColor: 'white',
          }}>
          <View
            style={{
              height: 230,
              width: 170,
              backgroundColor: 'white',
              borderRadius: 10,
              elevation: 10,
              marginLeft: 5,
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <View
              style={{
                height: 20,
                width: '90%',
                marginLeft: 8,

                backgroundColor: '#1260cc',
                elevation: 5,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
              }}>
              <View
                style={{
                  height: 130,
                  width: 130,
                  marginTop: 25,
                  marginLeft: 12,

                  backgroundColor: 'black',
                  elevation: 5,
                  borderRadius: 400 / 2,
                }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('SocialMediaMarketerProfile')
                  }>
                  <Image
                    source={require('./../assets/owaishaikh.jpg')}
                    style={{
                      height: 125,
                      width: 125,
                      marginTop: 2.5,
                      marginLeft: 2.5,
                      borderRadius: 400 / 2,
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  height: 30,
                  width: '100%',
                  // backgroundColor: '#1260cc',
                  // elevation: 5,
                  paddingTop: 10,
                }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('DigitalMarketing')}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontStyle: 'italic',
                      fontWeight: 'bold',
                      color: 'black',
                      justifyContent: 'center',
                      textAlign: 'center',
                    }}>
                    Owais Shaikh
                  </Text>
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  fontSize: 13,
                  fontStyle: 'italic',
                  fontWeight: 'bold',
                  color: 'grey',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}>
                Social Media Marketer
              </Text>
              <View
                style={{
                  height: 20,
                  width: '100%',
                  backgroundColor: 'white',
                  // borderWidth:1,
                  elevation: 10,
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                  marginTop: 5,
                }}>
                <Text style={[styles.text]}>Visit Profile</Text>
              </View>
            </View>
            <View
              style={{
                height: 230,
                width: 170,
                backgroundColor: 'white',
                borderRadius: 10,
                elevation: 10,
                marginLeft: 20,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  height: 20,
                  width: '90%',
                  marginLeft: 8,

                  backgroundColor: '#1260cc',
                  elevation: 5,
                  borderBottomLeftRadius: 30,
                  borderBottomRightRadius: 30,
                }}>
                <View
                  style={{
                    height: 130,
                    width: 130,
                    marginTop: 25,
                    marginLeft: 12,

                    backgroundColor: 'black',
                    elevation: 5,
                    borderRadius: 400 / 2,
                  }}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Product')}>
                    <Image
                      source={require('./../assets/moinshaikh.jpg')}
                      style={{
                        height: 125,
                        width: 125,
                        marginTop: 2.5,
                        marginLeft: 2.5,
                        borderRadius: 400 / 2,
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    height: 30,
                    width: '100%',
                    // backgroundColor: '#1260cc',
                    // elevation: 5,
                    paddingTop: 10,
                  }}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('DigitalMarketing')}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontStyle: 'italic',
                        fontWeight: 'bold',
                        color: 'black',
                        justifyContent: 'center',
                        textAlign: 'center',
                      }}>
                      Moin Shaikh
                    </Text>
                  </TouchableOpacity>
                </View>
                <Text
                  style={{
                    fontSize: 13,
                    fontStyle: 'italic',
                    fontWeight: 'bold',
                    color: 'grey',
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}>
                  Facebook Marketing
                </Text>
                <View
                  style={{
                    height: 20,
                    width: '100%',
                    backgroundColor: 'white',
                    // borderWidth:1,
                    elevation: 10,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    marginTop: 5,
                  }}>
                  <Text style={[styles.text]}>Visit Profile</Text>
                </View>
              </View>
            </View>
          </View>

          {/* 2ND PROFILE STARTS FROMHERE */}

          <View
            style={{
              height: 230,
              width: 170,
              backgroundColor: 'white',
              borderRadius: 10,
              elevation: 10,
              marginLeft: 5,
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <View
              style={{
                height: 20,
                width: '90%',
                marginLeft: 8,

                backgroundColor: '#1260cc',
                elevation: 5,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
              }}>
              <View
                style={{
                  height: 130,
                  width: 130,
                  marginTop: 25,
                  marginLeft: 12,

                  backgroundColor: 'black',
                  elevation: 5,
                  borderRadius: 400 / 2,
                }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('SocialMediaMarketerProfile')
                  }>
                  <Image
                    source={require('./../assets/syedsad.jpg')}
                    style={{
                      height: 125,
                      width: 125,
                      marginTop: 2.5,
                      marginLeft: 2.5,
                      borderRadius: 400 / 2,
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  height: 30,
                  width: '100%',
                  // backgroundColor: '#1260cc',
                  // elevation: 5,
                  paddingTop: 10,
                }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('DigitalMarketing')}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontStyle: 'italic',
                      fontWeight: 'bold',
                      color: 'black',
                      justifyContent: 'center',
                      textAlign: 'center',
                    }}>
                    Syed Saad Ali
                  </Text>
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  fontSize: 13,
                  fontStyle: 'italic',
                  fontWeight: 'bold',
                  color: 'grey',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}>
                Google ADS
              </Text>
              <View
                style={{
                  height: 20,
                  width: '100%',
                  backgroundColor: 'white',
                  // borderWidth:1,
                  elevation: 10,
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                  marginTop: 5,
                }}>
                <Text style={[styles.text]}>Visit Profile</Text>
              </View>
            </View>
            <View
              style={{
                height: 230,
                width: 170,
                backgroundColor: 'white',
                borderRadius: 10,
                elevation: 10,
                marginLeft: 20,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  height: 20,
                  width: '90%',
                  marginLeft: 8,

                  backgroundColor: '#1260cc',
                  elevation: 5,
                  borderBottomLeftRadius: 30,
                  borderBottomRightRadius: 30,
                }}>
                <View
                  style={{
                    height: 130,
                    width: 130,
                    marginTop: 25,
                    marginLeft: 12,

                    backgroundColor: 'black',
                    elevation: 5,
                    borderRadius: 400 / 2,
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('SocialMediaMarketerProfile')
                    }>
                    <Image
                      source={require('./../assets/moiz.jpg.jpeg')}
                      style={{
                        height: 125,
                        width: 125,
                        marginTop: 2.5,
                        marginLeft: 2.5,
                        borderRadius: 400 / 2,
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    height: 30,
                    width: '100%',
                    // backgroundColor: '#1260cc',
                    // elevation: 5,
                    paddingTop: 10,
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('SocialMediaMarketerProfile')
                    }>
                    <Text
                      style={{
                        fontSize: 16,
                        fontStyle: 'italic',
                        fontWeight: 'bold',
                        color: 'black',
                        justifyContent: 'center',
                        textAlign: 'center',
                      }}>
                      Moiz Shaikh
                    </Text>
                  </TouchableOpacity>
                </View>
                <Text
                  style={{
                    fontSize: 13,
                    fontStyle: 'italic',
                    fontWeight: 'bold',
                    color: 'grey',
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}>
                  Influencer Marketing
                </Text>
                <View
                  style={{
                    height: 20,
                    width: '100%',
                    backgroundColor: 'white',
                    // borderWidth:1,
                    elevation: 10,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    marginTop: 5,
                  }}>
                  <Text style={[styles.text]}>Visit Profile</Text>
                </View>
              </View>
            </View>
          </View>

          {/* 3rd RowStartFrom here */}
          <View
            style={{
              height: 230,
              width: 170,
              backgroundColor: 'white',
              borderRadius: 10,
              elevation: 10,
              marginLeft: 5,
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <View
              style={{
                height: 20,
                width: '90%',
                marginLeft: 8,

                backgroundColor: '#1260cc',
                elevation: 5,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
              }}>
              <View
                style={{
                  height: 130,
                  width: 130,
                  marginTop: 25,
                  marginLeft: 12,

                  backgroundColor: 'black',
                  elevation: 5,
                  borderRadius: 400 / 2,
                }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('SocialMediaMarketerProfile')
                  }>
                  <Image
                    source={require('./../assets/abdullah.jpg.jpeg')}
                    style={{
                      height: 125,
                      width: 125,
                      marginTop: 2.5,
                      marginLeft: 2.5,
                      borderRadius: 400 / 2,
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  height: 30,
                  width: '100%',
                  // backgroundColor: '#1260cc',
                  // elevation: 5,
                  paddingTop: 10,
                }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('SocialMediaMarketerProfile')
                  }>
                  <Text
                    style={{
                      fontSize: 16,
                      fontStyle: 'italic',
                      fontWeight: 'bold',
                      color: 'black',
                      justifyContent: 'center',
                      textAlign: 'center',
                    }}>
                    Abdullah
                  </Text>
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  fontSize: 13,
                  fontStyle: 'italic',
                  fontWeight: 'bold',
                  color: 'grey',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}>
                Social Media Marketer
              </Text>
              <View
                style={{
                  height: 20,
                  width: '100%',
                  backgroundColor: 'white',
                  // borderWidth:1,
                  elevation: 10,
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                  marginTop: 5,
                }}>
                <Text style={[styles.text]}>Visit Profile</Text>
              </View>
            </View>
            <View
              style={{
                height: 230,
                width: 170,
                backgroundColor: 'white',
                borderRadius: 10,
                elevation: 10,
                marginLeft: 20,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  height: 20,
                  width: '90%',
                  marginLeft: 8,

                  backgroundColor: '#1260cc',
                  elevation: 5,
                  borderBottomLeftRadius: 30,
                  borderBottomRightRadius: 30,
                }}>
                <View
                  style={{
                    height: 130,
                    width: 130,
                    marginTop: 25,
                    marginLeft: 12,

                    backgroundColor: 'black',
                    elevation: 5,
                    borderRadius: 400 / 2,
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('SocialMediaMarketerProfile')
                    }>
                    <Image
                      source={require('./../assets/ibadshaikh.jpg')}
                      style={{
                        height: 125,
                        width: 125,
                        marginTop: 2.5,
                        marginLeft: 2.5,
                        borderRadius: 400 / 2,
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    height: 30,
                    width: '100%',
                    // backgroundColor: '#1260cc',
                    // elevation: 5,
                    paddingTop: 10,
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('SocialMediaMarketerProfile')
                    }>
                    <Text
                      style={{
                        fontSize: 16,
                        fontStyle: 'italic',
                        fontWeight: 'bold',
                        color: 'black',
                        justifyContent: 'center',
                        textAlign: 'center',
                      }}>
                      Ibad Shaikh
                    </Text>
                  </TouchableOpacity>
                </View>
                <Text
                  style={{
                    fontSize: 13,
                    fontStyle: 'italic',
                    fontWeight: 'bold',
                    color: 'grey',
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}>
                  Social Media Marketer
                </Text>
                <View
                  style={{
                    height: 20,
                    width: '100%',
                    backgroundColor: 'white',
                    // borderWidth:1,
                    elevation: 10,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    marginTop: 5,
                  }}>
                  <Text style={[styles.text]}>Visit Profile</Text>
                </View>
              </View>
            </View>
          </View>

          {/* 4rth Row starts fromhere */}

          <View
            style={{
              height: 230,
              width: 170,
              backgroundColor: 'white',
              borderRadius: 10,
              elevation: 10,
              marginLeft: 5,
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <View
              style={{
                height: 20,
                width: '90%',
                marginLeft: 8,

                backgroundColor: '#1260cc',
                elevation: 5,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
              }}>
              <View
                style={{
                  height: 130,
                  width: 130,
                  marginTop: 25,
                  marginLeft: 12,

                  backgroundColor: 'black',
                  elevation: 5,
                  borderRadius: 400 / 2,
                }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Product')}>
                  <Image
                    source={require('./../assets/owaishaikh.jpg')}
                    style={{
                      height: 125,
                      width: 125,
                      marginTop: 2.5,
                      marginLeft: 2.5,
                      borderRadius: 400 / 2,
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  height: 30,
                  width: '100%',
                  // backgroundColor: '#1260cc',
                  // elevation: 5,
                  paddingTop: 10,
                }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('DigitalMarketing')}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontStyle: 'italic',
                      fontWeight: 'bold',
                      color: 'black',
                      justifyContent: 'center',
                      textAlign: 'center',
                    }}>
                    Owais Shaikh
                  </Text>
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  fontSize: 13,
                  fontStyle: 'italic',
                  fontWeight: 'bold',
                  color: 'grey',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}>
                Social Media Marketer
              </Text>
              <View
                style={{
                  height: 20,
                  width: '100%',
                  backgroundColor: 'white',
                  // borderWidth:1,
                  elevation: 10,
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                  marginTop: 5,
                }}>
                <Text style={[styles.text]}>Visit Profile</Text>
              </View>
            </View>
            <View
              style={{
                height: 230,
                width: 170,
                backgroundColor: 'white',
                borderRadius: 10,
                elevation: 10,
                marginLeft: 20,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  height: 20,
                  width: '90%',
                  marginLeft: 8,

                  backgroundColor: '#1260cc',
                  elevation: 5,
                  borderBottomLeftRadius: 30,
                  borderBottomRightRadius: 30,
                }}>
                <View
                  style={{
                    height: 130,
                    width: 130,
                    marginTop: 25,
                    marginLeft: 12,

                    backgroundColor: 'black',
                    elevation: 5,
                    borderRadius: 400 / 2,
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('SocialMediaMarketerProfile')
                    }>
                    <Image
                      source={require('./../assets/moinshaikh.jpg')}
                      style={{
                        height: 125,
                        width: 125,
                        marginTop: 2.5,
                        marginLeft: 2.5,
                        borderRadius: 400 / 2,
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    height: 30,
                    width: '100%',
                    // backgroundColor: '#1260cc',
                    // elevation: 5,
                    paddingTop: 10,
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('SocialMediaMarketerProfile')
                    }>
                    <Text
                      style={{
                        fontSize: 16,
                        fontStyle: 'italic',
                        fontWeight: 'bold',
                        color: 'black',
                        justifyContent: 'center',
                        textAlign: 'center',
                      }}>
                      Moin Shaikh
                    </Text>
                  </TouchableOpacity>
                </View>
                <Text
                  style={{
                    fontSize: 13,
                    fontStyle: 'italic',
                    fontWeight: 'bold',
                    color: 'grey',
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}>
                  Social Media Marketer
                </Text>
                <View
                  style={{
                    height: 20,
                    width: '100%',
                    backgroundColor: 'white',
                    // borderWidth:1,
                    elevation: 10,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    marginTop: 5,
                  }}>
                  <Text style={[styles.text]}>Visit Profile</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            height: 60,
            width: '100%',
            backgroundColor: 'white',
          }}></View>
      </ScrollView>
    </View>
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
export default DigitalMarketing;
