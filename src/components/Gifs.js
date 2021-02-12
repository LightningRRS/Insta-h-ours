import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { View, Text, ImageBackground, Dimensions, StyleSheet,Share} from 'react-native'
import { Image,Button } from 'react-native-elements';
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Height = Dimensions.get('screen').height;
const Width = Dimensions.get('screen').width - 20
const Gifs = ({navigation,route}) => {
    
    
    const {id} = route.params;
    const[gif,setGif] = useState([]);

    useEffect(() => {
        
        const apiurl = `http://api.giphy.com/v1/gifs/${id}?api_key=6RJ1SSQS5i1ms5A5uV0YX9S1E2d7JerU`;
        const fetchdata = async () => {
            const resultsdata = await (await fetch(apiurl)).json();
            
            setGif(resultsdata.data);
            
        }
        fetchdata();
    },[])
   
    return (
        <View style={{width: "100%",height : "99%"}}>
            {gif.length!=0 && 
            <ImageBackground source={{uri : gif.images.fixed_width_still.url}} 
            style={{resizeMode : "cover",flex : 1,blurRadius : 200,paddingHorizontal: 7}}
            imageStyle={{ opacity : 0.5}}
            >
                <Text style={{fontSize : 30,fontWeight: '600',alignSelf:'center',
                marginBottom : 10,}}>
                    {gif.title}
                </Text>
                <Image
                    source= {{uri : gif.images.original.url}}
                    resizeMode="contain"
                    style={{height : "70%"}}
                    imageStyle={{borderWidth : 2, borderColor: "white"}}
                    PlaceholderContent={
                        <Image
                            source = {require('../../asset/nice.gif')}
                            resizeMode= "contain"
                            style={{height : Width,width: Width}}
                        />
                    }
                />
                
           <Button
           onPress={() => {
             Share.share(
               {
                 title:
                   'Share Amazing Gifs with the Giphy app by moksh and rishi',
                 url: gif.images.original.url,
                 message: `Wow, did you see that ${gif.title} ,Check it out here-->
                 ${gif.images.original.url}`,
               },
               {
                 // Android only:
                 dialogTitle: 'Share BAM goodness',
                 // iOS only:
                 excludedActivityTypes: [
                   'com.apple.UIKit.activity.PostToTwitter',
                 ],
               },
             );
           }}
           title="Share"
           titleStyle={{fontWeight: 'bold', width: '80%', color: '#f2f2f2',fontSize:19}}
           iconRight={true}
           icon={{type: 'FontAwesome', name: 'share', size: 25, color: '#000'}}
         />
            </ImageBackground>}
          {gif.length==0 && 
          <View style={{justifyContent:'center',width:"100%",height:"100%",alignItems:'center'}}>
          <Image
            source={require('../../asset/snake.gif')}
            style={{type: 'FontAwesome', name: 'share', size: 25, color: '#000'}}
          />
          </View>
        }  
        </View>
    )
}

export default Gifs
