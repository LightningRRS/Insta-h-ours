import React,{createContext,useEffect,useState} from 'react';
import { View, Text } from 'react-native'



export const userContext = createContext();

export function userProvider (props) {
    
    const [pictures, setPictures] = useState([]);
    useEffect(() => {
        const apiurl = 'https://api.giphy.com/v1/gifs/trending?api_key=6RJ1SSQS5i1ms5A5uV0YX9S1E2d7JerU&limit=20&offset=60';
        const fetchdata = async () => {
          const result = await fetch(apiurl);
          const jsonResult = await result.json();
  
          setPictures(jsonResult.data);
          
        };
        fetchdata();
      }, []);
    
      console.log("From provider",pictures);
      

    return (
        <userContext.Provider value={{pictures}}>
            {props.children}
        </userContext.Provider>
    )
}


