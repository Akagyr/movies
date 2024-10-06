import { Comment } from '@/lib/types';
import { formatDistanceToNow } from 'date-fns';
import { ru } from 'date-fns/locale';
import Image from 'next/image';

export default function CommentsItem({ comment }: { comment: Comment }) {
  return (
    <div className='flex justify-between p-[10px] border border-neutral rounded-lg'>
      <div className='flex gap-[10px]'>
        <Image
          src={comment.userPhoto}
          width={40}
          height={40}
          alt={comment.userName}
          className='rounded-full h-fit'
        />
        <div key={comment.slug} className='flex flex-col gap-[10px]'>
          <p>{comment.userName}</p>
          <p>{comment.text}</p>
        </div>
      </div>

      <span className='text-sm'>
        {formatDistanceToNow(new Date(comment.date_adding), { addSuffix: true, locale: ru })}
      </span>
    </div>
  );
}
