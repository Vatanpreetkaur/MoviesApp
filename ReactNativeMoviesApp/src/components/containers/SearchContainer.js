
import React, { useState } from 'react';
import { Center, Text, Image, ScrollView, View, Box, HStack, VStack, Button } from "@gluestack-ui/themed";
import SearchForm from '../forms/SearchForm';
import { fetchSearchResults } from '../../services/api';
 
 


const SearchContainer = () => {
    const [movie, setMovie] = useState('');
    const [searchType, setSearchType] = useState('movie'); // Default search type is 'movie'
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    const handleSearch = () => {
        // Call the fetchMovies function
        fetchSearchResults(movie, searchType, setResults, setError);
    };

    const handleInputChange = (movie) => {
        setMovie(movie);
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
            

            {/* Render search results here */}

           

            <ScrollView>
                {results.length > 0 ? (
                    
                    results.map((result) => (
                        
                        <View key={result.id} my={5}>
                            <Box ml={10} width={250} mb={10}>
                            <HStack>
                            
                            <Image
                                source={{ uri: `https://image.tmdb.org/t/p/w500${result.poster_path}` }} // Poster URL from TMDb
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

                            <Button><Text color='white'>More Details</Text></Button>
                            </VStack>
                        </HStack>
                        </Box>
                        </View>
                    ))
                ) : (
                    !error && <Text>No results found. Try a different search.</Text>
                )}
            </ScrollView>
        </View>
    );
};

export default SearchContainer;

