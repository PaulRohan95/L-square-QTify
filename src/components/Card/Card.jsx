import React from 'react';
import Chip from '@mui/material/Chip';
import styles from './Card.module.css';


    const Card = ({ album }) => {
        return (
            <div className={styles.cardFrame}> 
                <div className={styles.rect}>
                    <img src={album.image} alt={album.title} className={styles.cardImage} />
                    <Chip
                        sx={{ width: "auto" }} 
                        size='medium' 
                        label={`${album.follows} Follows`} 
                        className={styles.chipDesign} 
                        />
                </div>
                <div className={styles.cardContent}>
                    <p>{album.title}</p>
                </div>
            </div>
        )
    }

export default Card;