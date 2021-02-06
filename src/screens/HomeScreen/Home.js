import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import Stories from '../../components/Stories';
import Post from '../../components/Post/Post';

export default function Home() {
  const [pictures, setPictures] = useState([]);

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

  console.log(pictures);

  if (pictures === null) {
    return 'Loading....';
  }
  console.log("Here the Homejs,the useeffect one")
  return (
    <SafeAreaView>
      <FlatList
        data={pictures}
        keyExtractor={(item) => item.login.uuid}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<Stories pictures={pictures} />}
        renderItem={({item}) => {
          return <Post item={item} />;
        }}
      />
    </SafeAreaView>
  );
}
