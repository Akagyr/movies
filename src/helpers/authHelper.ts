import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';

import { auth } from '@/database/firebase';
import { addDBUser } from '@/database/databaseServices';
import { User } from '@/lib/types';

export const signInWithGoogle = async (): Promise<User | null> => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user: User = {
      uid: result.user.uid!,
      displayName: result.user.displayName!,
      email: result.user.email!,
      photoURL: result.user.photoURL!,
      role: 'user',
      favourites: [],
      seeLater: [],
    };
    await addDBUser({ user: user });
    sessionStorage.setItem('uid', user.uid);
    return user;
  } catch (error) {
    console.error('Error signing in with Google:', error);
    return null;
  }
};

export const signOutWithGoogle = async () => {
  try {
    await signOut(auth);
    sessionStorage.removeItem('uid');
  } catch (error) {
    console.error('Error signing out:', error);
  }
};
