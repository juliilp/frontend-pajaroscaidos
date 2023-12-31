import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({ pageNumber, totalPages, changePage,textcolor }) => {
  return (
    <div className="flex items-center gap-6 my-8">
      <button
        onClick={pageNumber === 1 ? null : () => changePage(pageNumber - 1)}
      >
        <IoIosArrowBack size={30} className="cursor-pointer" />
      </button>
      <div className="flex items-center gap-3">
        <span className={`${!textcolor ?'text-[#1D4AE9]':textcolor}`}>{pageNumber}</span>
        <span>de</span>
        <span className={`${!textcolor ?'text-[#1D4AE9]':textcolor}`}>{totalPages}</span>
      </div>

      <button
        onClick={
          pageNumber >= totalPages ? null : () => changePage(pageNumber + 1)
        }
      >
        <IoIosArrowForward size={30} className="cursor-pointer" />
      </button>
    </div>
  );
};

export default Pagination;
