import CustomInput from './custom/CustomInput';

export default function HeaderSearchForm() {
  return (
    <form className='hidden lg:flex px-10 col-span-4 items-center'>
      <div className='mr-5 w-[200px]'>
        <CustomInput name='name' placeholder='Имя' />
      </div>
      <div className='mr-5 w-[200px]'>
        <CustomInput name='category' placeholder='Жанр' />
      </div>
      <div className='mr-5 w-[100px]'>
        <CustomInput name='year' placeholder='Год' />
      </div>
      <button
        type='submit'
        className='text-white font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2 text-center bg-red-700 hover:bg-red-800'
      >
        Поиск
      </button>
    </form>
  );
}
