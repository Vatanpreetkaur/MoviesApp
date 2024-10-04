// MovieDetailScreen.js

import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const MovieDetailsScreen = ({ route }) => {
    const { movie } = route.params; 

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` }} // Use backdrop image or poster
                style={styles.image}
            />
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.releaseDate}>Release Date: {movie.release_date}</Text>
            <Text style={styles.popularity}>Popularity: {movie.popularity}</Text>
            <Text style={styles.description}>{movie.overview}</Text> {/* Movie description */}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 250,
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    releaseDate: {
        fontSize: 16,
        color: '#555',
    },
    popularity: {
        fontSize: 16,
        color: '#555',
    },
    description: {
        fontSize: 16,
        marginVertical: 10,
    },
});

export default MovieDetailsScreen;
