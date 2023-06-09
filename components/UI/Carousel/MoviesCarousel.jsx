"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Image from "next/image";
import Link from "next/link";

import { genres } from "@/constant/genres";

const swiperConfig = {
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: { slidesPerView: 4, spaceBetween: 40 },
    1024: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
  loop: true,
};

export default function MoviesCarousel({ movies }) {
  return (
    <>
      <Swiper {...swiperConfig}>
        {movies?.map((movie) => {
          return (
            <SwiperSlide className="w-full" key={movie.id}>
              <div>
                <Image
                  loading="lazy"
                  className="shadow rounded-xl"
                  src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                  alt={`${movie.title} - Poster`}
                  width={500}
                  height={700}
                />
                <div className="py-1">
                  <span className="mb-1 text-sm text-green-600 lg:text-base">
                    {new Date(movie.release_date).getFullYear()} /
                    {genres.map((genre) => {
                      if (genre.id === movie.genre_ids[0]) {
                        return <span key={genre.id}> {genre.name}</span>;
                      }
                    })}
                  </span>
                  <Link href={`/movie/${movie.id}`}>
                    <span className="block text-sm font-medium leading-snug duration-300 transform hover:text-green-600 lg:text-base text-white/80">
                      {movie.title}
                    </span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
