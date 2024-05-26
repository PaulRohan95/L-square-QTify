
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import axios from 'axios';
import styles from './Section.module.css';

const Section = () => {

    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [buttonText, setButtonText] = useState('Collapse');

    useEffect(() => {
        const fetchTopAlbums = async () => {
            try {
                const response = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
                setAlbums(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchTopAlbums();
    }, []);

    const toggleButtonText = () => {
        setButtonText(prevText => (prevText === 'Collapse' ? 'Show All' : 'Collapse'));
    };

    if (loading) {
        return <div>Loading...</div>
    } else if (error) {
        return (<div>Error: {error.message}</div>)
    }

    return (
        <div className={styles.gridContainer}>
            <div className={styles.gridTop}>
                <div className={styles.headerContainer}>
                    <h1>Top Albums</h1>
                    <button 
                        className={buttonText === 'Collapse' ? styles.buttonCollapse : styles.buttonShowAll}
                        onClick={toggleButtonText}>{buttonText}</button>
                    <div className={styles.albumGrid}>
                        <div className={styles.albumGridOne}>
                          {albums.map((album) => (
                        <Card key={album.id} album={album} />
                    ))}  
                        </div>                       
                    </div> 
                </div>     
            </div>
            <div className={styles.gridNew}>
                </div>              
        </div>
    )
}

export default Section;