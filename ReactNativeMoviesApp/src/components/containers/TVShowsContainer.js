

import { View, Text, Image, Select, SelectTrigger, SelectInput, SelectIcon, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem, Icon, ChevronDownIcon, Box, HStack, VStack, ScrollView, Button } from '@gluestack-ui/themed';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY, fetchTvShows } from '../../services/api';


const TVShows = () => {
  const [selectedCategory, setSelectedCategory] = useState('popular'); // Default set to 'popular'
  const [tvShows, setTvShows] = useState([]);

  // Fetch TV shows when a category is selected
  useEffect(() => {
    if (selectedCategory) {
      fetchTvShows(selectedCategory, setTvShows);
    }
  }, [selectedCategory]);

  

  return (
    <View>
      <Select 
        width="70%" 
        mr={30} 
        ml={60} 
        mt={20} 
        mb={20} 
        onValueChange={(value) => setSelectedCategory(value)} 
        value={selectedCategory}
      >
        <SelectTrigger variant="outline" size="md">
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

            {/* Ensure correct category values are used here */}
            <SelectItem label={<Text>Airing Today</Text>} value="airing_today" />
            <SelectItem label={<Text>On the Air</Text>} value="on_the_air" />
            <SelectItem label={<Text>Popular</Text>} value="popular" />
            <SelectItem label={<Text>Top Rated</Text>} value="top_rated" />
          </SelectContent>
        </SelectPortal>
      </Select>

      {/* Display fetched TV shows */}
      {tvShows.length > 0 && (
        <ScrollView mt={5} style={{ height: 700 }}>
          {tvShows.map((show) => (
            <View key={show.id} mb={4}>
              <Box ml={10} width={250} mb={10}>
                <HStack>
                  <Image 
                    source={{ uri: `https://image.tmdb.org/t/p/w500${show.poster_path}` }} 
                    alt={show.name} 
                    style={{ width: 100, height: 150 }} 
                  />
                  <VStack ml={20} mb={10}>
                    <Text>Title: {show.name}</Text>
                    <Text>Popularity: {show.popularity}</Text>
                    <Text>First Air Date: {show.first_air_date}</Text>
                    <Button><Text color='white'>More Details</Text></Button> 
                  </VStack>
                </HStack>    
              </Box>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default TVShows;
