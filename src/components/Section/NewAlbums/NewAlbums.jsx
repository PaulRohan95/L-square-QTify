import React, { useEffect, useState } from 'react';
import Card from '../../Card/Card';
import axios from 'axios';
import styles from './NewAlbums.module.css';
import Carousel from '../../Carousel/Carousel';

const NewAlbums = () => {

    const [newAlbums, setNewAlbums] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // const [buttonText, setButtonText] = useState('Collapse');
    const [showCarousel, setShowCarousel] = useState(false);

    useEffect(() => {
        const fetchNewAlbums = async () => {
            try {
                const resNew = await axios.get('https://qtify-backend-labs.crio.do/albums/new');
                setNewAlbums(resNew.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchNewAlbums();
    }, []);

    // const toggleButtonText = () => {
    //     setButtonText(prevText => (prevText === 'Collapse' ? 'Show All' : 'Collapse'));
    // };
    
    const toggleView = () => {
        setShowCarousel(prevState => !prevState);
    }

    if (loading) {
        return <div>Loading...</div>
    } else if (error) {
        return (<div>Error: {error.message}</div>)
    }

    return (
            <div className={styles.newAlbumsContainer}>
                <div className={styles.gridNew}>
                    <div className={styles.container}>
                        <h3>New Albums
                            <button
                                // className={buttonText === 'Collapse' ? styles.buttonContract : styles.buttonExpand}
                                // onClick={toggleButtonText}>{buttonText}
                                className={showCarousel ? styles.buttonExpand : styles.buttonContract}
                                onClick={toggleView}>{showCarousel ? 'Show All' : 'Collapse'}
                                </button>
                        </h3>
                        {showCarousel ? (
                            <Carousel items={newAlbums}/>
                        ) : (
                        <div className={styles.albumGrid}>
                            <div className={styles.albumGridNew}>
                                {newAlbums.map((album) => (
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

export default NewAlbums;