'use client';

import Image from 'next/image';
import { signOutWithGoogle, signInWithGoogle } from '@/helpers/authHelper';
import useGetCurrentUser from '@/hooks/useGetCurrentUser';

export default function HeaderAccount() {
  const currentUser = useGetCurrentUser();

  const handleSignIn = async () => {
    await signInWithGoogle();
  };

  const handleSignOut = async () => {
    await signOutWithGoogle();
  };

  return (
    <div className='xl:flex justify-center h-[40px] lg:h-[45px]'>
      {currentUser ? (
        <div className='flex items-center gap-[10px] justify-end'>
          <p className='hidden xl:block text-sm'>{currentUser.name}</p>
          <Image
            className='rounded-full max-w-[40px] lg:max-w-[45px]'
            src={currentUser.photo!}
            alt='User image'
            width={45}
            height={45}
          />
          <button onClick={() => handleSignOut()}>
            <Image
              className='max-w-[20px] lg:max-w-[25px]'
              src='/exitDoor.svg'
              width={25}
              height={25}
              alt='Exit door'
            />
          </button>
        </div>
      ) : (
        <button
          onClick={() => handleSignIn()}
          className='px-[12px] lg:px-[20px] py-[10px] h-fit bg-red hover:bg-red-hover text-xs lg:text-sm font-semibold text-center rounded-lg transition duration-200 ease-in-out'
        >
          Войти
        </button>
      )}
    </div>
  );
}
