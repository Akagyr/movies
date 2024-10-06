'use client';

import { updateDBSeeLater } from '@/database/databaseServices';
import useGetCurrentUser from '@/hooks/useGetCurrentUser';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import SeeLaterIcon from './SeeLaterIcon';

export default function SeeLaterButton({
  movieSlug,
  updateSeeLater,
  type = 'icon',
  text = 'button',
}: {
  movieSlug: string;
  updateSeeLater?: (movieSlug: string) => void;
  type: 'icon' | 'button';
  text?: string;
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
        <SeeLaterIcon isActive={isActive} />
      ) : (
        <>
          <SeeLaterIcon isActive={isActive} />
          <span className='text-[13px]'>{`${isActive ? 'Удалить с ' : 'Добавить в '}` + text}</span>
        </>
      )}
    </button>
  );
}
