import Link from 'next/link';

export function LinkSidebar({ text, link }: { text: string; link: string }) {
  return (
    <Link
      href={link}
      className='block w-[60%] mx-auto px-1 py-2.5 rounded-lg hover:bg-red-hover font-medium text-sm cursor-pointer'
    >
      {text}
    </Link>
  );
}

export default function Sidebar() {
  return (
    <aside className='hidden h-full lg:flex flex-col gap-[10px] bg-gray text-center'>
      <LinkSidebar text='Домой' link='/' />
      <LinkSidebar text='Посмотреть позже' link='seeLater' />
      <LinkSidebar text='Понравившиеся' link='favourites' />
    </aside>
  );
}
