import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import styles from './Carousel.module.css';
import Card from '../Card/Card';
import LeftButton from './NavigationButton/LeftButton';
import RightButton from './NavigationButton/RightButton';
// import LeftArrow from '../../assets/LeftArrow.svg'
// import RightArrow from '../../assets/RightArrow.svg';
import { Navigation } from 'swiper/modules';

const Carousel = ({ items = [] }) => {
  return (
        // <div className={styles.carousel}>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
              640: {
                  slidesPerView: 5,
              },
              768: {
                  slidesPerView: 7,
              },
              1024: {
                  slidesPerView: 9,
              },
          }}
          navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
          }}
          modules={[Navigation]}
          className={styles.carousel}>
      <div className="swiper-button-prev">
        <LeftButton />
      </div>
      <div className="swiper-button-next">
        <RightButton />
      </div>
          {items.map((item) => (
              <SwiperSlide key={item.id}>
                  <Card album={item} />
              </SwiperSlide>
          ))}
      </Swiper>
        // </div>
  );
};

export default Carousel;