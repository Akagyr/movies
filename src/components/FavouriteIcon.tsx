'use client';

import { updateDBFavourites } from '@/database/databaseServices';
import useGetCurrentUser from '@/hooks/useGetCurrentUser';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function FavouriteIcon({
  movieSlug,
  updateFavourites,
}: {
  movieSlug: string;
  updateFavourites?: (movieSlug: string) => void;
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
    <button onClick={handleClick}>
      <svg
        className={`${isActive ? 'fill-red-600' : 'fill-white'} transition-colors duration-300`}
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        viewBox='0 0 24 24'
      >
        <path d='M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z' />
      </svg>
    </button>
  );
}
