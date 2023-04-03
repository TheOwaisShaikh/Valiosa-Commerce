import {StatusBar} from 'expo-status-bar';
import React, {useRef, useState, useEffect} from 'react';
import BlinkView from 'react-native-blink-view';
import {
  Animated,
  Image,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  ScrollView,
  Linking,
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
const ShopifyDropshipping = ({navigation}) => {
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
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          height: 170,
          // marginTop: 20,
          paddingLeft: 5,
          backgroundColor: '#1260cc',
          paddingTop: 20,
        }}>
        <Image
          source={require('./../assets/zahidsidhu.jpg')}
          style={{
            height: 87,
            width: 87,
            resizeMode: 'contain',
            borderRadius: 400 / 2,
          }}
        />
        <View style={{justifyContent: 'flex-start', paddingTop: 10}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
              paddingLeft: 2,
            }}>
            Owais Shaikh
          </Text>
        </View>
        <TouchableOpacity>
          <Text
            style={{
              marginTop: 4,
              color: 'white',
              paddingLeft: 3,
            }}>
            View Profile
          </Text>
        </TouchableOpacity>
        <View
          style={{
            width: '100%',
            height: 70,
            flexDirection: 'row',
            paddingTop: 40,
            marginTop: 20,
          }}>
          <Icon style={styles.iconhome} name="home" size={25} color="#1260cc" />

          <TouchableOpacity>
            <View
              style={{
                width: '100%',
                height: 50,
                marginLeft: 17,
                // backgroundColor:'#1260cc'
              }}>
              <Text
                style={{
                  paddingTop: 5,
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 15,
                }}>
                Home
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '80%',
            height: 1,
            flexDirection: 'column',
            marginTop: 10,
            backgroundColor: 'grey',
            marginLeft: 10,
          }}></View>
        <View
          style={{
            width: '100%',
            height: 70,
            flexDirection: 'row',

            paddingTop: 40,
          }}>
          <Icon
            style={styles.iconhome}
            name="inbox"
            size={25}
            color="#1260cc"
          />
          <TouchableOpacity>
            <View
              style={{
                width: '100%',
                height: 50,
                marginLeft: 17,
                // backgroundColor:'#1260cc'
              }}>
              <Text
                style={{
                  paddingTop: 3,
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 15,
                }}>
                Inbox
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '80%',
            height: 1,
            flexDirection: 'column',
            marginTop: 10,
            backgroundColor: 'grey',
            marginLeft: 10,
          }}></View>
        <View
          style={{
            width: '100%',
            height: 70,
            flexDirection: 'row',

            paddingTop: 40,
          }}>
          <Icon style={styles.iconhome} name="chat" size={25} color="#1260cc" />
          <TouchableOpacity activeOpacity={0.7} onPress={initiateWhatsApp}>
            <View
              style={{
                width: '100%',
                height: 50,
                marginLeft: 17,

                // backgroundColor:'#1260cc'
              }}>
              <Text
                style={{
                  paddingTop: 3,
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 15,
                }}>
                Live Chat
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '80%',
            height: 1,
            flexDirection: 'column',
            marginTop: 10,
            backgroundColor: 'grey',
            marginLeft: 10,
          }}></View>
        <View
          style={{
            width: '100%',
            height: 70,
            flexDirection: 'row',

            paddingTop: 40,
          }}>
          <Icon
            style={styles.iconhome}
            name="help-with-circle"
            size={25}
            color="#1260cc"
          />
          <TouchableOpacity>
            <View
              style={{
                width: '100%',
                height: 50,
                marginLeft: 17,

                // backgroundColor:'#1260cc'
              }}>
              <Text
                style={{
                  paddingTop: 3,
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 15,
                }}>
                FAQ
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '80%',
            height: 1,
            flexDirection: 'column',
            marginTop: 10,
            backgroundColor: 'grey',
            marginLeft: 10,
          }}></View>
        <View
          style={{
            width: '100%',
            height: 70,
            flexDirection: 'row',

            paddingTop: 40,
          }}>
          <Icon
            style={styles.iconhome}
            name="network"
            size={25}
            color="#1260cc"
          />
          <TouchableOpacity>
            <View
              style={{
                width: '100%',
                height: 50,
                marginLeft: 17,
                // backgroundColor:'#1260cc'
              }}>
              <Text
                style={{
                  paddingTop: 3,
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 15,
                }}>
                About Us
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '80%',
            height: 1,
            flexDirection: 'column',
            marginTop: 10,
            backgroundColor: 'grey',
            marginLeft: 10,
          }}></View>
        <View
          style={{
            width: '100%',
            height: 70,
            flexDirection: 'row',

            paddingTop: 40,
          }}>
          <Icon
            style={styles.iconhome}
            name="log-out"
            size={25}
            color="#1260cc"
          />
          <TouchableOpacity>
            <View
              style={{
                width: '100%',
                height: 50,
                marginLeft: 17,
                // backgroundColor:'#1260cc'
              }}>
              <Text
                style={{
                  paddingTop: 3,
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 15,
                }}>
                Log Out
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '80%',
            height: 1,
            flexDirection: 'column',
            marginTop: 10,
            backgroundColor: 'grey',
            marginLeft: 10,
          }}></View>
        <View style={{flexGrow: 1, marginTop: 50}}>
          {
            // Tab Bar Buttons....
          }

          {/* {TabButton(currentTab, setCurrentTab, 'arrow', arrow)} */}
          {/* {TabButton(currentTab, setCurrentTab, 'Search', search)} */}
          {/* {TabButton(currentTab, setCurrentTab, 'Notifications', notifications)} */}
          {/* {TabButton(currentTab, setCurrentTab, 'Settings', settings)} */}
        </View>

        {/* <View>{TabButton(currentTab, setCurrentTab, 'LogOut', logout)}</View> */}
      </View>

      {
        // Over lay View...
      }

      <Animated.View
        style={{
          flexGrow: 1,
          backgroundColor: 'white',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,

          // borderRadius: 25,
          // Transforming View...
          transform: [{scale: scaleValue}, {translateX: offsetValue}],
        }}>
        {
          // Menu Button...
        }

        <Animated.View
          style={{
            transform: [
              {
                translateY: closeButtonOffset,
              },
            ],
          }}>
          <View
            style={{
              width: '100%',
              height: '100%',
            }}>
            <View
              style={{
                width: '100%',
                height: 60,
                flexDirection: 'row',
                elevation: 5,
                // backgroundColor: 'red',
                // paddingTop: 10,
              }}>
              <TouchableOpacity
                onPress={() => {
                  // Do Actions Here....
                  // Scaling the view...
                  Animated.timing(scaleValue, {
                    toValue: showMenu ? 1 : 1,
                    duration: 300,
                    useNativeDriver: true,
                  }).start();

                  Animated.timing(offsetValue, {
                    // YOur Random Value...
                    toValue: showMenu ? 0 : 230,
                    duration: 300,
                    useNativeDriver: true,
                  }).start();

                  Animated.timing(closeButtonOffset, {
                    // YOur Random Value...
                    toValue: !showMenu ? -30 : 0,
                    duration: 300,
                    useNativeDriver: true,
                  }).start();

                  setShowMenu(!showMenu);
                }}>
                <Icon
                  style={styles.icon}
                  name="menu"
                  size={30}
                  color="#1260cc"
                />
              </TouchableOpacity>
              <View
                style={{
                  width: '50%',
                  height: 60,
                  flexDirection: 'row',

                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 90,

                  // backgroundColor: 'blue',
                }}>
                <Image
                  source={require('./../assets/valiosacommercee.png')}
                  style={{height: 50, width: '100%', resizeMode: 'contain'}}
                />

                <View
                  style={{
                    width: '40%',
                    height: 30,
                    paddingTop: 3,
                    paddingLeft: 40,

                    // marginLeft: 40,
                  }}>
                  <BlinkView boolean={true} delay={500}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('ForgetPassword');
                      }}>
                      <Icon
                        style={styles.infoicon}
                        name="chat"
                        size={25}
                        color="#1260cc"
                      />
                    </TouchableOpacity>
                  </BlinkView>
                </View>
              </View>
            </View>

            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{flexGrow: 1}}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }>
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
                    USA Dropshipping Expert
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
                      Product Researcher
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
                    Shopify Store Developer
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
                      Me Too Listing Expert
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
                    Content Writer
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
                      Listing Optimizer
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
                    Videography Expert
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
                      Marketing Expert
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
            </ScrollView>
          </View>
        </Animated.View>
      </Animated.View>
    </View>
  );
};

// For multiple Buttons...
const TabButton = (currentTab, setCurrentTab, title, image) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (title == 'LogOut') {
          // Do your Stuff...
        } else {
          setCurrentTab(title);
        }
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 8,
          backgroundColor: currentTab == title ? 'white' : 'transparent',
          paddingLeft: 13,
          paddingRight: 35,
          borderRadius: 15,
          marginTop: 15,
        }}>
        <Image
          source={image}
          style={{
            width: 25,
            height: 25,
            tintColor: currentTab == title ? '#5359D1' : 'white',
          }}></Image>

        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            paddingLeft: 15,
            color: currentTab == title ? '#5359D1' : 'white',
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
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
export default ShopifyDropshipping;
