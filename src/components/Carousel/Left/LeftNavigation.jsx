import React, { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import styles from '../Carousel.module.css';
import { ReactComponent as LeftArrow } from "../../../assets/LeftArrow.svg";

function LeftNavigation() {
  const swiper = useSwiper();
  const [begin, setBegin] = useState(true);

  useEffect(() => {
    swiper.on("slidechange", () => {
        setBegin(swiper.isBeginning);
    });
  }, [swiper]);

  return (
    <div className={styles.left}>
        {!begin && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
  )
}

export default LeftNavigation;