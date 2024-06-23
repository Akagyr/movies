import { getDBUser } from '@/database/databaseServices';
import { User } from '@/lib/types';
import { useEffect, useState } from 'react';

export default function useGetCurrentUser() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const userId = sessionStorage.getItem('uid');
      if (userId) {
        const userData = await getDBUser({ uid: userId }) as User;
        if (userData) {
          setCurrentUser(userData);
        }
      }
    };
    getUser();
  }, []);

  return currentUser;
}
