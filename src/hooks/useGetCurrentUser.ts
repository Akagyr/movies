import { getDBUser } from '@/database/databaseServices';
import { User } from '@/lib/types';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/database/firebase';

export default function useGetCurrentUser() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userData = (await getDBUser({ uid: user.uid })) as User;
        setCurrentUser(userData);
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return currentUser;
}
