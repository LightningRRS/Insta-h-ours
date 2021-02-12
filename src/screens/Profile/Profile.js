import React from 'react';
import {View, Text} from 'react-native';
import { Button, Image } from 'react-native-elements';
import { auth } from '../../../backend/Firebase';
import SignupScreen from '../Authentication/SignupScreen'

export default function Profile({navigation}) {
  return (
    <View style={{paddingTop : "20%"}}>
      
      <Button 
      title="Sign Out"
        onPress = { () => {
          auth.signOut()
          .then(() => {
            console.log("Signed out");
            navigation.replace("Login");
          }
            ).
          catch((error)=> console.log(error.message));
          
        }}
        containerStyle = {
          {
              width : "70%",
              alignSelf : "center",
              marginVertical : 10
          }
      }
      />
      <Image
          source = {require('../../../asset/later.gif')}
          resizeMode="contain"
          style={{height : "70%",marginTop: "10%"}}
      />
    </View>
  );
}
