import React from 'react';
import {View, Text, StyleSheet, Pressable,FlatList ,Dimensions} from 'react-native';
import ProfilePicture from '../ProfilePicture';
import Entypo from 'react-native-vector-icons/Entypo';
import {Image} from 'react-native-elements'

const width = Dimensions.get('window').width ;
const height = Dimensions.get('window').height ;
const StoriesScreen = ({navigation, route}) => {
    const {pictures, pindex} = route.params;
    return (
        
        
      <FlatList
        data={pictures}
        keyExtractor={(item) => item.id}
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
                uri={item.images.fixed_width_small_still.url}
                size="small"
              />
              <Pressable onPress={() => navigation.replace('Homea')}>
                <Entypo name="cross" size={20} color="#000" />
              </Pressable>
            </View>
            <Image
              source={{uri: item.images.original.url}}
              style={([StyleSheet.absoluteFillObject]),{height : height , width : width}}
              PlaceholderContent={
                <Image
                  source={require('../../../asset/cylinder.gif')}
                  style = {{height : height,width : width}}
                />
              }
            />
          </View>
         );
        }}
      />
    );
  }

export default StoriesScreen;
