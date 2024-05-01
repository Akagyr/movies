import {
  doc,
  getDoc,
  setDoc,
  getDocs,
  Query,
  DocumentSnapshot,
  DocumentReference,
  DocumentData,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Movie, User } from '@/lib/types';

export async function getDBCollection(collection: Query<DocumentData, DocumentData>) {
  try {
    const querySnapshot = await getDocs(collection);
    const data = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
    return data;
  } catch (error) {
    console.error('Error getting selected documents:', error);
    return null;
  }
}

export async function getDBElement(collection: DocumentReference<DocumentData, DocumentData>) {
  try {
    const document: DocumentSnapshot<DocumentData> = await getDoc(collection);
    const docData = document.data();
    return docData;
  } catch (error) {
    console.error('Error getting selected document:', error);
    return null;
  }
}

export async function getDBMovie({ movieSlug }: { movieSlug: string }) {
  try {
    const docRef = doc(db, 'movies', `${movieSlug}`);
    const docSnap = await getDoc(docRef);
    const movie = docSnap.data() as Movie;

    return movie;
  } catch (error) {
    console.error(`Error fetch movie with id - ${movieSlug}:`, error);
  }
}

export async function addDBUser({ user }: { user: User }) {
  try {
    const dbUser = await getDBUser({ uid: user.uid });
    if (!dbUser) {
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        role: 'user',
      });
    }
  } catch (error) {
    console.error(`Error add user with id - ${user.uid}:`, error);
  }
}

export async function getDBUser({ uid }: { uid: string }) {
  try {
    const docSnap: DocumentSnapshot<DocumentData> = await getDoc(doc(db, 'users', `${uid}`));
    const user = docSnap.data() as User;
    return user;
  } catch (error) {
    console.error(`Error get user with id - ${uid}:`, error);
    return null;
  }
}

export async function deleteDBMovie({ slug }: { slug: string }) {
  try {
    await deleteDoc(doc(db, 'movies', slug));
  } catch (error) {
    console.error(`Error delete movie with id - ${slug}:`, error);
    return null;
  }
}

export async function addDBMovie({ movie }: { movie: Movie }) {
  try {
    const dbMovie = await getDBElement(doc(db, 'movies', movie.slug));
    if (!dbMovie) {
      await setDoc(doc(db, 'movies', movie.slug), movie);
    }
  } catch (error) {
    console.error('Error add user with this id', error);
  }
}

export async function updateDBMovie({ movieData }: { movieData: Movie }) {
  try {
    await updateDoc(doc(db, 'movies', movieData.slug), movieData );
  } catch (error) {
    console.error(`Error add user with id - ${movieData.slug}:`, error);
  }
}
