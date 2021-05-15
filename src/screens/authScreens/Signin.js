import  React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
  } from 'react-native';

const SignInScreen = ()=> {
    return(
        <View style={loginScreenStyles.texture}>
            <Text> Login! </Text>
            <Button title="hello there" onPress={ () => alert('hey you am clicked') } />
        </View>
    );
};


export default SignInScreen;

const loginScreenStyles = StyleSheet.create({
    texture:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
    },
   
    
});
