"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FreeMode } from "swiper";

const swiperConfig = {
  loop: true,
  freeMode: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
  },
};
export default function CreditCarousel({ credit }) {
  return (
    <Swiper {...swiperConfig} modules={[FreeMode]}>
      {credit.cast?.slice(0, 10).map((c) => {
        return (
          <SwiperSlide key={c.id}>
            <Image
              loading="lazy"
              className="rounded-xl"
              src={`https://image.tmdb.org/t/p/w342/${c.profile_path}`}
              alt={`${c.name} - Image`}
              width={200}
              height={200}
            />
            <span className="block mt-1 text-white/90">{c.name}</span>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
