'use client';

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export default function YoutubeTrailer({ trailer, name }: { trailer: string; name: string }) {
  return (
    <div className='max-w-[850px] h-full aspect-video mx-auto'>
      <LiteYouTubeEmbed id={trailer} title={name} noCookie={true} />
    </div>
  );
}
