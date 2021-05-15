import  React from "react";
import {
    StyleSheet,
    Text,
    View,
    Button
  } from 'react-native';

const SettingsScreen = ()=> {
    return(
        <View style={settingsStyle.setting}>
            <Text>  Settings !</Text>
            
        </View>
    );
};


export default SettingsScreen;

const settingsStyle = StyleSheet.create({
    setting:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
    },
 
    
});
