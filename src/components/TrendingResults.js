import React, { useContext } from 'react'
import { View, Text, FlatList, Pressable } from 'react-native'
import { ListItem } from 'react-native-elements';
import {TrendingContext} from '../Context/TrendingContext';
import Feather from 'react-native-vector-icons/Feather'

const TrendingResults = ({setSearch,navigation}) => {
    const {topResults}= useContext(TrendingContext);
    console.log("herersdf",topResults);
    return (
        <FlatList
      data={topResults}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => (
        <View
          
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: 'lightgrey',
            height: 50,
            marginHorizontal : 10
          }}>
            <Pressable
            onPress={() => {
              navigation.navigate("SearchFinalResults",{
                SearchInput : item,
              })
            }}
            style={{
              flex : 1
            }}>
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
              {item}
            </Text>
            </Pressable>
            <Pressable onPress={()=> {
              console.log("pressed");
              setSearch(item)}}>
            <Feather name="trending-up" size={25} color="#000" 
            />
            </Pressable>
         
        
        </View>
    )}
    />
    )
}

export default TrendingResults
