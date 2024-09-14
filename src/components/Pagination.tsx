'use client';

import { useEffect, useState } from 'react';

export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}: {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (value: number) => void;
}) {
  const [currentPages, setCurrentPages] = useState<number[]>([]);

  useEffect(() => {
    let startPageNum = Math.max(1, currentPage - 1);
    let endPageNum = Math.min(totalPages, startPageNum + 2);

    if (endPageNum - startPageNum < 2) {
      startPageNum = Math.max(1, endPageNum - 2);
    }

    const pages: number[] = [];

    for (let i = startPageNum; i <= endPageNum; i++) {
      pages.push(i);
    }
    setCurrentPages(pages);
  }, [currentPage]);

  return (
    <div className='flex gap-[10px] items-center justify-center'>
      <button
        onClick={() => setCurrentPage(1)}
        disabled={currentPage === 1}
        className='w-[35px] h-[35px] flex justify-center hover:bg-neutral rounded-full text-2xl pointer'
      >
        «
      </button>
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className='w-[35px] h-[35px] flex justify-center hover:bg-neutral rounded-full text-2xl pointer'
      >
        ‹
      </button>
      {currentPages.map((pageNum) => (
        <button
          key={pageNum}
          className={`w-[35px] h-[35px] flex justify-center items-center rounded-full ${
            currentPage === pageNum ? 'bg-red' : 'hover:bg-neutral'
          }`}
          onClick={() => setCurrentPage(pageNum)}
        >
          {pageNum}
        </button>
      ))}
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className='w-[35px] h-[35px] flex justify-center hover:bg-neutral rounded-full text-2xl pointer'
      >
        ›
      </button>
      <button
        onClick={() => setCurrentPage(totalPages)}
        disabled={currentPage === totalPages}
        className='w-[35px] h-[35px] flex justify-center hover:bg-neutral rounded-full text-2xl pointer'
      >
        »
      </button>
    </div>
  );
}
