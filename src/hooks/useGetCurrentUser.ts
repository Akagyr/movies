import { getDBUser } from '@/database/databaseServices';
import { auth } from '@/database/firebase';
import { slugCreate } from '@/helpers/slugHelper';
import { User } from '@/lib/types';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function useGetCurrentUser() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const slug = slugCreate(`${user.displayName}-${user.uid}`);
        const userData = (await getDBUser({ slug })) as User;
        if (userData) {
          setCurrentUser(userData);
        } else {
          location.reload();
        }
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return currentUser;
}
