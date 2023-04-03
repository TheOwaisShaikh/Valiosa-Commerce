import React, {useRef, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StatusBar} from 'expo-status-bar';
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
  FlatList,
  TextInput,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/SimpleLineIcons';
import Iconss from 'react-native-vector-icons/Ionicons';
import Iconsss from 'react-native-vector-icons/EvilIcons';
import Icoon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconic from 'react-native-vector-icons/FontAwesome';
import Ion from 'react-native-vector-icons/Fontisto';
import Ions from 'react-native-vector-icons/Entypo';
import Track from 'react-native-vector-icons/MaterialIcons';

const Home = ({navigation}) => {
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
    }, 800);
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
                  color: 'white',
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
          {/* <TouchableOpacity activeOpacity={0.7} onPress={initiateWhatsApp}> */}
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
          {/* </TouchableOpacity> */}
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
                }}></TouchableOpacity>
              <View
                style={{
                  width: '50%',
                  height: 60,
                  flexDirection: 'column',

                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 90,

                  // backgroundColor: '#1260cc',
                }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('APICall')}>
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
            </View>

            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{flexGrow: 1}}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }>
              <View
                style={{
                  height: 60,
                  width: '95%',
                  backgroundColor: 'white',
                  // elevation: 5,
                  marginTop: 30,
                  borderRadius: 20,
                  marginLeft: 15,
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    // fontStyle: 'italic',
                    fontWeight: 'bold',
                    color: 'black',
                    letterSpacing: 3,
                    marginLeft: 85,
                    marginTop: 10,
                  }}>
                  Choose the services
                </Text>
                <View
                  style={{
                    height: 40,
                    width: '100%',
                    backgroundColor: 'white',
                    // elevation: 5,
                    marginTop: 4,
                    borderRadius: 20,
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      // fontStyle: 'italic',
                      fontWeight: 'bold',
                      color: 'black',
                      letterSpacing: 3,
                    }}>
                    that best suit what you are interested in
                  </Text>
                </View>
              </View>

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
                  <TouchableOpacity
                    onPress={() => navigation.navigate('DigitalMarketing')}>
                    <Image
                      source={require('./../assets/fba.png')}
                      style={{
                        height: 150,
                        width: 160,
                        marginTop: 25,
                      }}
                    />

                    <View
                      style={{
                        height: 30,
                        width: '100%',
                        // backgroundColor: '#1260cc',
                        // elevation: 5,
                        paddingTop: 10,
                      }}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontStyle: 'italic',
                          fontWeight: 'bold',
                          color: 'black',
                          justifyContent: 'center',
                          textAlign: 'center',
                        }}>
                        Digital Marketing
                      </Text>
                    </View>
                  </TouchableOpacity>
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
                    <Text
                      style={[
                        styles.text,
                        {display: showText ? 'none' : 'flex'},
                      ]}>
                      8 Profiles
                    </Text>
                  </View>
                </View>

                {/* New Profile starts */}
                <View
                  style={{
                    height: 230,
                    width: 170,
                    backgroundColor: 'white',
                    borderRadius: 10,
                    elevation: 10,
                    marginLeft: 17,
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      height: 20,
                      width: '90%',
                      backgroundColor: '#1260cc',
                      marginLeft: 8,

                      elevation: 5,
                      borderBottomLeftRadius: 30,
                      borderBottomRightRadius: 30,
                    }}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('FBAWholesale')}>
                      <Image
                        source={require('./../assets/fba.png')}
                        style={{
                          height: 150,
                          width: 160,
                          marginTop: 25,
                        }}
                      />

                      <View
                        style={{
                          height: 30,
                          width: '100%',
                          // backgroundColor: '#1260cc',
                          // elevation: 5,
                          paddingTop: 10,
                        }}>
                        <Text
                          style={{
                            fontSize: 16,
                            fontStyle: 'italic',
                            fontWeight: 'bold',
                            color: 'black',
                            justifyContent: 'center',
                            textAlign: 'center',
                          }}>
                          FBA Wholesale
                        </Text>
                      </View>
                    </TouchableOpacity>
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
                      <Text
                        style={[
                          styles.text,
                          {display: showText ? 'none' : 'flex'},
                        ]}>
                        8 Profiles
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* New Profile starts */}
              <View
                style={{
                  height: 230,
                  width: 170,
                  backgroundColor: 'white',
                  borderRadius: 10,
                  elevation: 10,
                  marginLeft: 5,
                  flexDirection: 'row',
                  marginTop: 5,
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
                  <TouchableOpacity
                    onPress={() => navigation.navigate('MainScreen')}>
                    <Image
                      source={require('./../assets/fba.png')}
                      style={{
                        height: 150,
                        width: 160,
                        marginTop: 25,
                      }}
                    />

                    <View
                      style={{
                        height: 30,
                        width: '100%',
                        // backgroundColor: '#1260cc',
                        // elevation: 5,
                        paddingTop: 10,
                      }}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontStyle: 'italic',
                          fontWeight: 'bold',
                          color: 'black',
                          justifyContent: 'center',
                          textAlign: 'center',
                        }}>
                        Private Label
                      </Text>
                    </View>
                  </TouchableOpacity>
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
                    <Text
                      style={[
                        styles.text,
                        {display: showText ? 'none' : 'flex'},
                      ]}>
                      8 Profiles
                    </Text>
                  </View>
                </View>

                {/* New Profile starts */}
                <View
                  style={{
                    height: 230,
                    width: 170,
                    backgroundColor: 'white',
                    borderRadius: 10,
                    elevation: 10,
                    marginLeft: 17,
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      height: 20,
                      width: '90%',
                      backgroundColor: '#1260cc',
                      marginLeft: 8,

                      elevation: 5,
                      borderBottomLeftRadius: 30,
                      borderBottomRightRadius: 30,
                    }}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('PrivateLabel')}>
                      <Image
                        source={require('./../assets/fba.png')}
                        style={{
                          height: 150,
                          width: 160,
                          marginTop: 25,
                        }}
                      />

                      <View
                        style={{
                          height: 30,
                          width: '100%',
                          // backgroundColor: '#1260cc',
                          // elevation: 5,
                          paddingTop: 10,
                        }}>
                        <Text
                          style={{
                            fontSize: 16,
                            fontStyle: 'italic',
                            fontWeight: 'bold',
                            color: 'black',
                            justifyContent: 'center',
                            textAlign: 'center',
                          }}>
                          Micro Private Label
                        </Text>
                      </View>
                    </TouchableOpacity>
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
                      <Text
                        style={[
                          styles.text,
                          {display: showText ? 'none' : 'flex'},
                        ]}>
                        8 Profiles
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{
                  height: 230,
                  width: 170,
                  backgroundColor: 'white',
                  borderRadius: 10,
                  elevation: 10,
                  marginLeft: 5,
                  flexDirection: 'row',
                  marginTop: 5,
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
                  <TouchableOpacity
                    onPress={() => navigation.navigate('ShopifyDropshipping')}>
                    <Image
                      source={require('./../assets/fba.png')}
                      style={{
                        height: 150,
                        width: 160,
                        marginTop: 25,
                      }}
                    />

                    <View
                      style={{
                        height: 30,
                        width: '100%',
                        // backgroundColor: '#1260cc',
                        // elevation: 5,
                        paddingTop: 10,
                      }}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontStyle: 'italic',
                          fontWeight: 'bold',
                          color: 'black',
                          justifyContent: 'center',
                          textAlign: 'center',
                        }}>
                        Shopify Dropshipping
                      </Text>
                    </View>
                  </TouchableOpacity>
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
                    <Text
                      style={[
                        styles.text,
                        {display: showText ? 'none' : 'flex'},
                      ]}>
                      8 Profiles
                    </Text>
                  </View>
                </View>

                {/* New Profile starts */}
                <View
                  style={{
                    height: 230,
                    width: 170,
                    backgroundColor: 'white',
                    borderRadius: 10,
                    elevation: 10,
                    marginLeft: 17,
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      height: 20,
                      width: '90%',
                      backgroundColor: '#1260cc',
                      marginLeft: 8,

                      elevation: 5,
                      borderBottomLeftRadius: 30,
                      borderBottomRightRadius: 30,
                    }}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Daraz')}>
                      <Image
                        source={require('./../assets/fba.png')}
                        style={{
                          height: 150,
                          width: 160,
                          marginTop: 25,
                        }}
                      />

                      <View
                        style={{
                          height: 30,
                          width: '100%',
                          // backgroundColor: '#1260cc',
                          // elevation: 5,
                          paddingTop: 10,
                        }}>
                        <Text
                          style={{
                            fontSize: 16,
                            fontStyle: 'italic',
                            fontWeight: 'bold',
                            color: 'black',
                            justifyContent: 'center',
                            textAlign: 'center',
                          }}>
                          Daraz
                        </Text>
                      </View>
                    </TouchableOpacity>
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
                      <Text
                        style={[
                          styles.text,
                          {display: showText ? 'none' : 'flex'},
                        ]}>
                        8 Profiles
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{
                  height: 230,
                  width: 170,
                  backgroundColor: 'white',
                  borderRadius: 10,
                  elevation: 10,
                  marginLeft: 5,
                  flexDirection: 'row',
                  marginTop: 5,
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
                  <TouchableOpacity
                    onPress={() => navigation.navigate('CompanyFormation')}>
                    <Image
                      source={require('./../assets/fba.png')}
                      style={{
                        height: 150,
                        width: 160,
                        marginTop: 25,
                      }}
                    />

                    <View
                      style={{
                        height: 30,
                        width: '100%',
                        // backgroundColor: '#1260cc',
                        // elevation: 5,
                        paddingTop: 10,
                      }}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontStyle: 'italic',
                          fontWeight: 'bold',
                          color: 'black',
                          justifyContent: 'center',
                          textAlign: 'center',
                        }}>
                        Company Formation
                      </Text>
                    </View>
                  </TouchableOpacity>
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
                    <Text
                      style={[
                        styles.text,
                        {display: showText ? 'none' : 'flex'},
                      ]}>
                      8 Profiles
                    </Text>
                  </View>
                </View>

                {/* New Profile starts */}
                <View
                  style={{
                    height: 230,
                    width: 170,
                    backgroundColor: 'white',
                    borderRadius: 10,
                    elevation: 10,
                    marginLeft: 17,
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      height: 20,
                      width: '90%',
                      backgroundColor: '#1260cc',
                      marginLeft: 8,

                      elevation: 5,
                      borderBottomLeftRadius: 30,
                      borderBottomRightRadius: 30,
                    }}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('OnlineArbitrage')}>
                      <Image
                        source={require('./../assets/fba.png')}
                        style={{
                          height: 150,
                          width: 160,
                          marginTop: 25,
                        }}
                      />

                      <View
                        style={{
                          height: 30,
                          width: '100%',
                          // backgroundColor: '#1260cc',
                          // elevation: 5,
                          paddingTop: 10,
                        }}>
                        <Text
                          style={{
                            fontSize: 16,
                            fontStyle: 'italic',
                            fontWeight: 'bold',
                            color: 'black',
                            justifyContent: 'center',
                            textAlign: 'center',
                          }}>
                          Online Arbitrage
                        </Text>
                      </View>
                    </TouchableOpacity>
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
                      <Text
                        style={[
                          styles.text,
                          {display: showText ? 'none' : 'flex'},
                        ]}>
                        8 Profiles
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* New Profile starts */}
              <View
                style={{
                  height: 230,
                  width: 170,
                  backgroundColor: 'white',
                  borderRadius: 10,
                  elevation: 10,
                  marginLeft: 5,
                  flexDirection: 'row',
                  marginTop: 5,
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
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Cources')}>
                    <Image
                      source={require('./../assets/fba.png')}
                      style={{
                        height: 150,
                        width: 160,
                        marginTop: 25,
                      }}
                    />

                    <View
                      style={{
                        height: 30,
                        width: '100%',
                        // backgroundColor: '#1260cc',
                        // elevation: 5,
                        paddingTop: 10,
                      }}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontStyle: 'italic',
                          fontWeight: 'bold',
                          color: 'black',
                          justifyContent: 'center',
                          textAlign: 'center',
                        }}>
                        Local PL
                      </Text>
                    </View>
                  </TouchableOpacity>
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
                    <Text
                      style={[
                        styles.text,
                        {display: showText ? 'none' : 'flex'},
                      ]}>
                      8 Profiles
                    </Text>
                  </View>
                </View>

                {/* New Profile starts */}
                <View
                  style={{
                    height: 230,
                    width: 170,
                    backgroundColor: 'white',
                    borderRadius: 10,
                    elevation: 10,
                    marginLeft: 17,
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      height: 20,
                      width: '90%',
                      backgroundColor: '#1260cc',
                      marginLeft: 8,

                      elevation: 5,
                      borderBottomLeftRadius: 30,
                      borderBottomRightRadius: 30,
                    }}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('AccountReinstatement')
                      }>
                      <Image
                        source={require('./../assets/fba.png')}
                        style={{
                          height: 150,
                          width: 160,
                          marginTop: 25,
                        }}
                      />
                      <View
                        style={{
                          height: 30,
                          width: '100%',
                          // backgroundColor: '#1260cc',
                          // elevation: 5,
                          paddingTop: 10,
                        }}>
                        <Text
                          style={{
                            fontSize: 14,
                            fontStyle: 'italic',
                            fontWeight: 'bold',
                            color: 'black',
                            justifyContent: 'center',
                            textAlign: 'center',
                          }}>
                          Account Reinstatement
                        </Text>
                      </View>
                    </TouchableOpacity>
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
                      <Text
                        style={[
                          styles.text,
                          {display: showText ? 'none' : 'flex'},
                        ]}>
                        8 Profiles
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </Animated.View>
      </Animated.View>
      {/* <View
        style={{
          height: 50,
          width: 50,
          backgroundColor: '#1260cc',
          borderRadius: 400 / 2,
          paddingTop: 5,
          paddingLeft: 5,
          elevation: 5,
          marginTop: 420,
          marginLeft: 290,
        }}>
       
      </View> */}
    </View>
  );
};

