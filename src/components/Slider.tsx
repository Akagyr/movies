'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Movie } from '@/lib/types';
import SlideCard from './SlideCard';

export default function Slider({
  latestMovies,
  popularMovies,
}: {
  latestMovies: Movie[];
  popularMovies: Movie[];
}) {
  const showLatestMoviesCards = latestMovies.map((movie: Movie) => <SlideCard key={movie.slug} movie={movie} />);
  const showPopularMoviesCards = popularMovies.map((movie: Movie) => <SlideCard key={movie.slug} movie={movie} />);

  return (
    <Swiper
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      effect={'fade'}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className='mySwiper'
    >
      <SwiperSlide>
        <div className='px-[50px] py-[30px] bg-gray rounded-xl'>
          <h2 className='mb-[20px] text-xl font-bold'>Топ новинок</h2>
          <div className='grid grid-cols-2 lg:grid-cols-5 gap-[20px] justify-items-center'>{showLatestMoviesCards}</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='px-[50px] py-[30px] bg-gray rounded-xl'>
          <h2 className='mb-[20px] text-xl font-bold'>Топ популярных</h2>
          <div className='grid grid-cols-2 lg:grid-cols-5 gap-[20px] justify-items-center'>{showPopularMoviesCards}</div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
