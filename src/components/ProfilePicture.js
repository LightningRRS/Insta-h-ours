import React from 'react';
import {View, Text} from 'react-native';
import {Image} from 'react-native-elements'
import styles from './styles';

export default function ProfilePicture({uri, name, size=""}) {
  return (
    <View style={size != 'small' ? styles.container : styles.smallContainer}>
      <Image
        source={{
          uri,
        }}
        style={size != 'small' ? styles.profileImage : styles.smallImage}
      />
      
    </View>
  );
}
