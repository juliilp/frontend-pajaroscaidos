import Pagination from "@/components/Pagination/Pagination2";
import formatDate from "@/helpers/FormatDate";
import { useEffect, useState } from "react";
import { IoIosTrash } from "react-icons/io";

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

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
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
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <h2 className="font-medium text-center">No hay comentarios</h2>
      )}
    </article>
  );
}