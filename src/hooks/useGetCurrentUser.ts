import { getDBUser } from '@/database/databaseServices';
import { User } from '@/lib/types';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/database/firebase';
import { slugCreate } from '@/helpers/slugHelper';

export default function useGetCurrentUser() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const slug = slugCreate(`${user.displayName}-${user.uid}`);
        const userData = (await getDBUser({ slug })) as User;
        setCurrentUser(userData);
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return currentUser;
}
