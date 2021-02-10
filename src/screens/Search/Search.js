import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native';
import { Input } from 'react-native-elements';
import Trending from '../../components/Trending/Trending';



export default function Search() {
    const [search ,setSearch] = useState('');

    

    return (
        <View>
            <Input
                    rightIcon = {{type : 'Feather', name: 'search'}}
                    placeholder = 'Time to see some gifs'
                    onChangeText={() => setSearch(value)}
                    value={search}
            />
          {search.length==0 && 
          <View>
            <Trending/>
          </View>    
          }  
        </View>
    )
}
