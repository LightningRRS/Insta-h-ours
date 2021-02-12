import React, { useEffect, useState } from 'react'
import { View, Text ,ScrollView, Keyboard } from 'react-native';
import { Input, SearchBar } from 'react-native-elements';
import Trending from '../../components/Trending/Trending';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {TrendingProvider} from '../../Context/TrendingContext';
import TrendingResults from '../../components/TrendingResults';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import SearchSuggestion from '../../components/SearchSuggestion';
import { createStackNavigator } from '@react-navigation/stack';
import SearchFinalResults from '../../components/SearchFinalResults';
import Gifs from '../../components/Gifs';


export function Search({navigation}) {
    const [search ,setSearch] = useState('');
    const [focus,setFocus] = useState(false);
    

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <TrendingProvider>
        <View>
            <Input
                    placeholder = 'Time to see some gifs'
                    onChangeText={(values) => setSearch(values)}
                    value={search}
                    onFocus={()=> setFocus(true)}
                    leftIcon = {search.length >0 || focus?
                      <Ionicons name="arrow-back" size={25} color="#000"
                      onPress={() => {
                        setFocus(false);
                        setSearch('');
                      }} />:
                    <Ionicons name="search" size={25} color="#000"/>}
                    inputContainerStyle = {{
                      paddingHorizontal : 6,
                      borderBottomWidth : 0,
                      marginTop : 10,
                      
                      height : 50,
                    }}
                    inputStyle={{
                      backgroundColor : "#e6eaf0",
                      borderRadius: 20,
                      paddingLeft : 20,
                    }}
            />
    
          {!focus && search.length==0 &&
          
            <Trending navigation={navigation}/>
          
          }  
          {focus && search.length === 0 && <TrendingResults setSearch={setSearch} navigation={navigation}/> }
          {focus && search.length > 0 && <SearchSuggestion currentSearchValue={search} navigation={navigation}/>}
        </View>
        </TrendingProvider>
        </TouchableWithoutFeedback>
    )
}

export default function SearchScreen() {
    const SearchStack = createStackNavigator();
  return (
    <SearchStack.Navigator initialRouteName="SearchMain">
      <SearchStack.Screen name = "SearchMain" component={Search}
      options={{
        headerShown : false 
      }}/>
      <SearchStack.Screen name="SearchFinalResults" component={SearchFinalResults}/>
      <SearchStack.Screen name="Gif" component={Gifs}/>
    </SearchStack.Navigator>
  )
}
