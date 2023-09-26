import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const goToPrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center gap-3 my-8">
      <button
        className="p-2"
        onClick={goToPrevPage}
        disabled={currentPage === 1}
      >
        <IoIosArrowBack size={30} className="cursor-pointer" />
      </button>
      <div className="flex items-center gap-3">
        <span className="text-[#1D4AE9]">{currentPage}</span>
        <span>de</span>
        <span className="text-[#1D4AE9]">{totalPages}</span>
      </div>
      <button
        className="p-2"
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
      >
        <IoIosArrowForward size={30} className="cursor-pointer" />
      </button>
    </div>
  );
}
