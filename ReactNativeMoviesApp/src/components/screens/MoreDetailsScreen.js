

import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const MoreDetailsScreen = ({ route }) => {
  // Destructure the media object (movie, TV show, or search result) and type from the route params
  const { item, type } = route.params;


  const title = item.title || item.name; 
  const releaseDate = item.release_date || item.first_air_date; 
  

  if (!item) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
       <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 10, mb: 20, textAlign: 'center' }}>
        {title}
      </Text>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
        style={{ width: '100%', height: 300 }}
        resizeMode="cover"
      />
     
      <Text style={{ fontSize: 18, marginTop: 10  , marginBottom: 20}}>{item.overview}</Text>
      <Text style={{ fontSize: 15 }}>Release Date: {releaseDate} | | Popularity: {item.popularity}</Text>
      
    </ScrollView>
  );
};

export default MoreDetailsScreen;









