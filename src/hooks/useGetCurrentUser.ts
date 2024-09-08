import { getDBUser } from '@/database/databaseServices';
import { User } from '@/lib/types';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function useGetCurrentUser() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const slug = sessionStorage.getItem('loginAccess');
      if (slug) {
        try {
          const userData = (await getDBUser({ slug })) as User;
          setCurrentUser(userData);
        } catch (error) {
          toast.error('Error fetching user data');
          setCurrentUser(null);
        }
      } else {
        setCurrentUser(null);
      }
    };

    fetchUser();
  }, []);

  return currentUser;
}
