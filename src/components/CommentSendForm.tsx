import { updateDBComments } from '@/database/databaseServices';
import { slugCreate } from '@/helpers/slugHelper';
import useGetCurrentUser from '@/hooks/useGetCurrentUser';
import { Comment } from '@/lib/types';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function CommentSendForm({
  setComments,
  movieSlug,
}: {
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
  movieSlug: string;
}) {
  const currentUser = useGetCurrentUser();
  const [commentText, setCommentText] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (currentUser && commentText.trim()) {
      const date: number = Date.now();
      const slug: string = slugCreate(`${currentUser.name}-${date}`);

      const newComment: Comment = {
        slug: slug,
        userSlug: currentUser.slug,
        userName: currentUser.name,
        userPhoto: currentUser.photo!,
        text: commentText.trim(),
        date_adding: date,
      };

      const responce = await updateDBComments({ movieSlug, comment: newComment });

      if (responce === 'success') {
        setComments((prevComments) => [newComment, ...prevComments]);
        setCommentText('');
      } else {
        toast.error('Ошибка отправки комментария');
      }
    } else {
      !currentUser && toast.warn('Ввойдите в аккаунт для отправки коментариев');
      !commentText.trim() && toast.warn('Нельзя отправить пустой комментарий!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='w-full rounded-lg bg-neutral'>
        <div className='size-full rounded-t-lg'>
          <textarea
            name='comment'
            rows={3}
            className='size-full p-[10px] text-sm bg-transparent resize-none rounded-t-lg'
            placeholder='Напишите комментарий...'
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
        </div>
        <div className='flex items-center justify-between p-[10px] border-t'>
          <button type='button' className='text-gray-500 rounded cursor-pointer text-2xl'>
            🙂
          </button>
          <button
            type='submit'
            className='py-[10px] px-[15px] text-xs font-medium bg-red rounded-lg hover:bg-red-hover transition-colors'
          >
            Отправить
          </button>
        </div>
      </div>
    </form>
  );
}
