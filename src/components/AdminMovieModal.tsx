import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import AdminMovieForm from './AdminMovieForm';
import { Movie } from '@/lib/types';

export default function AdminMovieModal({
  movie,
  setMovies,
  isOpen,
  setIsOpen,
}: {
  movie?: Movie;
  setMovies: (value: Movie[]) => void;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) {
  return (
    <Modal
      open={isOpen}
      onClose={() => setIsOpen(false)}
      showCloseIcon={false}
      center
      styles={{
        modal: {
          padding: 0,
          background: '#100F12',
        },
      }}
      blockScroll={false}
    >
      <AdminMovieForm setIsOpenModal={setIsOpen} movie={movie} setMovies={setMovies} />
    </Modal>
  );
}
