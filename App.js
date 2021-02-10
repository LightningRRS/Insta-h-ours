import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Inonicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Login from './src/screens/Authentication/LoginScreen'
import DefaultHome from './src/screens/DefaultHome/DefaultHome'
import SignUp from './src/screens/Authentication/SignupScreen'
import {userProvider} from './src/Context/UserContext'

const Stack = createStackNavigator();

export default function App() {
  console.log("In appjs");
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={DefaultHome} options={{headerShown:false}} /> 
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
    
  )
};

//http://api.giphy.com/v1/gifs/trending?api_key=6RJ1SSQS5i1ms5A5uV0YX9S1E2d7JerU&limit=12&offset=${counter}
