import React, { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import styles from '../Carousel.module.css';
import { ReactComponent as RightArrow } from "../../../assets/LeftArrow.svg";

function RightNavigation() {
  const swiper = useSwiper();
  const [end, setEnd] = useState(true);

  useEffect(() => {
    swiper.on("slidechange", () => {
        setEnd(swiper.isEnd);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.right}>
        {!end && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  )
}

export default RightNavigation;