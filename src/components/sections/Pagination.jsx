import React from 'react';

const Pagination = ({ currentPage, totalPages, onNext, onPrev }) => {
  return (
    <div className="flex items-center justify-center gap-6">
      <button onClick={onPrev} disabled={currentPage === 1} className='bg-primary px-5 py-2 rounded-full text-white'>
        Previous
      </button>
      <span className='text-xl'>{currentPage} / {totalPages}</span>
      <button onClick={onNext} disabled={currentPage === totalPages} className='bg-primary px-8 py-2 rounded-full text-white'>
        Next
      </button>
    </div>
  );
};

export default Pagination;
