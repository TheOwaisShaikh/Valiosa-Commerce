// import React, {useFocusEffect, useEffect, useState} from 'react';
// import {
//   View,
//   Image,
//   Text,
//   StyleSheet,
//   ScrollView,
//   Button,
//   TouchableOpacity,
// } from 'react-native';
// import {ImageSlider} from 'react-native-image-slider-banner';

// const Product = ({route, navigation}) => {
//   const product = route.params.product;
//   // alert(JSON.stringify(product.slider[0]));
//   const [data, setData] = useState(1);
//   const [value, setValue] = useState(1);

//   useEffect(() => {
//     alert('' + data + ' ' + value);
//   }, [data]);

//   useEffect(() => {
//     alert('Data ' + data + ' Value ' + value);
//   }, [data,value]);

//   useEffect(() => {
//     alert('I have to do some work, only once');
//   }, []);

//   // useEffect(() => {
//   //   alert('no dependency');
//   // });

//   return (
//     <ScrollView>
//       <View
//         style={{
//           width: '100%',
//           height: '100%',
//           backgroundColor: '#FFFF',
//         }}>
//         <TouchableOpacity
//           onPress={() => {
//             setData(i => i + 1);
//             // setData(1);
//             console.log(data);
//           }}>
//           <Image
//             source={require('../assets/latest.jpg')}
//             style={{width: '100%', height: 430}}
//           />
//         </TouchableOpacity>

//         <TouchableOpacity
//           onPress={() => {
//             setValue(i => i + 1);
//           }}>
//           <Image
//             source={require('../assets/latestt.jpg')}
//             style={{width: '100%', height: 450}}
//           />
//         </TouchableOpacity>
//         <Image
//           source={require('../assets/newlatest.jpg')}
//           style={{width: '100%', height: 600}}
//         />
//         <Button
//           color="black"
//           title={'ORDER NOW'}
//           onPress={() => {
//             navigation.navigate('OrderForm');
//           }}
//         />
//       </View>
//     </ScrollView>
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
//   },
//   Button: {
//     fontWeight: 'bold',
//   },
//   text: {
//     color: 'black',
//     fontSize: 15,
//     fontWeight: 'bold',
//   },
// });
// export default Product;

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

import React, {useState, useEffect, useRef} from 'react';
import {
  ScrollView,
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {ImageSlider} from 'react-native-image-slider-banner';
import Icon from 'react-native-vector-icons/Entypo';

const SocialMediaMarketerProfile = ({navigation}) => {
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
          Chat
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  sucessratio: {
    color: 'black',
    fontSize: 11,
    fontWeight: 'bold',
    paddingLeft: 12,
  },
  placeholderStyle: {
    fontSize: 17,
    color:'black',
    // fontWeight: 'bold',
    marginLeft:10,
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
export default SocialMediaMarketerProfile;

// import React, { useState } from 'react'; 
// import { View, Text, StyleSheet,TextInput, ScrollView,ActivityIndicator, TouchableOpacity, FlatList, Button } from 'react-native';
// import DocumentPicker from 'react-native-document-picker';

// const SocialMediaMarketer = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//    const [loading, setLoading] = useState(false);

//   const handleSend = () => {
//     if (!input) return;
//     setMessages([...messages, { text: input, type: 'text' }]);
//     setInput('');
//   }

//   const handleDocumentPicker = async() => {
//     try {
//       const result = await DocumentPicker.pick({
//         type: [DocumentPicker.types.allFiles],
//       });
//       setMessages([...messages, { text: result.uri, type: 'document' }]);
//     } catch (err) {
//       if (DocumentPicker.isCancel(err)) {
//         console.log('Canceled from single doc picker');
//       } else {
//         throw err;
//       }
//     }
//   };

//   const renderMessage = ({ item }) => {
//     const { text, type } = item;
//     return (
//       <View style={styles.message}>
//         {type === 'text' ? <Text>{text}</Text> : <Text>Document : {text}</Text>}
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <FlatList data={messages} renderItem={renderMessage} />
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           value={input}
//           onChangeText={text => setInput(text)}
//           placeholder="Type a message"
//         />

//         <Button title="Send" onPress={handleSend} />
//         {loading ? (
//           <ActivityIndicator size="small" color="#0000ff" />
//         ) : (
//           <Button title="Select Document" onPress={handleDocumentPicker} />
//         )}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     padding: 10,
//     borderTopWidth: 1,
//     borderColor: '#ccc',
//     backgroundColor: '#fff',
//   },
//   input: {
//     flex: 1,
//     padding: 10,
//     marginRight: 10,
//     backgroundColor: '#f1f0f0',
//     borderRadius: 10,
//   },
//   message: {
//     marginVertical: 5,
//     padding: 10,
//     borderRadius: 10,
//     alignSelf: 'flex-start',
//   },
// });
// export default SocialMediaMarketerProfile;
