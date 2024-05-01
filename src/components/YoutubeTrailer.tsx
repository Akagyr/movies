'use client';

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export default function YoutubeTrailer({ trailer, name }: { trailer: string; name: string }) {
  return (
    <div className='mt-20 max-w-[700px]'>
      <LiteYouTubeEmbed id={trailer} title={name} noCookie={true} />
    </div>
  );
}
