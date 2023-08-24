import React, { useState, useEffect } from "react";
import { BsFillSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { deleteReaction, createReaction, getPosts } from "@/libs/PostFunctions";
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
  }, [postlikes, user]);

  const likepost = async (reaction) => {
    if (!user || likeInProgress) return;

    setLikeInProgress(true);

    const data = {
      idPost,
      reaction: reaction,
      idUser: user?.id,
    };

    try {
      const updatedLikes = userLike ? likes - 1 : likes + 1;
      setLikes(updatedLikes);

      if (userLike) {
        const likeId = postlikes.find((like) => like.userId === user.id).id;
        await deleteReaction(likeId);
      } else {
        await createReaction(data);
      }

      const updatedPostData = await getPosts(idPost);
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
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl cursor-pointer"
          onClick={() => likepost("dislike")}
          disabled={likeInProgress}
        />
      ) : (
        <BsSuitHeart
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl cursor-pointer"
          onClick={() => likepost("like")}
          disabled={likeInProgress}
        />
      )}
      <span className="text-xl">{likes}</span>
    </article>
  );
}
