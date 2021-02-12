import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Image} from 'react-native-elements'

const Width = Dimensions.get('screen').width - 5;
export default function Body({uri}) {
  return (
    <Image
      source={{uri}}
      style={{
        height: 400,
        width: '100%',
      }}
      PlaceholderContent={
        <Image
          source={require('../../../../asset/nice.gif')}
          style={{height:400,width:Width}}
        />
      }
    />
  );
}
