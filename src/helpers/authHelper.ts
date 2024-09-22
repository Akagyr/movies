import { signInWithPopup, GoogleAuthProvider, signOut, setPersistence, browserSessionPersistence } from 'firebase/auth';

import { auth } from '@/database/firebase';
import { addDBUser } from '@/database/databaseServices';
import { User } from '@/lib/types';
import { createSlug } from './createSlugHelper';

export const signInWithGoogle = async (): Promise<User | null> => {
  await setPersistence(auth, browserSessionPersistence);
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const slug = createSlug(`${result.user.displayName}-${result.user.uid}`);
    const user: User = {
      slug: slug,
      name: result.user.displayName!,
      email: result.user.email!,
      photo: result.user.photoURL!,
      role: 'user',
      favourites: [],
      seeLater: [],
    };
    await addDBUser({ user: user });
    return user;
  } catch (error) {
    console.error('Error signing in with Google:', error);
    return null;
  }
};

export const signOutWithGoogle = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Error signing out:', error);
  }
};
