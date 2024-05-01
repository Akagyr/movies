'use client';

import { getDBUser } from '@/database/databaseServices';
import { User } from '@/lib/types';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const uid = sessionStorage.getItem('uid');
    if (!uid) {
      return router.push('auth');
    }
    const fetchUserAndCheckRole = async () => {
      const user = await getDBUser({ uid: uid! } as User);
      if (user && user.role !== 'admin') {
        return router.push('auth');
      }
    };
    fetchUserAndCheckRole();
  }, []);

  return (
    <div className='max-w-[100%] mx-4 md:max-w-[80%] md:mx-auto xl:max-w-[70%] 2xl:max-w-[50%] 2xl:mx-20'>
      {children}
    </div>
  );
}
