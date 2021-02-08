import React from 'react';
import {View, Text, Image, StyleSheet, Pressable,FlatList ,Dimensions} from 'react-native';
import ProfilePicture from '../ProfilePicture';
import Entypo from 'react-native-vector-icons/Entypo';

const width = Dimensions.get('window').width ;
const height = Dimensions.get('window').height ;
const StoriesScreen = ({navigation, route}) => {
    const {pictures, pindex} = route.params;
    console.log("StoriesScreen");
    console.log(pictures);
    console.log(pindex);
    console.log('bekar gallery');
    return (
        
        
      <FlatList
        data={pictures}
        keyExtractor={(item) => item.login.uuid}
        horizontal
        initialScrollIndex={pindex}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
         return ( 
            <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginRight : 5
              }}>
              <ProfilePicture
                uri={pictures[index].picture.thumbnail}
                size="small"
              />
              <Pressable onPress={() => navigation.navigate('Home')}>
                <Entypo name="cross" size={20} color="#000" />
              </Pressable>
            </View>
            <Image
              source={{uri: item.picture.large}}
              style={([StyleSheet.absoluteFillObject]),{height : height , width : width}}
            />
          </View>
         );
        }}
      />
    );
  }

export default StoriesScreen;
