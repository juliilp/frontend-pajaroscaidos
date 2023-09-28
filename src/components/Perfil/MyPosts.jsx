import React, { useEffect, useState } from "react";
import api from "../../api/api";
import sortPostsByDate from "@/helpers/orderPosts";
import CardForo from "../CardForo";

export default function MyPosts({ user }) {
  const [posts, setPosts] = useState({ posts: [], order: "recent" });

  useEffect(() => {
    async function userPosts() {
      const result = await api(`/user/${user.id}/?filter=publications`);
      const data = result.data.user.publications;
      setPosts((prevPosts) => ({
        ...prevPosts,
        posts: sortPostsByDate(data, posts.order),
      }));
    }

    if (user) {
      userPosts();
    }
  }, [posts.order, user]);

  const handleOrderChange = (event) => {
    const newOrder = event.target.value;

    setPosts((prevPosts) => ({
      ...prevPosts,
      order: newOrder,
      posts: sortPostsByDate(prevPosts.posts, newOrder),
    }));
  };

  return (
    <section className="flex p-6 flex-col justify-center gap-4 items-center mt-3 lg:w-[840px] rounded-xl border-[#C4C4C4] border-2 shadow-md">
      <div className="flex justify-between w-full">
        <h3 className="text-left w-full text-2xl font-semibold">
          Mis publicaciones
        </h3>
        <select onChange={handleOrderChange}>
          <option value="recent">Recientes</option>
          <option value="old">Antiguos</option>
        </select>
      </div>
      {posts.posts && posts.posts.length > 0 ? (
        posts.posts.map((post) => {
          return (
            <CardForo
              key={post.id}
              titulo={post.title}
              tiempo={post.updatedAt}
              usuario={user.nick_name}
              like={post.reactions.length}
              message={post.comments.length}
              image={post.image[0]}
              id={post.id}
              reactions={post.reactions}
            />
          );
        })
      ) : (
        <p>No hay publicaciones.</p>
      )}
    </section>
  );
}
