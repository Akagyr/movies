import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';

import { auth } from '@/database/firebase';
import { addDBUser } from '@/database/databaseServices';
import { User } from '@/lib/types';

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider)
    .then((result) => {
      const user: User = {
        uid: result.user.uid!,
        displayName: result.user.displayName!,
        email: result.user.email!,
        photoURL: result.user.photoURL!,
        role: 'user',
        favourites: [],
        seeLater: [],
      };
      addDBUser({ user: user });
      sessionStorage.setItem('uid', user.uid);
    })
    .catch((error) => {
      console.error('Error signing in with Google:', error);
      return false;
    });
  return true;
};

export const signOutWithGoogle = async () => {
  try {
    await signOut(auth);
    sessionStorage.removeItem('uid');
  } catch (error) {
    console.error('Error signing out:', error);
  }
};
