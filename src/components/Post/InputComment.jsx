import { createComment, getPosts } from "@/libs/PostFunctions";
import Cookies from "js-cookie";
import React, { useState } from "react";
import Image from "next/image";

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
        className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg"
        type="text"
        placeholder="Comment"
        value={comment}
        onChange={handleCommentChange}
      />
      <button
        className="px-3 bg-gray-300 rounded-r-lg"
        onClick={handleCommentSubmit}
      >
        <Image
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAArklEQVR4nO3VsQkCQRSE4Q8NrUFjcxMjazAxOOzARGxEsAdNbEJEbUEjixCEg0tWBAURwfPgcYkDEy7/7s7bWf76QQccMUFLgNKLL1igHQV4usAa/ShAevEeIzSjAOnhM6ZVcioLSG85dcoC8gqQ9Mhphd43QIYltjjhWgF2XztEo+ypWuhigDFmmJfYyKYWQBZ9RXl0yCl6TFPdD20fURVFVNmF1PUu+sP5yyfdABfusvOmwtUYAAAAAElFTkSuQmCC"
          width={20}
          height={20}
          alt="Send"
        />
      </button>
    </div>
  );
};

export default InputComment;
