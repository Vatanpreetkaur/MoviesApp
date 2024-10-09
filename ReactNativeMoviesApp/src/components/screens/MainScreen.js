import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Box, Text, StatusBar } from '@gluestack-ui/themed';
import MoviesContainer from '../containers/MoviesContainer'; 
import TVShowsContainer from '../containers/TVShowsContainer'; 
import SearchContainer from '../containers/SearchContainer'; 

const MainScreen = () => {
  const [selectedTab, setSelectedTab] = useState('Movies'); 

  // Render content based on selected tab
  const renderContent = () => {
    switch (selectedTab) {
      case 'Movies':
        return <MoviesContainer />;
      case 'Search':
        return <SearchContainer />;
      case 'TV Shows':
        return <TVShowsContainer />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style='light' bg='#2c3e50' />
      <Box bg='#2c3e50' alignItems="center" justifyContent="center" py={5}>
        <Text fontSize={20} fontWeight="bold" color="#fff">
          Movies App
        </Text>
      </Box>

      {/* Tab Navigation */}
      <Box flexDirection="row" justifyContent="space-around" bg="blue.500" py={2}>
        <Text
          color={selectedTab === 'Movies' ? 'blue' : 'gray.300'}
          onPress={() => setSelectedTab('Movies')}
          fontWeight="bold"
        >
          Movies
        </Text>
        <Text
          color={selectedTab === 'Search' ? 'blue' : 'gray.300'}
          onPress={() => setSelectedTab('Search')}
          fontWeight="bold"
        >
          Search
        </Text>
        <Text
          color={selectedTab === 'TV Shows' ? 'blue' : 'gray.300'}
          onPress={() => setSelectedTab('TV Shows')}
          fontWeight="bold"
        >
          TV Shows
        </Text>
      </Box>

      {/* Render the selected content */}
      <Box flex={1}>
        {renderContent()}
      </Box>
    </SafeAreaView>
  );
};

export default MainScreen;

