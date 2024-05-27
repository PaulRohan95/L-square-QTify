import React, { useEffect, useState } from 'react';
import Card from '../../Card/Card';
import axios from 'axios';
import styles from './TopAlbums.module.css';
import Carousel from '../../Carousel/Carousel';

const TopAlbums = () => {

    const [topAlbums, setTopAlbums] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [buttonText, setButtonText] = useState('Show All');
    const [showCarousel, setShowCarousel] = useState(true);

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
        setShowCarousel(!showCarousel);
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
                            onClick={toggleButtonText}>{buttonText}
                            {/* className={showCarousel ? styles.buttonShowAll : styles.buttonCollapse}
                            onClick={toggleView}>{showCarousel ? 'Show All' : 'Collapse'} */}
                        </button>
                        </h3>
                        {showCarousel ? (
                            <Carousel items={topAlbums} />
                        ) : (
                        <div className={styles.albumGrid}>
                            <div className={styles.albumGridTop}>
                            {topAlbums.map((album) => (
                            <Card key={album.id} album={album} />
                        ))}  
                            </div>                       
                        </div> 
                        )}
                    </div>     
                </div>             
            </div>       
    )
}

export default TopAlbums;