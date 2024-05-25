import React, { useEffect, useState } from 'react';
import { fetchTopAlbums, fetchNewAlbums, fetchAllSongs } from '../../api/api';
import styles from './HomePage.module.css';
import Toaster from 'react-hot-toast';
import styles from './HomePage.module.css';
import Hero from '../../components/Hero/Hero';
import Navbar from '../../components/Navbar/Navbar';
import SearchBar from '../../components/SearchBar/SearchBar';

function HomePage () {
    const [topAlbumData, setTopAlbumData] = useState([]);
    const [loading, setLoading] = useState({
        topAlbum: true,
    });
}

const manageLoadingState = (key = "", value = false) => {
    setLoadingState((prev) => ({ ...prev, [key]: value }))
};

const generateTopAlbumData = async () => {
    try {
        manageLoadingState("topAlbum", true);
        const data = await fetchTopAlbums();
        setTopAlbumData(data);
    } catch (error) {
        manageLoadingState("topAlbum", false)
        console.log("Error", error);
    }
}

useEffect(() => {
    generateTopAlbumData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

return (
    <>
        <NavBar />
        <SearchBar />
        <Hero />
        <div className={styles.sectionWrapper}>
				<Section
					title="Top Albums"
					data={topAlbumData}
					type="album"
					loadingState={loadingState.topAlbum}
				/>
            </div>

    </>
);


export default HomePage;