import { createComment, getPosts } from "@/libs/PostFunctions";
import Cookies from "js-cookie";
import React, { useState } from "react";

const InputComment = ({ onCommentSubmit, idPost }) => {
  const userCookie = Cookies.get("user");
  const user = userCookie ? JSON.parse(userCookie) : null;
  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = async () => {
    const body = {
      comment,
      idUser: user?.id,
    };

    try {
      if (comment.trim() !== "") {
        await createComment(body, idPost);
        const updatedPostData = await getPosts(idPost);
        onCommentSubmit(updatedPostData.publication.comments);
        setComment("");
      }
    } catch (error) {
      console.error("Error updating comment:", error);
    }
  };

  return (
    <div className="flex">
      <input
        className="flex-grow px-2 py-1 border border-gray-300 rounded-l"
        type="text"
        placeholder="Comment"
        value={comment}
        onChange={handleCommentChange}
      />
      <button
        className="px-3 py-1 bg-gray-300 rounded-r"
        onClick={handleCommentSubmit}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-600"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M17.293 2.293a1 1 0 011.414 1.414L6.414 15H10a1 1 0 110 2H4a1 1 0 01-1-1V4a1 1 0 112 0v4.586l11.293-11.293z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default InputComment;
