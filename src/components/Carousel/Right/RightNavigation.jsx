import React, { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import styles from '../Carousel.module.css';
import { ReactComponent as RightArrow } from '../../../assets/RightArrow.svg';

const RightNavigation = () => {
    const swiper = useSwiper();

    const [end, setEnd] = useState(swiper.isEnd);

    useEffect (() => {
        swiper.on('slideChange', () => {
            setEnd(swiper.isEnd);
        });
        		
    }, [swiper]);

    return (
        <div className={styles.rightNavigation}>
            {!end && <RightArrow onClick={() => swiper.slideNext()} />}
        </div>
    )
}

export default RightNavigation;