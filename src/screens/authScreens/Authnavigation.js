
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


import signInScreen from './Signin';
import SignUpScreen from './Signup';
import SplashScreen from '../Splashscreen';


const Stack = createStackNavigator();

function AuthNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splashscreen" component={SplashScreen} />
      <Stack.Screen name="Signin" component={signInScreen} />
      <Stack.Screen name="Signup" component={SignUpScreen} />
     
    </Stack.Navigator>
  );
}


const styles = StyleSheet.create({

});

export default AuthNavigation;
