
import {createBottomTabNavigator} from '@react-nagivation/bottom-tabs';
const Tab = createBottomTabNavigator();
const MainTabNavigator = () =>  {
return (
  <Tab.Navigator>
    <Tab.Screen name="Status" component={NotImplementedScreen} />
    <Tab.Screen name="Calls" component={NotImplementedScreen} />
    <Tab.Screen name="Camera" component={NotImplementedScreen} />
    <Tab.Screen name="FlatListTest" component={FlatListTest} />
    <Tab.Screen name="Settings" component={NotImplementedScreen} />
  </Tab.Navigator>
);
};

export default MainTabNavigator;