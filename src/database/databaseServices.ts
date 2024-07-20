import {
  doc,
  getDoc,
  setDoc,
  getDocs,
  Query,
  DocumentSnapshot,
  DocumentReference,
  DocumentData,
  updateDoc,
  arrayUnion,
} from 'firebase/firestore';
import { db } from '@/database/firebase';
import { Favourite, Movie, SeeLater, User } from '@/lib/types';

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

export async function getDBMovie(movieSlug: string) {
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
      await setDoc(doc(db, 'users', user.uid), user);
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

export async function updateDBMovieRating({
  movieSlug,
  rate,
  userSlug,
}: {
  movieSlug: string;
  rate: number;
  userSlug: string;
}) {
  try {
    const movie = await getDBMovie(movieSlug);
    if (movie) {
      const userRateIndex = movie.rates.findIndex((el) => el.userSlug === userSlug);
      if (userRateIndex === -1) {
        await updateDoc(doc(db, 'movies', movieSlug), {
          rates: arrayUnion({
            userSlug,
            rate,
          }),
        });
      } else {
        const rates = [...movie.rates];
        rates[userRateIndex].rate = rate;
        await updateDoc(doc(db, 'movies', movieSlug), {
          rates,
        });
      }
    }
  } catch (error) {
    console.error(`Error updating rating for movie with id - ${movieSlug}:`, error);
  }
}

export async function updateDBFavourites({
  userSlug,
  movieSlug,
}: {
  userSlug: string;
  movieSlug: string;
}) {
  try {
    const userDocRef = doc(db, 'users', userSlug);
    const userDocSnapshot = await getDoc(userDocRef);

    const newFavourite = {
      slug: movieSlug,
    } as Favourite;
    let updatedFavourites = [];

    if (userDocSnapshot.exists()) {
      const userData = userDocSnapshot.data() as User;
      if (userData.favourites && userData.favourites.length !== 0) {
        const currentFavourites = [...userData.favourites];
        const existingFavourite = currentFavourites.find(
          (fav: Favourite) => fav.slug === movieSlug
        );
        if (existingFavourite) {
          updatedFavourites = currentFavourites.filter((fav: Favourite) => fav.slug !== movieSlug);
        } else {
          updatedFavourites = [...currentFavourites, newFavourite];
        }
      } else {
        updatedFavourites.push(newFavourite);
      }

      await updateDoc(doc(db, 'users', userSlug), {
        favourites: updatedFavourites,
      });
    }
    return 'success';
  } catch (error) {
    console.error(`Error add favourite film to user with id - ${userSlug}:`, error);
    return 'failure';
  }
}

export async function updateDBSeeLater({
  userSlug,
  movieSlug,
}: {
  userSlug: string;
  movieSlug: string;
}) {
  try {
    const userDocRef = doc(db, 'users', userSlug);
    const userDocSnapshot = await getDoc(userDocRef);

    const newSeeLater = {
      slug: movieSlug,
    } as SeeLater;
    let updatedSeeLater = [];

    if (userDocSnapshot.exists()) {
      const userData = userDocSnapshot.data() as User;
      if (userData.seeLater && userData.seeLater.length !== 0) {
        const currentSeeLater = [...userData.seeLater];
        const existingSeeLater = currentSeeLater.find((sl: SeeLater) => sl.slug === movieSlug);
        if (existingSeeLater) {
          updatedSeeLater = currentSeeLater.filter((sl: SeeLater) => sl.slug !== movieSlug);
        } else {
          updatedSeeLater = [...currentSeeLater, newSeeLater];
        }
      } else {
        updatedSeeLater.push(newSeeLater);
      }

      await updateDoc(doc(db, 'users', userSlug), {
        seeLater: updatedSeeLater,
      });
    }
    return 'success';
  } catch (error) {
    console.error(`Error add see later film to user with id - ${userSlug}:`, error);
    return 'failure';
  }
}
