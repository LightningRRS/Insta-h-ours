import React, {useEffect, useState, useContext} from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import Stories from '../../components/Stories';
import Post from '../../components/Post/Post';
import { createStackNavigator } from '@react-navigation/stack';
import StoriesScreen from '../../components/StoriesScreen/StoriesScreen';
import Feather from 'react-native-vector-icons/Feather';
import Inonicons from 'react-native-vector-icons/Ionicons'

import {userContext, userProvider} from '../../Context/UserContext';

export function Homo ({navigation}){
  
  const value = useContext(userContext);
  const pictures = value.pictures;

  console.log(pictures);
  console.log("below Context in home");
  
  return (
  
    <FlatList
      data={pictures}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={<Stories navigation={navigation} pictures={pictures}/>}
      renderItem={({item}) => {
        return <Post item={item} />;
      }}
    />
    
  );
}

export default function Home() {
  
  
  const Stack = createStackNavigator();

  console.log("Here the Homejs")

  return (
    
      <Stack.Navigator initialRouteName="Homea">
      <Stack.Screen name="Homea" component={Homo}
        options={{
          title: 'Gify by M&R',
          headerLeft: () => (
            <Feather name="camera" size={25} color={'#000'} />
          ),
          headerRight: () => (
            <Inonicons name="paper-plane-outline" size={25} color={'#000'} />
          ),
          headerTitleAlign: 'center',
          headerLeftContainerStyle: {marginLeft: 5},
          headerRightContainerStyle: {marginRight: 5},
          headerTitleStyle: {fontFamily: 'cascadia-code'},
        }}
      
      />
      <Stack.Screen name="StoriesScreen" component={StoriesScreen}
      initialParams= {{
       
      }}/>
      </Stack.Navigator>
    
  );
}
