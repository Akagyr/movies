'use client';

import { getDBUser } from '@/database/databaseServices';
import { User } from '@/lib/types';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import { useRouter } from 'next/navigation';
import HeaderAccountMenu from './HeaderAccountMenu';

export default function HeaderAccount() {
  const [user, setUser] = useState<User | null>(null);
  const [menuShowValue, setMenuShowValue] = useState<'hidden' | 'block'>('hidden');
  const router = useRouter();

  useEffect(() => {
    const uid = sessionStorage.getItem('uid');
    if (uid) {
      getDBUser({ uid }).then((userData) => {
        setUser(userData);
      });
    }
  }, []);

  return (
    <>
      <div className='hidden lg:flex justify-end pr-10'>
        {user ? (
          <div
            className='flex justify-end relative w-full cursor-pointer'
            onMouseEnter={() => setMenuShowValue('block')}
          >
            <div className='flex items-center gap-[10px] justify-end'>
              <p className='text-white text-sm'>{user.displayName}</p>
              <Image
                className='rounded-full'
                src={user.photoURL!}
                alt='User image'
                width={45}
                height={45}
              />
            </div>
            <HeaderAccountMenu
              setMenuShowValue={setMenuShowValue}
              menuShowValue={menuShowValue}
              userRole={user.role!}
            />
          </div>
        ) : (
          <button
            onClick={() => router.push('auth')}
            className='text-red-600 border border-red-600 font-semibold text-sm rounded-lg px-4 py-2 text-center hover:bg-red-700 hover:border-red-700 hover:text-white hidden lg:block transition duration-300 ease-in-out'
          >
            Войти
          </button>
        )}
      </div>
      <div className='lg:hidden justify-self-end w-[30px] h-[30px]'>
        <Image src='/burger.svg' width={48} height={48} alt='Mobile burger' />
      </div>
    </>
  );
}
