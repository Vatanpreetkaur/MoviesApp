


import { View, Text, Image, Select, SelectTrigger, SelectInput, SelectIcon, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem, Icon, ChevronDownIcon ,Box, HStack, VStack, ScrollView, Button} from '@gluestack-ui/themed';
import React, { useState, useEffect } from 'react';
import {  fetchMovies } from '../../services/api';
import {BASE_URL, API_KEY} from '../../config/apiConfig'
// Adjust the import path as necessary

import axios from 'axios';
// Ensure API config is properly imported

const MoviesContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState('popular');
  const [movies, setMovies] = useState([]);

  // Fetch movies when a category is selected
  useEffect(() => {
    if (selectedCategory) {
        fetchMovies(selectedCategory, setMovies); // Pass setMovies here
    }
}, [selectedCategory]);

  
  return (
    <View mt={30}>
        

      <Select width="90%" mr={5} mb={30} onValueChange={(value) => setSelectedCategory(value)}>
        <SelectTrigger variant="outline" size="md"  ml={70}  mr={40}>
          <SelectInput placeholder="Select option" />
          <SelectIcon mr="$3">
            <Icon as={ChevronDownIcon} />
          </SelectIcon>
        </SelectTrigger>

        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>

            <SelectItem label={<Text>Now Playing</Text>} value="now_playing" />
            <SelectItem label={<Text>Popular</Text>} value="popular" />
            <SelectItem label={<Text>Top Rated</Text>} value="top_rated" />
            <SelectItem label={<Text>Upcoming</Text>} value="upcoming" />
          </SelectContent>
        </SelectPortal>
      </Select>

      {/* Display fetched movies */}
      {movies.length > 0 && (
        <ScrollView mt={5} style={{ height: 700 }}>
        <View mt={5}>
          {movies.map((movie) => (
            <View key={movie.id} mb={4}>
                <Box ml={10} width={250} mb={10}>
                <HStack>
                <Image 
                source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }} 
                alt={movie.title} 
                style={{ width: 100, height: 120 }} 
              />
              <VStack ml={20} mb={10}>
              <Text>Title: {movie.title}</Text>
              <Text>Popularity: {movie.popularity}</Text>
              <Text>Release Date: {movie.release_date}</Text>
              {/* <Button><Text color='white'>More Details</Text></Button> */}
              {/* <Button onPress={() => navigation.navigate('MovieDetails', { title: movie.title, movie })}> */}
              <Button 
              onPress={() => navigation.navigate('MovieDetailsScreen', { movie})}
>
  
        <Text color='white'>More Details</Text>
      </Button>
              
              </VStack>
              {/* Updated Image component to use 'source' prop */}
              </HStack>    
              </Box>
              
            </View>
          ))}
        </View>
        </ScrollView>
      )}
    </View>
  );
};

export default MoviesContainer;
