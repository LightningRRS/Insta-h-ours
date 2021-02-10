import React, { useState ,useEffect} from 'react'
import { View, Text, FlatList,StyleSheet } from 'react-native'
import {Image} from 'react-native-elements';

const Trending = () => {
    const [trend,setTrend] = useState([]);
    useEffect(() => {
        const apiurl = 'http://api.giphy.com/v1/gifs/trending?api_key=6RJ1SSQS5i1ms5A5uV0YX9S1E2d7JerU&limit=10';
        const trendfetch = async() => {
            const resultsdata = await (await fetch(apiurl)).json() ;
            setTrend(resultsdata.data)
            
        }
        trendfetch();
        
    }, [])
    console.log(trend.length);
    return (
        <View >
            <FlatList
                data = {trend}
                keyExtractor= {(item)=> item.id}
                horizontal
                renderItem = {({item,index})=> {
                    
                   return( 
                        <Image
                        source={{uri: item.images.original.url}}
                            style = {{width : 100, height: 100}}
                            onError = {console.log("error")}
                            resizeMode = "cover"
                            PlaceholderContent = {
                                <Image
                                    source = { require('../../../asset/Loding.gif')}
                                    style = {{width: 100,height :100}}
                                />
                            }
                        />
                     )
                }}
            />
        </View>
    )
}

export default Trending
