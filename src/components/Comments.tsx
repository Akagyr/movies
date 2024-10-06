'use client';

import CommentSendForm from '@/components/CommentSendForm';
import { Comment } from '@/lib/types';
import { useState } from 'react';
import CommentsItem from './CommentsItem';

export default function Comments({
  comments,
  movieSlug,
}: {
  comments: Comment[];
  movieSlug: string;
}) {
  const [localComments, setLocalComments] = useState<Comment[]>(comments);

  const showComments = localComments?.map((cmt) => (
    <CommentsItem key={cmt.slug} comment={cmt} />
  ));

  return (
    <div className='w-full lg:w-[600px] flex flex-col gap-[30px]'>
      <div>
        <h2 className='text-lg font-bold mb-[10px]'>Коментарии</h2>
        <CommentSendForm setComments={setLocalComments} movieSlug={movieSlug} />
      </div>
      {!localComments || localComments.length === 0 ? (
        <p>Коментариев пока нет</p>
      ) : (
        <div className='flex flex-col gap-[30px]'>{showComments}</div>
      )}
    </div>
  );
}
