import React, { useEffect, useState } from 'react';
import Card from '../../Card/Card';
import axios from 'axios';
import styles from './TopAlbums.module.css';

const TopAlbums = () => {

    const [topAlbums, setTopAlbums] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [buttonText, setButtonText] = useState('Collapse');

    useEffect(() => {
        const fetchTopAlbums = async () => {
            try {
                const resTop = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
                setTopAlbums(resTop.data);
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
            <div className={styles.albumsContainer}>
                <div className={styles.gridTop}> 
                    <div className={styles.container}>
                        <h3>Top Albums
                        <button 
                            className={buttonText === 'Collapse' ? styles.buttonCollapse : styles.buttonShowAll}
                            onClick={toggleButtonText}>{buttonText}</button>
                        </h3>
                        <div className={styles.albumGrid}>
                            <div className={styles.albumGridTop}>
                            {topAlbums.map((album) => (
                            <Card key={album.id} album={album} />
                        ))}  
                            </div>                       
                        </div> 
                    </div>     
                </div>             
            </div>       
    )
}

export default TopAlbums;