import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  FlatList,
  ScrollView,
  Image,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Button,
  TextInput,
} from 'react-native';

// import BlinkView from 'react-native-blink-view';
const Profilee = ({navigation}) => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        flex: 1,
      }}>
      <View
        style={{
          height: 40,
          width: '100%',
          backgroundColor: '#1260cc',
          elevation: 5,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          paddingTop: 30,
        }}></View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}>
        <View
          style={{
            height: 100,
            width: 100,
            flexDirection: 'row',
            backgroundColor: 'black',
            elevation: 5,
            borderRadius: 400 / 2,
            marginTop: 10,
            marginLeft: 3,
          }}>
          <Image
            source={{
              uri: 'https://qph.cf2.quoracdn.net/main-qimg-d0d09de78e6ec195faf64ba82c2e8c6a-lq',
            }}
            style={{
              width: 95,
              height: 95,
              borderRadius: 400 / 2,
              marginLeft: 2.3,
              marginTop: 2.3,
            }}
          />

          {/* <BlinkView
          useNativeDriver= {true}
           delay={1000} blinking={true} duration={}> */}

          {/* </BlinkView> */}
        </View>

        <View
          style={{
            width: '100%',
            height: 200,
            backgroundColor: 'white',

            paddingTop: 10,
          }}>
          <Text style={styles.name}>CompleteProfile</Text>

          <View
            style={{
              width: '100%',
              height: 250,
              backgroundColor: 'white',
              // backgroundColor: 'pink',
              paddingTop: 20,
              flexDirection: 'column',
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              elevation: 4,
              marginTop: 6,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
            }}>
            <Text style={styles.Portfolios}>Overview</Text>
            <Text style={styles.OverView}>
              Hello, I am a former-Amazon Employee with the inside expertise of
              working in the Advertising Division for 5 Years. I stepped out to
              do consulting full time on my own and have greatly enjoyed using
              my knowledge to efficiently scale brands on the Amazon platform.
              My specialty is helping brands of all sizes across every category
              improve sales, profit, ppc performance, conversion (via A+
              content, premium images, and videos), and FBA logistics on the
              Amazon platform. I can also enable your brand to expand on Amazon
              globally (CA, MX, EU, JP), Walmart.com, eBay, Instacart, Shopify,
              FB, and Google. I am an accredited and certified Amazon Partner
              through my ability to deliver meaningful results to my partners.
            </Text>
            <View
              style={{
                width: '100%',
                height: 330,
                backgroundColor: 'white',
                // backgroundColor: 'pink',
                paddingTop: 20,
                flexDirection: 'column',
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                elevation: 2,
                marginTop: 12,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
              }}>
              <Text style={styles.Portfolios}>Skills</Text>
              {/* <Text style={styles.OverView}>
              Sponsored Ad Management • Personally managing ads while assisted
              via Intelligent AI-Based Software (Sponsored Products, Sponsored
              Brands, Video Ads, and Display) • 40% ROAS improvement after 60
              Days while growing sales on average Full Channel Management •
              Inventory, Detail pages, Reviews, Rank, Customer Management,
              Advertising • Amazon Store Setup & Launch Creative
              Development/Design/Conversion Optimization • Video Production (for
              product pages, sponsored brand video, and brand store) • Detail
              Page Creation/ listing management (SEO optimized bullets, about,
              and A+ Content) • Brand Store Creation • 3D Product Renders
            </Text> */}
            </View>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          // width: 50,
          // height: 50,
          marginLeft: 290,
          // backgroundColor: 'lightgrey',

          // elevation: 2,
          // borderRadius: 400 / 2,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ForgetPassword');
          }}>
          <Image
            source={require('../assets/livechat.png')}
            style={{
              width: 60,
              height: 60,
            }}
          />
        </TouchableOpacity>
    
            </View>
          </View>
      
  );
};

const styles = StyleSheet.create({
  scrollView: {
    height: '100%',
    width: '100%',
  },
  contentContainer: {
    backgroundColor: 'white',
    paddingBottom: 500,
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  iconContainer: {
    marginTop: 16,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  image: {
    flex: 1,
  },
  Button: {
    fontWeight: 'bold',
  },
  text: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
  detail: {
    color: 'lightblack',
    fontSize: 15,
    paddingLeft: 10,
  },
  name: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  sucessratio: {
    color: 'black',
    fontSize: 11,
    fontWeight: 'bold',
    paddingLeft: 12,
  },
  Portfolios: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 15,
  },
  Portfoliodetail: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    paddingLeft: 14,
  },
  Portfolioss: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 15,
  },
  Portfoliodetails: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    paddingLeft: 14,
  },
  OverView: {
    color: 'black',
    fontSize: 13,

    paddingLeft: 17,
  },
  meeting: {
    color: 'white',
    fontSize: 14,

    fontWeight: 'bold',
  },
  icon: {
    marginRight: 5,
  },
});
export default Profilee;
