import formatDate from "@/helpers/FormatDate";
import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward, IoIosTrash } from "react-icons/io";

export default function Comentarios({ post }) {
  const commentsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedComments, setDisplayedComments] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (post.comments && post.comments.length > 0) {
      const totalPages = Math.ceil(post.comments.length / commentsPerPage);
      setTotalPages(totalPages);
      const startIndex = (currentPage - 1) * commentsPerPage;
      const endIndex = startIndex + commentsPerPage;
      const commentsToDisplay = post.comments.slice(startIndex, endIndex);
      setDisplayedComments(commentsToDisplay);
    }
  }, [post, currentPage, commentsPerPage]);

  // Función para ir a la página anterior
  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Función para ir a la página siguiente
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <article className="flex flex-col w-[60%]">
      <h2 className="font-semibold text-lg text-center">Comentarios</h2>
      {post.comments && post.comments.length !== 0 ? (
        <>
          {displayedComments.map((comment, i) => (
            <div
              key={i}
              className="flex justify-between items-end gap-4 border-b-gray-500 border-b-2"
            >
              <div className="w-[90%]">
                <div className="flex gap-2 ">
                  <h2 className="font-medium">{comment.user.nick_name}</h2>
                  <p className="text-gray-600">
                    {formatDate(comment.createdAt)}
                  </p>
                </div>
                <p className="line-clamp-1">{comment.comment}</p>
              </div>
              <button className="w-[10%] flex justify-end">
                <IoIosTrash size={25} className="cursor-pointer fill-red-600" />
              </button>
            </div>
          ))}
          {/* Paginación */}
          <div className="flex items-center justify-center gap-6 my-8">
            <button
              className="mx-2 p-2"
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
              className="mx-2 p-2"
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
            >
              <IoIosArrowForward size={30} className="cursor-pointer" />
            </button>
          </div>
        </>
      ) : (
        <h2 className="font-medium text-center">No hay comentarios</h2>
      )}
    </article>
  );
}
