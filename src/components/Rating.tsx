'use client';

import { updateDBMovieRating } from '@/database/databaseServices';
import useGetCurrentUser from '@/hooks/useGetCurrentUser';
import { Rating as ReactRating, RoundedStar, ItemStyles } from '@smastrom/react-rating';
import { useState, useEffect } from 'react';

export function Rating({
  movieSlug,
  rating,
  readOnly = false,
  maxWidth = 90,
  itemsCount = 5,
  isDisabled = false,
}: {
  movieSlug?: string;
  rating: number;
  readOnly?: boolean;
  maxWidth?: number;
  itemsCount?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  isDisabled?: boolean;
}) {
  const [currentRating, setCurrentRating] = useState<number>(0);
  const user = useGetCurrentUser();

  useEffect(() => {
    setCurrentRating(rating);
  }, [rating]);

  const myStyles: ItemStyles = {
    itemShapes: RoundedStar,
    activeFillColor: '#FDE047',
    inactiveFillColor: '#fff',
  };

  const updateRaiting = async (currentRate: number) => {
    if (user) {
      try {
        await updateDBMovieRating({
          movieSlug: movieSlug!,
          rate: currentRate,
          userSlug: user.uid,
        });
        setCurrentRating(currentRate);
        return alert('Success');
      } catch (error) {
        alert('Error');
        return console.log(error);
      }
    }
    return alert('Please login!');
  };

  return (
    <ReactRating
      style={{ maxWidth: maxWidth }}
      itemStyles={myStyles}
      value={itemsCount === 5 ? currentRating / 2 : currentRating}
      onChange={updateRaiting}
      readOnly={readOnly}
      items={itemsCount}
      isDisabled={isDisabled}
    />
  );
}
