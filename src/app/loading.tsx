import Image from 'next/image';

export default function Loading() {
  return (
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
      <Image
        className='text-[#fff] animate-[spin_7s_linear_infinite] bg-gradient-to-r from-[rgb(220,38,38)] to-[#4d0000] rounded-full p-5 w-[95px] mx-auto block'
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
