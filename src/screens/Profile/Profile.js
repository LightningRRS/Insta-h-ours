import React from 'react';
import {View, Text} from 'react-native';
import { Button } from 'react-native-elements';
import { auth } from '../../../backend/Firebase';
import SignupScreen from '../Authentication/SignupScreen'

export default function Profile({navigation}) {
  return (
    <View >
      <Text>user profile</Text>
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
    </View>
  );
}
