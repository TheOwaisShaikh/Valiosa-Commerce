import React, {useRef, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StatusBar} from 'expo-status-bar';
import {ImageSlider} from 'react-native-image-slider-banner';
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

const SellerDashboard = ({navigation}) => {
  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const [shouldShow, setShouldShow] = useState(true);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(700).then(() => setRefreshing(false));
  }, []);

  const [refreshing, setRefreshing] = React.useState(false);

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        // backgroundColor: 'white',
        flex: 1,
      }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
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
        <Image
          source={require('./../assets/owaishaikh.jpg')}
          style={{
            width: 200,
            height: 200,
            borderRadius: 400 / 2,
            marginLeft: '22%',

            marginTop: 30,
          }}
        />
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            textAlign: 'center',
            marginTop: 10,
            fontWeight: 'bold',
          }}>
          Owais Shaikh
        </Text>
        <View
          style={{
            height: 20,
            width: '100%',
            flexDirection: 'row',
          }}>
          <Icon
            style={{marginLeft: 100}}
            name="location-pin"
            size={12}
            color="grey"
          />
          <Text
            style={{
              color: 'grey',
              fontSize: 10,
              textAlign: 'center',
              marginLeft: 5,

              letterSpacing: 1,
            }}>
            Hyderabad City,Pakistan
          </Text>
        </View>
        <Text
          style={{
            color: 'black',
            fontSize: 14,
            textAlign: 'center',
            marginTop: 5,
            marginLeft: 3,
            letterSpacing: 1,
          }}>
          Founder Of Valiosa & Co
        </Text>
        <View
          style={{
            width: '100%',
            height: 20,
            // backgroundColor: 'white',
            // backgroundColor: 'pink',
            marginTop: 10,
            flexDirection: 'row',
          }}>
          <Text style={styles.sucessratio}>Sucess Ratio</Text>
          <Text style={styles.sucessratio}>Response Rate</Text>
          <Text style={styles.sucessratio}>BootCamp Result</Text>
          <Text style={styles.sucessratio}>Positive Reviews</Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 20,
            // backgroundColor: 'white',
            // backgroundColor: 'pink',

            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 40,
            paddingLeft: 10,
          }}>
          <Text style={styles.sucessratios}>98%</Text>
          <Text style={styles.sucessratios}>99%</Text>
          <Text style={styles.sucessratios}>Certified</Text>
          <Text style={styles.sucessratios}>98%</Text>
        </View>
        <View
          style={{
            marginTop: 50,
            height: 10,
            backgroundColor: '#ededed',
            width: '100%',
            elevation: 1,
          }}></View>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            marginLeft: 10,
            marginTop: 50,
            fontWeight: 'bold',
            letterSpacing: 1,
          }}>
          Amazon Expert- Ecommerce, Listing Optimization, SEO, A+, Marketing,PPC
          <Text style={{color: '#1260cc', fontSize: 12}}> 10$-300$</Text>
        </Text>
        <Text
          style={{
            color: 'grey',
            fontSize: 14,
            marginLeft: 10,
            marginTop: 10,
            fontWeight: 'bold',
            letterSpacing: 1,
          }}>
          Amazon, Walmart, eBay, Shopify & Wordpress | 3+ years of experience
          listing, optimizing, managing, and marketing for 10+ different brands.
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 15,
            marginLeft: 10,
            marginTop: 10,
            fontWeight: 'bold',
            letterSpacing: 1,
          }}></Text>
        <Text
          style={{
            color: 'black',
            fontSize: 14,
            marginLeft: 10,
            marginTop: 10,

            letterSpacing: 1,
          }}>
          Your hard-earned money deserves an experienced hand to treat. So why
          are you{'\n'}hiring someone that doesn't care about your money?
        </Text>
        <Text
          style={{
            marginTop: 10,
            color: 'black',
            fontSize: 14,
            marginLeft: 10,

            letterSpacing: 1,
          }}>
          What if you hire an experienced coach and consultant with years of
          experience in the Amazon Fba Business that cares about your money?
        </Text>
        <Text
          style={{
            marginTop: 10,
            color: 'black',
            fontSize: 14,
            marginLeft: 10,

            letterSpacing: 1,
          }}>
          My name is Bilal Siddiqui and I am an Amazon Coach and Consultant,
          helping brands to scale their business to the 5x revenue in a short
          period. I and my team can deal efficiently with international clients
          from the US, Ca, UK, and all around the globe.
        </Text>
        <Text
          style={{
            marginTop: 10,
            color: 'black',
            fontSize: 14,
            marginLeft: 10,
            letterSpacing: 1,
          }}>
          50 We have a functional team that makes sure to provide you top-notch
          services regarding Amz Private Label and Amz Wholesale Business
          without any flaws and complaints and provide you with the best
          results. Our team will provide you with extraordinary services to
          boost your newly settled or ongoing business at the most affordable
          package.
        </Text>
        <Text
          style={{
            marginTop: 10,
            color: 'black',
            fontSize: 14,
            marginLeft: 10,
            letterSpacing: 1,
          }}>
          Still thinking to start Amazon Business, let have a consultation call,
          We'll clear all your queries.
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 15,
            marginLeft: 10,
            marginTop: 20,
            fontWeight: 'bold',
            letterSpacing: 1,
          }}>
          Technical Skills:
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 14,
            marginLeft: 10,
            marginTop: 15,

            letterSpacing: 1,
          }}>
          Amazon Listing Optimization{'\n'}Amazon A+ Content{'\n'}Amazon Store
          Design{'\n'}Amazon PPC{'\n'}Amazon DSP{'\n'}Graphic Design {'\n'}
          Strategic Planning{'\n'}Management{'\n'}SEO {'\n'}SERP{'\n'}
          Marketing{'\n'}Shopify{'\n'}Daraz
          {'\n'}
          eBay Optimization{'\n'}Word Press{'\n'}Social Media Advertising
        </Text>
        <View
          style={{
            marginTop: 40,
            height: 10,
            backgroundColor: '#ededed',
            width: '100%',
            elevation: 2,
          }}></View>
        <Text
          style={{
            color: 'black',
            fontSize: 15,
            marginLeft: 10,
            marginTop: 20,
            fontWeight: 'bold',
            letterSpacing: 1,
          }}>
          My Portfolio:
        </Text>
        <View
          style={{
            width: '100%',
            height: 240,
          }}>
          <ImageSlider
            data={[
              {img: require('../../src/assets/portofilio.jpeg')},
              {img: require('../../src/assets/portfolio.jpg')},
              {img: require('../../src/assets/portofilio.jpeg')},
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
        <View
          style={{
            marginTop: 40,
            height: 10,
            backgroundColor: '#ededed',
            width: '100%',
            elevation: 2,
          }}></View>
        <View
          style={{
            height: 400,
            // backgroundColor:'red',
            width: '100%',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 15,
              marginLeft: 10,
              marginTop: 20,
              fontWeight: 'bold',
              letterSpacing: 1,
            }}>
            Frequently Ask Questions:
          </Text>
          <Text
            style={{
              marginTop: 15,
              color: 'black',
              fontSize: 13,
              marginLeft: 10,
              letterSpacing: 1,
              fontWeight: 'bold',
            }}>
            What's the guarantee that my business will be successful?
          </Text>
          <Text
            style={{
              marginTop: 10,
              color: 'black',
              fontSize: 12,
              marginLeft: 10,
              letterSpacing: 1,
            }}>
            Every business has a risk! We make sure we do enough research on
            products and sourcing. These two single factors can reduce risk in
            Amazon FBA up to 90%.
          </Text>
          <Text
            style={{
              marginTop: 10,
              color: 'black',
              fontSize: 13,
              marginLeft: 10,
              letterSpacing: 1,
              fontWeight: 'bold',
            }}>
            Did you help others sellers to launch successful products on Amazon?
          </Text>
          <Text
            style={{
              marginTop: 10,
              color: 'black',
              fontSize: 12,
              marginLeft: 10,
              letterSpacing: 1,
            }}>
            Yes, I helped my clients start their FBA business, find their
            products, source them from Brands, Do profitable Calculations,
            Shipping to FBA warehouse, Do Inventory and Pricing Management,
            Manage Maximum Buy-Box Percentage. All in one go.
          </Text>
          <Text
            style={{
              marginTop: 10,
              color: 'black',
              fontSize: 13,
              marginLeft: 10,
              letterSpacing: 1,
              fontWeight: 'bold',
            }}>
            Is this a kind of business reliable?
          </Text>
          <Text
            style={{
              marginTop: 10,
              color: 'black',
              fontSize: 12,
              marginLeft: 10,
              letterSpacing: 1,
            }}>
            Yes like any other business, it requires dedication and skills to
            rank on the first page and get a stable income in a long run.
          </Text>
          <View
            style={{
              marginTop: 40,
              height: 10,
              backgroundColor: '#ededed',
              width: '100%',
              elevation: 2,
            }}></View>
        </View>
        <Image
          source={require('./../assets/rating.jpg')}
          style={{
            width: '100%',
            height: 150,
            resizeMode: 'cover',
          }}
        />
        <View
          style={{
            height: 60,
            backgroundColor: 'white',
            width: '100%',
          }}></View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ChatScreen');
        }}
        style={{
          width: 100,
          height: 40,

          flexDirection: 'row',
          elevation: 2,
          position: 'absolute',
          bottom: 10,
          right: 10,
          backgroundColor: 'white',
          borderRadius: 30,
          marginBottom: 10,
        }}>
        <Image
          source={require('./../assets/owaishaikh.jpg')}
          style={{
            width: 30,
            height: 30,
            borderRadius: 400 / 2,
            marginTop: 5,
            marginLeft: 8,
          }}
        />
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: 'bold',
            letterSpacing: 1,
            marginTop: 8,
            marginLeft: 5,
          }}>
          Edit
        </Text>
      </TouchableOpacity>
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
            <View style={{zIndex: 3, position: 'absolute',width:30,height:30, backgroundColor:'#1260cc',borderRadius:400/2,marginLeft:80,marginTop:100,}}>
              <Icon
                style={{marginTop:6,marginLeft:7,}}
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
          }}>
          Welcome To Valiosa Commerce
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
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
            <TouchableOpacity
              onPress={() => navigation.navigate('BeforeInterview')}>
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
            );
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
  sucessratio: {
    color: 'black',
    fontSize: 11,
    fontWeight: 'bold',
    paddingLeft: 12,
  },
  placeholderStyle: {
    fontSize: 17,
    color: 'black',
    // fontWeight: 'bold',
    marginLeft: 10,
  },
  scrollView: {
    height: '100%',
    width: '100%',
  },

  sucessratios: {
    color: '#1260cc',
    fontSize: 11,
    fontWeight: 'bold',
    paddingLeft: 12,
  },
});

export default SellerDashboard;
