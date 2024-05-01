'use client';

import { signInWithGoogle } from '@/helpers/authHelper';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const router = useRouter();

  const handleSignInWithGoogle = async () => {
    const isAuth = await signInWithGoogle();
    if(isAuth) {
      router.back();
    }
  };

  return (
    <div className='w-[300px]'>
      <h1 className='mb-[30px]'>Виберите способ авторизации:</h1>
        <button
          onClick={() => handleSignInWithGoogle()}
          className='bg-white hover:bg-white/90 duration-200 p-[10px] rounded-lg text-sm text-black font-semibold flex gap-[10px] items-center'
        >
          <Image src='/google-logo.svg' width={25} height={25} alt='Google logo' /> Sing in with
          Google
        </button>
    </div>
  );
}
