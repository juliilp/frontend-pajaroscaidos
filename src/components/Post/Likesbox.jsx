import React, { useState, useEffect } from "react";
import { BsFillSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import {
  deleteReaction,
  createReaction,
  getPost,
} from "@/api/apiCall/PostRequests";
import Cookies from "js-cookie";

export default function Likesbox({ idPost, postlikes, updateLikes }) {
  const userCookie = Cookies.get("user");
  const user = userCookie ? JSON.parse(userCookie) : null;
  const [likes, setLikes] = useState(postlikes.length);
  const [userLike, setUserLike] = useState(false);
  const [likeInProgress, setLikeInProgress] = useState(false);

  useEffect(() => {
    if (!user) return;
    const isUserReacted = postlikes.some((like) => like.userId === user.id);
    setUserLike(isUserReacted);
  }, [likes, postlikes, user]);

  const likepost = async (reaction) => {
    if (!user || likeInProgress) return;

    setLikeInProgress(true);

    const data = {
      idPost,
      reaction: reaction,
      idUser: user?.id,
    };

    try {
      if (userLike && !likeInProgress) {
        const likeId = postlikes.find((like) => like.userId === user.id).id;
        await deleteReaction(likeId).then((res) =>
          setLikes(userLike ? likes - 1 : likes + 1)
        );
      } else {
        await createReaction(data).then((res) =>
          setLikes(userLike ? likes - 1 : likes + 1)
        );
      }

      const updatedPostData = await getPost(idPost);
      updateLikes(updatedPostData.publication.reactions);
    } catch (error) {
      console.error("Error updating reaction:", error);
    } finally {
      setLikeInProgress(false);
    }
  };

  return (
    <article className="bottom-0 right-[2rem] flex items-end gap-2 text-[#E11447] font-bold justify-end">
      {userLike ? (
        <BsFillSuitHeartFill
          className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl cursor-pointer"
          onClick={() => likepost("dislike")}
          disabled={likeInProgress}
        />
      ) : (
        <BsSuitHeart
          className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl cursor-pointer"
          onClick={() => likepost("like")}
          disabled={likeInProgress}
        />
      )}
      <span className="text-xl">{likes}</span>
    </article>
  );
}
