import React from "react";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import swiperData from "./swiperData.json";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";

import styles from "./menuHero.module.scss";

const MenuHero = () => {
  return (
    <section className={styles.new_menu}>
      <Swiper
        className={styles.swiper}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        slidesPerView="auto"
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          476: {
            slidesPerView: 1.5,
          },
          640: {
            slidesPerView: 2,
          },
          786: {
            slidesPerView: 2.5,
          },
          967: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 3.5,
          },
        }}
        spaceBetween={50}
        pagination={{ clickable: true }}
      >
        {swiperData.map((item) => (
          <SwiperSlide className={styles.swiper_slide} key={item.name}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>
              {item.stucture} {item.grams}
            </p>
            <h3 className={styles.cost}>{item.cost}</h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MenuHero;
