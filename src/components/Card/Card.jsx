import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Card.module.css';
import Chip from '@mui/material/Chip';


const Card = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        const fetchTopAlbums = async () => {
            try {
                const resTop = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
                setAlbums(resTop.data);
            } catch (error) {
                console.log('Error fetching data', error);
            }
        };
        fetchTopAlbums();
    }, [])


    const AlbumCard = ({ album }) => {
        return (
            <div className={styles.cardFrame}> 
                <div className={styles.rect1}>
                    <img src={album.image} alt={album.title} className={styles.cardImage} />
                    {/* <div className={styles.pill}>{album.follows} Follows</div> */}
                    <Chip label={`${album.follows} Follows`} className={styles.chip} />
                </div>
                <div className={styles.cardContent}>
                    <p>{album.title}</p>
                </div>
            </div>
        )
    }
    return (
        <div className={styles.gridContainer}>
            <div className={styles.gridTop}>
                   <h1>Top Albums</h1>
                <div className={styles.albumCards}>
                    {albums.map(album => (
                        <AlbumCard key = {album.id} album={album} />
                    ))}
                </div>   
            </div>
        </div>
    );

};

export default Card;