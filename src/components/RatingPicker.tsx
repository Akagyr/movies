'use client';

import { Rating } from '@/components/Rating';
import useGetCurrentUser from '@/hooks/useGetCurrentUser';
import { Rate } from '@/lib/types';
import { useEffect, useState } from 'react';

export default function RatingPicker({
  movieSlug,
  movieRates,
}: {
  movieSlug: string;
  movieRates: Rate[];
}) {
  const [rating, setRating] = useState<number>(0);
  const user = useGetCurrentUser();

  useEffect(() => {
    if (user) {
      const userRate = movieRates.find((rate) => rate.userSlug === user.slug);
      if (userRate) {
        setRating(userRate.rate);
      }
    }
  }, [user, movieRates]);

  return (
    <>
      <p className='text-sm lg:text-base mb-[5px]'>Ваша оценка:</p>
      <Rating rating={rating} maxWidth={260} itemsCount={10} movieSlug={movieSlug} />
    </>
  );
}
