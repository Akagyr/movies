'use client';

import { updateDBFavourites } from '@/database/databaseServices';
import useGetCurrentUser from '@/hooks/useGetCurrentUser';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import FavouriteIcon from './FavouriteIcon';

export default function FavouriteButton({
  movieSlug,
  updateFavourites,
  type = 'icon',
  text = 'button',
}: {
  movieSlug: string;
  updateFavourites?: (movieSlug: string) => void;
  type: 'icon' | 'button';
  text?: string;
}) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const currentUser = useGetCurrentUser();

  useEffect(() => {
    if (currentUser && currentUser.favourites!.some((fav) => fav.slug === movieSlug)) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [currentUser]);

  const handleClick = async () => {
    if (currentUser) {
      const queryStatus = await updateDBFavourites({ userSlug: currentUser.slug!, movieSlug });
      if (queryStatus === 'success') {
        setIsActive(!isActive);
        updateFavourites && isActive && updateFavourites(movieSlug);
        toast.success(isActive ? 'Удалено из избранного' : 'Добавлено в избранное');
      } else {
        toast.error('Ошибка сервера, попробуйте позже!');
      }
    } else {
      toast.warning('Вы не вошли в аккаунт!');
    }
  };

  return (
    <button
      className={`${
        type !== 'icon'
          ? `flex gap-[7px] items-center border-[2px] ${
              isActive ? 'border-red' : 'border-white'
            } rounded-lg px-[10px] lg:px-[15px] py-[8px] lg:py-[10px] transition-colors duration-300`
          : ''
      }`}
      onClick={() => handleClick()}
    >
      {type === 'icon' ? (
        <FavouriteIcon isActive={isActive} />
      ) : (
        <>
          <FavouriteIcon isActive={isActive} />
          <span className='text-[13px]'>{`${isActive ? 'Удалить с ' : 'Добавить в '}` + text}</span>
        </>
      )}
    </button>
  );
}
