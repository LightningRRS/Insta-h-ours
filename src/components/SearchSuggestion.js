import React, { useEffect, useState } from 'react';
import {View, Text, FlatList, Pressable} from 'react-native';

export default function SearchSuggestion({currentSearchValue,navigation}) {
  const [searchSuggestionResults, setSearchSuggestionResults] = useState([]);
  console.log('SearchResult');
  useEffect(() => {
    const apiurl = encodeURI(
      `https://api.giphy.com/v1/tags/related/${currentSearchValue}?api_key=6RJ1SSQS5i1ms5A5uV0YX9S1E2d7JerU`,
    );
    console.log("afsd");
    const fetchdata = async () => {
      const resultdata = await fetch(apiurl);
      const jsonResult = await resultdata.json();
      setSearchSuggestionResults(jsonResult.data);
    };
    fetchdata();
  }, [currentSearchValue]);
  console.log(searchSuggestionResults);
  return (
    <FlatList
      data={searchSuggestionResults}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => (
        <Pressable
          onPress={()=> {
            navigation.navigate("SearchFinalResults",{
              SearchInput : item.name,
            })
          }}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: 'lightgrey',
            height: 50,
            paddingHorizontal : 10,
            flex : 1
          }}>
          <View>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 25,
                color:
                  '#' +
                  (0x1000000 + Math.random() * 0xffffff)
                    .toString(16)
                    .substr(1, 6),
              }}>
              {item.name}
            </Text>
          </View>
        </Pressable>
      )}
    />
  );
}
