'use client';

import { updateDBSeeLater } from '@/database/databaseServices';
import useGetCurrentUser from '@/hooks/useGetCurrentUser';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function SeeLaterIcon({
  movieSlug,
  updateSeeLater,
}: {
  movieSlug: string;
  updateSeeLater?: (movieSlug: string) => void;
}) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const currentUser = useGetCurrentUser();

  useEffect(() => {
    if (currentUser && currentUser.seeLater!.some((sl) => sl.slug === movieSlug)) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [currentUser]);

  const handleClick = async () => {
    if (currentUser) {
      const queryStatus = await updateDBSeeLater({ userSlug: currentUser.slug!, movieSlug });
      if (queryStatus === 'success') {
        setIsActive(!isActive);
        updateSeeLater && isActive && updateSeeLater(movieSlug);
        toast.success(isActive ? 'Удалено из смотреть позже' : 'Добавлено в смотреть позже');
      } else {
        toast.error('Ошибка сервера, попробуйте позже!');
      }
    } else {
      toast.warning('Вы не вошли в аккаунт!');
    }
  };

  return (
    <button onClick={() => handleClick()}>
      <svg
        className={`${isActive ? 'fill-red-ligther' : 'fill-white'} transition-colors duration-300`}
        xmlns='http://www.w3.org/2000/svg'
        x='0px'
        y='0px'
        width='20'
        height='20'
        viewBox='0 0 50 50'
      >
        <path d='M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M25,28c-0.462,0-0.895-0.113-1.286-0.3 l-6.007,6.007C17.512,33.902,17.256,34,17,34s-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l6.007-6.007 C22.113,25.895,22,25.462,22,25c0-1.304,0.837-2.403,2-2.816V8c0-0.553,0.447-1,1-1s1,0.447,1,1v14.184c1.163,0.413,2,1.512,2,2.816 C28,26.657,26.657,28,25,28z'></path>
      </svg>
    </button>
  );
}
