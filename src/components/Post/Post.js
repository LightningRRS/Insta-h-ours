import React from 'react';
import {View, Text} from 'react-native';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';

export default function Post({item}) {
  return (
    <View style={{marginVertical: 10}} >
      <Header uri={item.images.fixed_width_small_still.url} name={item.username} />
      <Body uri={item.images.downsized.url} />
      <Footer />
    </View>
  );
}
