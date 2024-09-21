'use client';

import CommentSendForm from '@/components/CommentSendForm';
import { Comment } from '@/lib/types';
import Image from 'next/image';
import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ru } from 'date-fns/locale';

export default function Comments({ comments, movieSlug }: { comments: Comment[], movieSlug:string }) {
  const [localComments, setLocalComments] = useState<Comment[]>(comments);

  const showComments = localComments?.map((cmt) => (
    <div key={cmt.slug} className='flex justify-between p-[10px] border border-neutral rounded-lg'>
      <div className='flex gap-[10px]'>
        <Image
          src={cmt.userPhoto}
          width={40}
          height={40}
          alt={cmt.userName}
          className='rounded-full h-fit'
        />
        <div key={cmt.slug} className='flex flex-col gap-[10px]'>
          <p>{cmt.userName}</p>
          <p>{cmt.text}</p>
        </div>
      </div>

      <span className='text-sm'>
        {formatDistanceToNow(new Date(cmt.date_adding), { addSuffix: true, locale: ru })}
      </span>
    </div>
  ));

  return (
    <div className='w-[600px] flex flex-col gap-[30px]'>
      <h2 className='text-lg font-bold'>Коментарии</h2>
      <CommentSendForm setComments={setLocalComments} movieSlug={movieSlug} />
      {!localComments || localComments.length === 0 ? (
        <p>Коментариев пока нет</p>
      ) : (
        <div className='flex flex-col gap-[30px]'>{showComments}</div>
      )}
    </div>
  );
}