const Profilee = ({navigation}) => {
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [chats, setChats] = useState([
    {
      id: 1,
      name: 'Owais Shaikh',
      lastMessage: 'Hey',
      Time: '12:02',
      avatar: 'https://via.placeholder.com/100x100',
    },
  ]);

  const renderChat = ({item}) => {
    return (
      <View>
        <View
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'white',
          }}>
          <View
            style={{
              height: 50,
              width: '100%',
              backgroundColor: '#1260cc',
              elevation: 10,
              flexDirection: 'row',
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                textAlign: 'center',
                marginTop: 10,
                fontWeight: 'bold',
                marginLeft: 20,
              }}>
              Inbox
            </Text>
            <View>
              {searchBarOpen && (
                <TextInput
                  style={{marginLeft: 100}}
                  placeholder="Search..."
                  onChangeText={text => setSearchText(text)}
                  value={searchText}
                />
              )}
            </View>
            <TouchableOpacity onPress={() => setSearchBarOpen(!searchBarOpen)}>
              <Iconss
                style={{marginTop: 15, marginLeft: 260}}
                name="search"
                size={20}
                color="white"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('ChatScreen')}>
            <View
              style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
              <Image
                style={{width: 50, height: 50, borderRadius: 25, margin: 10}}
                source={require('../assets/owaishaikh.jpg')}
              />

              <View style={styles.chatInfo}>
                <Text style={{color: 'black'}}>{item.name}</Text>
                <Text style={styles.lastMessage}>{item.lastMessage}</Text>
              </View>

              <Text
                style={{
                  marginLeft: 160,
                  fontSize: 12,
                  zIndex: 3,
                  marginBottom: 20,
                }}>
                {item.Time}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={chats}
      renderItem={renderChat}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const PrivateLabel = ({navigation}) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [showIcon, setShowIcon] = useState(false);
  const handleSend = () => {
    if (!input) return;
    setMessages([...messages, {text: input, type: 'text'}]);
    setInput('');
  };

  const handleDocumentPicker = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setMessages([...messages, {text: result.uri, type: 'document'}]);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('Canceled from single doc picker');
      } else {
        throw err;
      }
    }
  };

  const [isVisible, setIsVisible] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const currencies = ['$', '€', '¥', '£', '₹', '₩'];

  const toggleCurrencyList = () => {
    setIsVisible(!isVisible);
  };

  const handleCurrencySelection = currency => {
    setSelectedCurrency(currency);
    setIsVisible(false);
  };
  //   const [fadeAnim] = useState(new Animated.Value(1));

  //   useEffect(() => {
  //     Animated.loop(
  //       Animated.sequence([
  //         Animated.timing(fadeAnim, {
  //           toValue: 0,
  //           duration: 1000,
  //           useNativeDriver: true,
  //         }),
  //         Animated.timing(fadeAnim, {
  //           toValue: 1,
  //           duration: 1000,
  //           useNativeDriver: true,
  //         }),
  //       ]),
  //     ).start();
  //   }, [fadeAnim]);
  const handleClick = () => {
    Alert.alert('Sent successfully!');
    navigation.navigate('ChatScreen');
  };
  const handleClicks = () => {
    Alert.alert('Cancled');
    navigation.navigate('ChatScreen');
  };
  return (
    <View style={{height: '100%', width: '100%', backgroundColor: '#f1f0f0'}}>
      <View
        style={{
          height: 50,
          width: '100%',
          backgroundColor: '#1260cc',
          elevation: 5,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          flexDirection: 'row',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 10,
            marginLeft: 10,
            letterSpacing: 2,
          }}>
          Status
        </Text>
        <Track
          style={{marginTop: 13, marginLeft: 260}}
          name="notifications"
          size={20}
          color="white"
        />
      </View>
      <View
        style={{
          height: 130,
          width: '95%',
          backgroundColor: 'white',
          elevation: 5,
          borderRadius: 30,
          marginTop: 30,
          marginLeft: 9,
          flexDirection: 'row',
        }}>
        <View
          style={{
            height: 120,
            width: 110,
            // backgroundColor: 'yellow',
            flexDirection: 'row',
          }}>
          <Image
            source={require('./../assets/owaishaikh.jpg')}
            style={{
              width: 100,
              height: 100,
              borderRadius: 400 / 2,
              marginLeft: 10,

              marginTop: 10,
            }}
          />
        </View>
        <View
          style={{
            height: 120,
            width: 200,
            // backgroundColor: 'yellow',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              marginLeft: 8,
              marginTop: 30,
              fontWeight: 'bold',
            }}>
            Owais Shaikh
          </Text>

          <View
            style={{
              height: 40,
              width: '100%',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 10,
                marginTop: 5,
                marginLeft: 10,
                letterSpacing: 2,
              }}>
              Amazon FBA Consultant
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Hiring');
            }}
            style={{
              width: 80,
              height: 30,
              marginTop: 5,
              flexDirection: 'row',
              elevation: 2,
              position: 'absolute',

              marginLeft: 140,
              backgroundColor: '#ededee',
              borderRadius: 30,
            }}>
            <Track
              style={{marginTop: 5, marginLeft: 5}}
              name="stop-circle"
              size={20}
              color="#1260cc"
            />
            <Text
              style={{
                color: 'black',
                fontSize: 16,

                fontWeight: 'bold',
                letterSpacing: 2,
                marginTop: 4,
              }}>
              Hired
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Hiring');
            }}
            style={{
              width: 90,
              height: 35,
              marginTop: 90,
              flexDirection: 'row',

              position: 'absolute',

              marginLeft: 140,
              // backgroundColor: '#ededee',
              borderRadius: 30,
            }}>
            <Text
              style={{
                color: '#1260cc',
                fontSize: 10,
                fontWeight: 'bold',
                letterSpacing: 1,
                marginTop: 20,
              }}>
              See Contract
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ChatScreen');
            }}
            style={{
              width: 80,
              height: 30,
              marginTop: 50,
              flexDirection: 'row',
              // elevation: 2,
              position: 'absolute',

              marginLeft: 190,
              // backgroundColor: '#ededee',
              borderRadius: 30,
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ChatScreen');
              }}>
              <Ions
                style={{marginTop: 5, marginLeft: 5}}
                name="chat"
                size={25}
                color="#1260cc"
              />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const OrderForm = ({navigation}) => {
  const [profilePic, setProfilePic] = useState(
    require('./../assets/owaishaikh.jpg'),
  );
const [mobileNumber, setMobileNumber] = useState('3336497646');
const [whatsAppMsg, setWhatsAppMsg] = useState(
  'Hi am looking for support',
);
const initiateWhatsApp = () => {
  // Check for perfect 10 digit length
  if (mobileNumber.length != 10) {
    alert('Please insert correct WhatsApp number');
    return;
  }
  // Using 91 for India
  // You can change 91 with your country code
  let url = 'whatsapp://send?text=' + whatsAppMsg + '&phone=92' + mobileNumber;
  Linking.openURL(url)
    .then(data => {
      console.log('WhatsApp Opened');
    })
    .catch(() => {
      alert('Make sure Whatsapp installed on your device');
    });
};

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setProfilePic({uri: result.uri});
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
      <View
        style={{
          height: 200,
          width: '100%',
          backgroundColor: '#f1f0f0',
          elevation: 5,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}>
        <View
          style={{
            height: 40,
            width: '100%',
            backgroundColor: '#1260cc',
            elevation: 5,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            paddingTop: 50,
          }}></View>
        <View
          style={{
            height: 90,
            width: '100%',
            flexDirection: 'row',
          }}>
          <TouchableOpacity onPress={pickImage}>
            <View
              style={{
                zIndex: 3,
                position: 'absolute',
                width: 30,
                height: 30,
                backgroundColor: '#1260cc',
                borderRadius: 400 / 2,
                marginLeft: 80,
                marginTop: 100,
              }}>
              <Icon
                style={{marginTop: 6, marginLeft: 7}}
                name="camera"
                size={16}
                color="white"
              />
            </View>
            <Image
              source={profilePic}
              style={{
                width: 80,
                height: 80,
                borderRadius: 400 / 2,
                marginLeft: 20,
                marginTop: 50,
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              textAlign: 'center',
              marginTop: 60,
              marginLeft: 20,
              fontWeight: 'bold',
            }}>
            Owais Shaikh
          </Text>
        </View>
        <Text
          style={{
            color: 'black',
            fontSize: 13,
            marginLeft: 122,
            fontWeight: 'bold',
          }}>
          Welcome To Valiosa Commerce
        </Text>
      </View>
      <ScrollView 
        <View
          style={{
            height: '100%',
            width: '100%',
            // backgroundColor: '#E6E6DF',
          }}>
          <Text
            style={{
              fontSize: 25,
              marginLeft: 10,
              fontWeight: 'bold',
              color: 'black',
              marginTop: 30,
            }}>
            General
          </Text>
          <View
            style={{
              height: 50,
              width: '100%',
              backgroundColor: 'white',
              elevation: 5,
              marginTop: 30,

              flexDirection: 'row',
            }}>
            <Ion
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 15,
                marginLeft: 15,
              }}
              name="money-symbol"
              size={20}
              color="grey"
            />
            <Text
              style={{
                color: 'black',
                fontSize: 13,
                // fontWeight: 'bold',
                paddingLeft: 10,
                paddingTop: 15,
                letterSpacing: 2,
              }}>
              Currency
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('BeforeInterview')}>
              <Icoon
                style={{marginTop: 16, marginLeft: 220}}
                name="greater-than"
                size={17}
                color="grey"
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 50,
              width: '100%',
              backgroundColor: 'white',
              elevation: 5,

              flexDirection: 'row',
            }}>
            <Icon
              style={{marginTop: 12, marginLeft: 15}}
              name="questioncircle"
              size={20}
              color="grey"
            />
            <Text
              style={{
                color: 'black',
                fontSize: 12,
                // fontWeight: 'bold',
                paddingLeft: 12,
                paddingTop: 15,
                letterSpacing: 2,
              }}>
              FAQ'S
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('BeforeInterview')}>
              <Icoon
                style={{marginTop: 16, marginLeft: 245}}
                name="greater-than"
                size={17}
                color="grey"
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 50,
              width: '100%',
              backgroundColor: 'white',
              elevation: 3,
              flexDirection: 'row',
            }}>
            <Ions
              style={{marginTop: 12, marginLeft: 15}}
              name="folder-video"
              size={20}
              color="grey"
            />
            <Text
              style={{
                color: 'black',
                fontSize: 12,
                // fontWeight: 'bold',
                paddingLeft: 12,
                paddingTop: 15,
                letterSpacing: 2,
              }}>
              Cources
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('BeforeInterview')}>
              <Icoon
                style={{marginTop: 16, marginLeft: 228}}
                name="greater-than"
                size={17}
                color="grey"
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 25,
              marginLeft: 10,
              fontWeight: 'bold',
              color: 'black',
              marginTop: 30,
            }}>
            Resources
          </Text>
          <View
            style={{
              height: 50,
              width: '100%',
              backgroundColor: 'white',
              elevation: 5,
              marginTop: 30,

              flexDirection: 'row',
            }}>
            <Iconic
              style={{marginTop: 13, marginLeft: 15}}
              name="user-circle"
              size={20}
              color="grey"
            />
            <Text
              style={{
                color: 'black',
                fontSize: 12,
                // fontWeight: 'bold',
                paddingLeft: 10,
                paddingTop: 15,
                letterSpacing: 2,
              }}>
              Become A Seller
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('BecomeSeller')}>
              <Icoon
                style={{marginTop: 16, marginLeft: 170}}
                name="greater-than"
                size={17}
                color="grey"
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 50,
              width: '100%',
              backgroundColor: 'white',
              elevation: 5,

              flexDirection: 'row',
            }}>
            <Icoon
              style={{marginTop: 13, marginLeft: 15}}
              name="security"
              size={20}
              color="grey"
            />
            <Text
              style={{
                color: 'black',
                fontSize: 12,
                // fontWeight: 'bold',
                paddingLeft: 10,
                paddingTop: 15,
                letterSpacing: 2,
              }}>
              Privacy Policy
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('BeforeInterview')}>
              <Icoon
                style={{marginTop: 16, marginLeft: 185}}
                name="greater-than"
                size={17}
                color="grey"
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 50,
              width: '100%',
              backgroundColor: 'white',
              elevation: 5,

              flexDirection: 'row',
            }}>
            <Iconic
              style={{marginTop: 15, marginLeft: 16}}
              name="support"
              size={20}
              color="grey"
            />
            <Text
              style={{
                color: 'black',
                fontSize: 12,
                // fontWeight: 'bold',
                paddingLeft: 10,
                paddingTop: 17,
                letterSpacing: 2,
              }}>
              Support
            </Text>
            <TouchableOpacity onPress={initiateWhatsApp}>
              <Icoon
                style={{marginTop: 16, marginLeft: 230}}
                name="greater-than"
                size={17}
                color="grey"
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: 50,
              width: '100%',
              backgroundColor: 'white',
              elevation: 5,
              marginTop: 30,

              flexDirection: 'row',
            }}>
            <Icon
              style={{marginTop: 13, marginLeft: 18}}
              name="logout"
              size={20}
              color="grey"
            />
            <Text
              style={{
                color: 'black',
                fontSize: 12,
                // fontWeight: 'bold',
                paddingLeft: 10,
                paddingTop: 15,
                letterSpacing: 2,
              }}>
              Sign out
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('MainScreen')}>
              <Icoon
                style={{marginTop: 16, marginLeft: 223}}
                name="greater-than"
                size={17}
                color="grey"
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const Services = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="...."
        component={Home}
        options={({route, navigation}) => ({
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => {
            const focused = navigation.isFocused();
            return (
              <Icon
                style={{marginTop: 5}}
                name="home"
                size={28}
                color={focused ? '#1260cc' : 'black'}
              />
            );
          },
        })}
      />
      <Tab.Screen
        name="Inbox"
        component={Profilee}
        options={({route, navigation}) => ({
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            const focused = navigation.isFocused();
            return (
              <Iconsss
                style={{marginTop: 5}}
                name="envelope"
                size={40}
                color={focused ? '#1260cc' : 'black'}
              />
            );
          },
        })}
      />
      <Tab.Screen
        name="......"
        component={PrivateLabel}
        options={({route, navigation}) => ({
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => {
            const focused = navigation.isFocused();
            return (
              <Track
                style={{marginTop: 7}}
                name="track-changes"
                size={28}
                color={focused ? '#1260cc' : 'black'}
              />
            );
          },
        })}
      />
      <Tab.Screen
        name="......."
        component={OrderForm}
        options={({route, navigation}) => ({
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            const focused = navigation.isFocused();
            return (
              <Iconsss
                style={{marginTop: 4}}
                name="user"
                size={40}
                color={focused ? '#1260cc' : 'black'}
              />
            );s
          },
        })}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6E6DF',
  },
  text: {
    fontSize: 20,
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
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

export default Services;
