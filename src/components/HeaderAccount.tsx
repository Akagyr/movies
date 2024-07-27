'use client';

import Image from 'next/image';
import useGetCurrentUser from '@/hooks/useGetCurrentUser';
import { signOutWithGoogle, signInWithGoogle } from '@/helpers/authHelper';

export default function HeaderAccount() {
  const currentUser = useGetCurrentUser();

  const handleSignOut = async () => {
    await signOutWithGoogle();
  };

  const handleSignIn = async () => {
    await signInWithGoogle();
  };

  return (
    <div className='lg:flex justify-center'>
      {currentUser ? (
        <div className='flex items-center gap-[10px] justify-end'>
          <p className='hidden lg:block text-white text-sm'>{currentUser.displayName}</p>
          <Image
            className='rounded-full max-w-[40px] lg:max-w-[45px]'
            src={currentUser.photoURL!}
            alt='User image'
            width={45}
            height={45}
          />
          <button onClick={() => handleSignOut()}>
            <Image className='max-w-[20px] lg:max-w-[25px]' src='/exitDoor.svg' width={25} height={25} alt='Exit door' />
          </button>
        </div>
      ) : (
        <button
          onClick={() => handleSignIn()}
          className='text-red-600 border border-red-600 font-semibold text-xs lg:text-sm rounded-lg px-[12px] lg:px-[15px] py-[8px] lg:py-[10px] text-center hover:bg-red-700 hover:border-red-700 hover:text-white transition duration-200 ease-in-out'
        >
          Войти
        </button>
      )}
    </div>
  );
}
