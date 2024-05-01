import Link from 'next/link';
import { signOutWithGoogle } from '@/helpers/authHelper';

export default function HeaderAccountMenu({
  setMenuShowValue,
  menuShowValue,
  userRole,
}: {
  setMenuShowValue: (value: 'hidden' | 'block') => void;
  menuShowValue: 'hidden' | 'block';
  userRole: 'user' | 'admin';
}) {
  return (
    <div
      onMouseLeave={() => setMenuShowValue('hidden')}
      className={`${menuShowValue} absolute top-[100%] w-[70%] py-[10px] text-center bg-[#141313]/80 backdrop-opacity-10 backdrop-invert rounded-lg text-sm`}
    >
      {userRole === 'admin' && (
        <>
          <Link
            href='admin'
            className='block p-[10px] w-full font-bold text-gray-200 hover:text-red-600 duration-150'
          >
            Админ панель
          </Link>
          <hr className='w-[70%] border-red-600 mx-auto my-[5px]' />
        </>
      )}
      <button
        onClick={() => signOutWithGoogle()}
        className='p-[10px] w-full font-bold text-gray-200 hover:text-red-600 duration-150'
      >
        Выйти
      </button>
    </div>
  );
}
