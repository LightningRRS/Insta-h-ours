import React, { useEffect, useState } from 'react'
import { View, Text ,ScrollView } from 'react-native';
import { Input, SearchBar } from 'react-native-elements';
import Trending from '../../components/Trending/Trending';



export default function Search() {
    const [search ,setSearch] = useState('');
    
    trendarray = [] ;

    return (
        <View>
            <SearchBar
                    placeholder = 'Time to see some gifs'
                    onChangeText={(values) => setSearch(values)}
                    value={search}
            />
    
          {search.length==0 && 
          <View>
            <Trending />
          </View>    
          }  
          
        </View>
        
    )
}
