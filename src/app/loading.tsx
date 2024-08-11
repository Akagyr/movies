import Image from 'next/image';

export default function Loading() {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center z-50 bg-black bg-opacity-50'>
      <Image
        className='text-[#fff] animate-[spin_7s_linear_infinite] bg-gradient-to-r from-[rgb(220,38,38)] to-[#4d0000] rounded-full p-5 w-[20vw] max-w-[95px] min-w-[60px]'
        src='/loading.svg'
        width={24}
        height={24}
        alt='Loading image'
      />
      <div className='text-2xl text-[#fff] text-center mt-4 font-medium'>
        Movie.<span className='text-red-600'>Trailers</span>
      </div>
    </div>
  );
}
