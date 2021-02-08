import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Pressable} from 'react-native';
import ProfilePicture from './ProfilePicture';
import styles from './styles';

export default function Stories({pictures, navigation}) {
  console.log('stories aaya re aaya');
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
