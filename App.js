
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import HomeScreen from './src/screens/userScreens/Homescreen';
import SettingsScreen from './src/screens/userScreens/Settings';
import ProfileScreen from './src/screens/userScreens/Profile';
import AuthNavigation from './src/screens/authScreens/Authnavigation';


const Tab = createMaterialBottomTabNavigator();
const App = () =>{
  return (
    <NavigationContainer>

          <Tab.Navigator
            initialRouteName="Feed"
            activeColor="#ffff"
            barStyle={{ backgroundColor: 'green' }}
          >
          <Tab.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}

            />
          
          <Tab.Screen 
            name="Setting" 
            component={SettingsScreen}

            options={{
              tabBarLabel: 'Settings',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="bell" color={color} size={26} />
              ),
            }}

            />

          <Tab.Screen 
            name="Profile" 
            component={ProfileScreen}

            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
              ),
            }}

          />

        </Tab.Navigator>

    </NavigationContainer>
  );
};


const styles = StyleSheet.create({

});

export default App;
