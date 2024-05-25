import React, { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import styles from '../Carousel.module.css';
import { ReactComponent as LeftArrow } from '../../../assets/LeftArrow.svg';

const LeftNavigation = () => {
    const swiper = useSwiper();

    const [start, setStart] = useState(true);

    useEffect (() => {
        swiper.on('slideChange', () => {
            setStart(swiper.isBeginning);
        });
    }, [swiper]);

    return (
        <div className={styles.leftNavigation}>
            {!start && <LeftArrow onClick={() => swiper.slidePrev()} />}
        </div>
    )
}

export default LeftNavigation;