import React, {createContext, useEffect, useState} from 'react';
import {View, Text} from 'react-native';

export const TrendingContext = createContext();

export const TrendingProvider = ({children}) => {
  const [topSearches, setTopSearches] = useState([]);

  const apiurl =
    'https://api.giphy.com/v1/trending/searches?api_key=6RJ1SSQS5i1ms5A5uV0YX9S1E2d7JerU';
  const fetchdata = async () => {
    try {
      const result = await fetch(apiurl);
      const jsonResult = await result.json();
      setTopSearches(jsonResult.data);
      console.log(topSearches);
    } catch {
      (e) => console.log(e.message);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <TrendingContext.Provider value={{topResults: topSearches}}>
      {children}
    </TrendingContext.Provider>
  );
};
