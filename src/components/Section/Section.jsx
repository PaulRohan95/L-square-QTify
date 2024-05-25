import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';
import styles from './Section.module.css';

const Section = () => {
    const [albums, setAlbums] = useState([]);
    const [carouselToggle, setCarouselToggle] = useState(true);

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
    }, []);

    const toggleCollapse = () => {
        setCarouselToggle(!carouselToggle);
    };

//     return (
//         <div className={styles.sectionContainer}>
//             <div className={styles.header}>
//                 <h1>Top Albums</h1>
//                 <h4 className={styles.toggleText} onClick={toggleCollapse}>
//                     {carouselToggle ? "Show all" : "Collapse"}
//                 </h4>
//             </div>
//             {albums.length ? (
//                 <div className={styles.cardWrapper}>
//                     {carouselToggle ? (
//                             <Carousel data={albums} renderCardComponent={(item) => <Card key={item.id} album={item} />} />
//                     ) : (     
//                         <div className={styles.albumGrid}>
//                             {albums.map(album => (
//                                 <Card key={album.id} album={album} />
//                             ))}
//                         </div>
//                     )}
//                 </div>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// };

// export default Section;

return (
    <div className={styles.sectionContainer}>
        <div className={styles.header}>
            <h1>Top Albums</h1>
            <h4 className={styles.toggleText} onClick={toggleCollapse}>
                {carouselToggle ? "Show all" : "Collapse"}
            </h4>
        </div>
        {albums.length ? (
            <div className={styles.cardWrapper}>
                {!carouselToggle ? (
                    <div className={styles.albumGrid}>
                        {albums.map(album => (
                            <Card key={album.id} album={album} />
                        ))}
                    </div>
                ) : (
                    <div className={styles.carouselWrapper}>
                    <Carousel data={albums} renderCardComponent={(item) => <Card key={item.id} album={item} />} />
                </div>
            )}
            </div>
        ) : (
            <p>Loading...</p>
        )}
    </div>
);
};

export default Section;