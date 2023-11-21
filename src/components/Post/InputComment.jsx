import React, { useState } from "react";
import { createComment, getPost } from "@/api/apiCall/PostRequests";
import Image from "next/image";
import { CustomContext } from "@/store/ContextProvider";
import { useEffect } from "react";

const InputComment = ({ onCommentSubmit, idPost, allComents }) => {
  const { UserContext } = CustomContext();
  const [user, setUser] = useState();
  const [comment, setComment] = useState("");
  const [upLoadingComment, setUpLoadingComment] = useState(false);

  useEffect(() => {
    setUser(UserContext);
  }, [UserContext]);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = async () => {
    const body = {
      comment,
      idUser: user?.id,
    };

    try {
      if (comment.trim() !== "" && !upLoadingComment) {
        setUpLoadingComment(true);
        await createComment(body, idPost);
        await getPost(idPost).then((res) => {
          onCommentSubmit(res.publication.comments);
          setComment("");
          setUpLoadingComment(false);
        });
      }
    } catch (error) {
      alert("No se pudo crear el comentario");
      console.error("Error updating comment:", error);
    } finally {
      setUpLoadingComment(false);
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
        disabled={upLoadingComment}
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
