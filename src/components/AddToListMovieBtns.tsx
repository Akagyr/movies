import React from 'react';
import SeeLaterButton from './SeeLaterButton';
import FavouriteButton from './FavouriteButton';

export default function AddToListMovieBtns({ movieSlug }: { movieSlug: string }) {
  return (
    <div className='flex flex-col gap-[10px] w-full'>
      <FavouriteButton type={'button'} text='Избранное' movieSlug={movieSlug} />
      <SeeLaterButton type={'button'} text='Cмотреть позже' movieSlug={movieSlug} />
    </div>
  );
}
