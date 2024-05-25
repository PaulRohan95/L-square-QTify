import React, { useEffect } from 'react';
import styles from './Carousel.module.css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import LeftNavigation from './Left/LeftNavigation';
import RightNavigation from './Right/RightNavigation';


function Controls({ data }) {
    const { swiper } = useSwiper();

    useEffect(() => {
        swiper?.slideTo(0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data]);
    return<></>;
};


const Carousel = ({ data, renderCard }) => {
  return (
    <div className={styles.wrapper}>
        <Swiper
            initialSlide={0}
            modules={{ Navigation }}
            slidesPerView={"auto"}
            spaceBetween={10}
            allowTouchMove>
                <Controls data={data} />
                <LeftNavigation />
                <RightNavigation />
                {data?.map((item) => (
                    <SwiperSlide key={item?.id}>{renderCard(item)}</SwiperSlide>
                ))}
            </Swiper>
    </div>
  )
}

export default Carousel;

