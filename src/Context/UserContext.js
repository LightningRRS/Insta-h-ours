import React,{createContext,useEffect,useState} from 'react';
import { View, Text } from 'react-native'



export const userContext = createContext();

export function userProvider (props) {
    
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
    
      console.log("From provider",pictures);
      

    return (
        <userContext.Provider value={{pictures}}>
            {props.children}
        </userContext.Provider>
    )
}


