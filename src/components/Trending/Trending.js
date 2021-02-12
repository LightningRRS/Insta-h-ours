import React, { useState ,useEffect} from 'react'
import { View, Text, FlatList,StyleSheet ,Dimensions, Pressable} from 'react-native'
import {Image} from 'react-native-elements';

const Width = Dimensions.get('screen').width/3 - 5;
let Height = Dimensions.get('screen').height;

const Trending = ({navigation}) => {
    const [helper,setHelper] = useState([[],0,true]);
    
    // const [counter,setCounter] = useState(0)
    // const [loader,setLoader] = useState(true);

    useEffect(() => {
        let unmounted = false;
        const counter = helper[1];
        console.log("useffect");
        const apiurl = `http://api.giphy.com/v1/gifs/trending?api_key=6RJ1SSQS5i1ms5A5uV0YX9S1E2d7JerU&limit=12&offset=${counter}`;
        const trendfetch = async() => {
           
            const resultsdata = await (await fetch(apiurl)).json();
            
            const arr = helper[0].concat(resultsdata.data);
            console.log("fetched data--->",resultsdata.pagination.count," ",resultsdata.pagination.offset);
            if (!unmounted) setHelper([arr, helper[1], false]);
            return () => {
                unmounted = true;
              };
             
        };
        trendfetch();
        
    }, [helper[1]])

    return (
     <View >
        <FlatList
        data = {helper[0]}
        keyExtractor= {(item,index)=> item.id}
        horizontal = {false}
        numColumns = {3}
        showsVerticalScrollIndicator={false}
        contentContainerStyle = {{
                paddingTop : -30,
                paddingBottom : 2.3*Width,
                backgroundColor : "#fff",
                   
        }}
        ListFooterComponent= {
            helper[2] && (
                <View style={{alignSelf: 'center'}}>
                  <Image
                    source={require('../../../asset/Loading.gif')}
                    style={{width: 100, height: 100}}
                  />
                </View>
              )
        }
       
       onEndReachedThreshold={helper[2]==true?-1 : 0.01}
        onEndReached= {() => {
            console.log("End reach",helper[2]);
            
            if(helper[1] < 50)
            {
                setTimeout(() => {
                    setHelper([helper[0], helper[1] + 12, true]);
                  }, 1);
                
            }
        }}
        renderItem = {({item,index})=> {
                    
    return( 
        <Pressable style={{margin: 1, borderWidth: 0.7, borderColor: '#fff',
            }} 
            onPress={()=> {
                navigation.navigate("Gif",{
                    id : item.id
                })
            }}
            >
            <Image
             source={{uri: item.images.fixed_height_still.url}}
            style = {{width : Width, height: Width}}          
             PlaceholderContent = {
                <Image
                 source = { require('../../../asset/Loding.gif')}
                style = {{width : Width, height: Width}}
                />
                }
            />
         </Pressable>)
    }}
     />
    </View>
    )
}

export default Trending
