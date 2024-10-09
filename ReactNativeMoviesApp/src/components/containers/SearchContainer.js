import React, { useState } from 'react';
import { Center, Text, Image, ScrollView, View, Box, HStack, VStack, Button } from "@gluestack-ui/themed";
import SearchForm from '../forms/SearchForm';
import { useNavigation } from '@react-navigation/native';
import { fetchSearchResults } from '../../services/api';
 
 


const SearchContainer = () => {
    const [movie, setMovie] = useState('');
    const [searchType, setSearchType] = useState(''); 
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');
    const navigation = useNavigation();

    const handleSearch = () => {
        
        fetchSearchResults(movie, searchType, setResults, setError);
    };

    const handleInputChange = (result) => {
        setMovie(result);
    };

    const handleMoreDetails = (result) => {
        navigation.navigate('MoreDetailsScreen', { item: result, type: result.media_type });
      };

    return (
        <View mt={10}>
            
            {error && <Text color="red">{error}</Text>}
            
            {/* Search Form */}
            <SearchForm
                movie={movie}
                setMovie={setMovie}
                searchType={searchType}
                setSearchType={setSearchType}
                onInputChange={handleInputChange}
                onSubmit={handleSearch}
            />
            

           

           

            <ScrollView>
                {results.length > 0 ? (
                    
                    results.map((result) => (
                        
                        <View key={result.id} my={5}>
                            <Box ml={10} width={250} mb={10}>
                            <HStack>
                            
                            <Image
                                source={{ uri: `https://image.tmdb.org/t/p/w500${result.poster_path}` }} 
                                alt={`${result.title || result.name} Poster`}
                                width={100}
                                height={110}
                                style={{ marginBottom: 10 }}
                            />

                            <VStack ml={20} mb={10}>
                            
                            <Text fontSize="lg" fontWeight="bold">
                                {result.title || result.name}
                            </Text>
                            
                            <Text>Popularity: {result.popularity}</Text>
                           
                            <Text>Release Date: {result.release_date || 'not found'}</Text>

                            <Button
                        
                        onPress={() => handleMoreDetails(result)}  
                      ><Text color='white' >More Details</Text>
                        
                      </Button>
                            </VStack>
                        </HStack>
                        </Box>
                        </View>
                    ))
                ) : (
                    !error && <Text style={{textAlign: 'center' , fontSize: '22'}}>Please initiate a search.</Text>
                )}
            </ScrollView>
        </View>
    );
};

export default SearchContainer;