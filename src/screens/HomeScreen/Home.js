import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import Stories from '../../components/Stories';
import Post from '../../components/Post/Post';
import { createStackNavigator } from '@react-navigation/stack';
import StoriesScreen from '../../components/StoriesScreen/StoriesScreen';
import Feather from 'react-native-vector-icons/Feather';
import Inonicons from 'react-native-vector-icons/Ionicons'



export default function Home() {
  const [pictures, setPictures] = useState([]);

  const Stack = createStackNavigator();

  useEffect(() => {
    const apiurl = 'https://randomuser.me/api/?results=5';
    const fetchdata = async () => {
      const result = await fetch(apiurl);
      const jsonResult = await result.json();
      // console.log('results------>', jsonResult);
      setPictures(jsonResult.results);
    };
    fetchdata();
  }, []);

  console.log("From home.js",pictures);

  if (pictures === null) {
    return 'Loading....';
  }
  // console.log("Here the Homejs,the useeffect one")

  const homo = ({navigation}) => {
    return (
    <View>
      <FlatList
        data={pictures}
        keyExtractor={(item) => item.login.uuid}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<Stories pictures={pictures} navigation={navigation}/>}
        renderItem={({item}) => {
          return <Post item={item} />;
        }}
      />
      </View>
    );
  }

  return (
    
      <Stack.Navigator initialRouteName="Homea">
      <Stack.Screen name="Homea" component={homo}
        options={{
          title: 'Intagram',
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
        pictures : pictures ,
        pindex : 1
      }}/>
      </Stack.Navigator>
    
  );
}
