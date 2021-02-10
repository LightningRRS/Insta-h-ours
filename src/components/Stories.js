import React, {useContext, useEffect, useState} from 'react';
import {View, Text, FlatList, Pressable} from 'react-native';
import ProfilePicture from './ProfilePicture';
import styles from './styles';


export default function Stories({navigation,pictures}) {

  console.log('stories aaya re aaya');
  // const value = useContext(userContext);
  // let pictures = value.pictures;

  return (
    <View style={styles.storyContainer}>
      <FlatList
        data={pictures}
        keyExtractor={(item) => item.login.uuid}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <Pressable
              onPress={() => {
                navigation.navigate('StoriesScreen', {
                pictures: pictures,
                pindex: index,
              })}
            }
              >
              <ProfilePicture
                uri={item.picture.medium}
                name={item.login.username}
              />
            </Pressable>
          );
        }}
      />
    </View>
  );
}
