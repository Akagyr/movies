'use client';
import { useRouter } from 'next/navigation';

export default function NotFound() {
    const router = useRouter();
  return (
    <main className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center'>
      <h2 className='text-4xl mb-1'>404</h2>
      <p className='text-md mb-6'>Странница не найдена</p>
      <button
        onClick={() => router.back()}
        className='rounded-md bg-red-700 px-4 py-2 text-sm text-white transition-colors hover:bg-red-800 size-fit'
      >
        Венуться обратно
      </button>
    </main>
  );
}
