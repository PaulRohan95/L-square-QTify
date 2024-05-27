import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Tabs, Tab } from '@mui/material';
import Carousel from '../../Carousel/Carousel';
import styles from './Songs.module.css';

const Songs = () => {
    const [songs, setSongs] = useState([]);
    const [genres, setGenres] = useState([]);
    const [filteredSongs, setFilteredSongs] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('All');

    useEffect(() => {
        // Fetch songs data
        axios.get('https://qtify-backend-labs.crio.do/songs')
            .then(response => {
                setSongs(response.data);
                setFilteredSongs(response.data);
            })
            .catch(error => console.error('Error fetching songs:', error));

        // Fetch genres data
        axios.get('https://qtify-backend-labs.crio.do/genres')
            .then(response => setGenres(['All', ...response.data]))
            .catch(error => console.error('Error fetching genres:', error));
    }, []);

    const handleTabChange = (event, newValue) => {
        setSelectedGenre(newValue);
        if (newValue === 'All') {
            setFilteredSongs(songs);
        } else {
            setFilteredSongs(songs.filter(song => song.genre === newValue));
        }
    };

    return (
        <div className={styles.songContainer}>
            <div className={styles.songSection}>
            <h2>Songs</h2>
            <div className={styles.tabs} />
            <div className={styles.cardGrid}>
                 <Tabs value={selectedGenre} onChange={handleTabChange}>
                {genres.map(genre => (
                    <Tab key={genre} label={genre} value={genre} />
                ))}
            </Tabs>
            <Carousel items={filteredSongs} type="songs" />
            </div>

            </div>
        </div>
    );
};

export default Songs;
