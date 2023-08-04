import React from 'react';

const Pagination = ({ currentPage, totalPages, onNext, onPrev, className }) => {
  return (
    <div className={`flex items-center justify-center gap-6 ${className}`}>
      <button
        onClick={onPrev}
        disabled={currentPage === 1}
        className={`px-5 py-2 rounded-full text-white ${
          currentPage === 1 ? 'bg-gray-300' : 'hover:bg-primary bg-black'
        }`}
      >
        Previous
      </button>
      <span className='text-xl w-[55px] text-center'>
        {currentPage} / {totalPages}
      </span>
      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className={`px-8 py-2 rounded-full text-white ${
          currentPage === totalPages ? 'bg-gray-300' : 'hover:bg-primary bg-black'
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
