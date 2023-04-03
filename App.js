import React, {useState} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WhatsappBuiness from './src/screens/WhatsappBuiness';
import LoginScreen from './src/screens/LoginScreen';
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import ForgetPassword from './src/screens/ForgetPassword';
import Services from './src/screens/Services';
import SocialMediaMarketerProfile from './src/screens/SocialMediaMarketerProfile';
import MainScreen from './src/screens/MainScreen';
import SignupScreen from './src/screens/SignupScreen';
import RegisterExtereme from './src/screens/RegisterExtreme';
import ScheduleInterview from './src/screens/ScheduleInterview';
import SellerLogin from './src/screens/SellerLogin';
import Profilee from './src/screens/Profilee';
import LoginFormClient from './src/screens/LoginFormClient';
import ScheduleMeeting from './src/screens/ScheduleMeeting';
import SellerDashboard from './src/screens/SellerDashboard';
import DigitalMarketing from './src/screens/DigitalMarketing';
import FBAWholesale from './src/screens/FBAWholesale';
import PrivateLabel from './src/screens/PrivateLabel';
import MicroPrivateLabel from './src/screens/MicroPrivateLabel';
import ShopifyDropshipping from './src/screens/ShopifyDropshipping';
import Daraz from './src/screens/Daraz';
import BecomeSeller from './src/screens/BecomeSeller';
import CompanyFormation from './src/screens/CompanyFormation';
import OnlineArbitrage from './src/screens/OnlineArbitrage';
import Cources from './src/screens/Cources';
import AccountReinstatement from './src/screens/AccountReinstatement';
import ChatScreen from './src/screens/ChatScreen';
import Hiring from './src/screens/Hiring';
import Toast from 'react-native-toast-message';


const App = () => {
  const Stack = createNativeStackNavigator();
  //create login screen
  //forget password screen
  //sign up screen
  //dashboard screen

  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* name=calling agent, component ?view */}

          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Services"
            component={Services}
            options={{headerShown: false, animation: 'slide_from_bottom'}}
          />
          <Stack.Screen
            name="SocialMediaMarketerProfile"
            component={SocialMediaMarketerProfile}
            options={{headerShown: false, animation: 'slide_from_bottom'}}
          />
          <Stack.Screen
            name="WhatsappBuiness"
            component={WhatsappBuiness}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Hiring"
            component={Hiring}
            options={{headerShown: false, animation: 'slide_from_bottom'}}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: false, animation: 'slide_from_bottom'}}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{headerShown: false, animation: 'slide_from_bottom'}}
          />
          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{headerShown: false, animation: 'slide_from_bottom'}}
          />

          <Stack.Screen
            name="ForgetPassword"
            component={ForgetPassword}
            options={{headerShown: false, animation: 'slide_from_bottom'}}
          />

          <Stack.Screen
            name="RegisterExtreme"
            component={RegisterExtereme}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignupScreen"
            component={SignupScreen}
            options={{headerShown: false, animation: 'slide_from_bottom'}}
          />

          <Stack.Screen
            name="SellerLogin"
            component={SellerLogin}
            options={{headerShown: false, animation: 'slide_from_bottom'}}
          />
          <Stack.Screen
            name="LoginFormClient"
            component={LoginFormClient}
            options={{headerShown: false, animation: 'slide_from_bottom'}}
          />
          <Stack.Screen
            name="Profilee"
            component={Profilee}
            options={{headerShown: false, animation: 'slide_from_bottom'}}
          />
          <Stack.Screen
            name="ScheduleMeeting"
            component={ScheduleMeeting}
            options={{headerShown: false, animation: 'slide_from_bottom'}}
          />

          <Stack.Screen
            name="DigitalMarketing"
            component={DigitalMarketing}
            options={{headerShown: false, animation: 'slide_from_bottom'}}
          />
          <Stack.Screen
            name="FBAWholesale"
            component={FBAWholesale}
            options={{headerShown: false, animation: 'slide_from_bottom'}}
          />
          <Stack.Screen
            name="MicroPrivateLabel"
            component={MicroPrivateLabel}
            options={{headerShown: false, animation: 'slide_from_bottom'}}
          />
          <Stack.Screen
            name="PrivateLabel"
            component={PrivateLabel}
            options={{headerShown: false, animation: 'slide_from_bottom'}}
          />
          <Stack.Screen
            name="ShopifyDropshipping"
            component={ShopifyDropshipping}
            options={{headerShown: false, animation: 'slide_from_bottom'}}
          />
          <Stack.Screen
            name="Daraz"
            component={Daraz}
            options={{headerShown: false, animation: 'slide_from_bottom'}}
          />
          <Stack.Screen
            name="CompanyFormation"
            component={CompanyFormation}
            options={{headerShown: false, animation: 'slide_from_bottom'}}
          />
          <Stack.Screen
            name="OnlineArbitrage"
            component={OnlineArbitrage}
            options={{headerShown: false, animation: 'slide_from_bottom'}}
          />
          <Stack.Screen
            name="Cources"
            component={Cources}
            options={{headerShown: false, animation: 'slide_from_bottom'}}
          />
          <Stack.Screen
            name="AccountReinstatement"
            component={AccountReinstatement}
            options={{headerShown: false, animation: 'slide_from_bottom'}}
          />
          <Stack.Screen
            name="BecomeSeller"
            component={BecomeSeller}
            options={{headerShown: false, animation: 'slide_from_bottom'}}
          />
          <Stack.Screen
            name="ScheduleInterview"
            component={ScheduleInterview}
            options={{headerShown: false, animation: 'slide_from_bottom'}}
          />
          <Stack.Screen
            name="ChatScreen"
            component={ChatScreen}
            options={{headerShown: false, animation: 'slide_from_bottom'}}
          />
          <Stack.Screen
            name="SellerDashboard"
            component={SellerDashboard}
            options={{headerShown: false, animation: 'slide_from_bottom'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7CA1B4',
    width: 400,
    // flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    text1: {
      fontSize: 28,
    },
  },
});
export default App;
