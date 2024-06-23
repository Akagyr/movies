'use client';

import { updateDBFavourites } from '@/database/databaseServices';
import useGetCurrentUser from '@/hooks/useGetCurrentUser';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function FavouriteIcon({ movieSlug }: { movieSlug: string }) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const router = useRouter();
  const currentUser = useGetCurrentUser();

  useEffect(() => {
    if (currentUser && currentUser.favourites!.some(fav => fav.slug === movieSlug)) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [currentUser]);

  const handleClick = () => {
    const userId = sessionStorage.getItem('uid');
    if (userId) {
      updateDBFavourites({ userSlug: userId!, movieSlug });
      setIsActive(!isActive);
    } else {
      router.push('auth');
    }
  };

  return (
    <button onClick={() => handleClick()}>
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
