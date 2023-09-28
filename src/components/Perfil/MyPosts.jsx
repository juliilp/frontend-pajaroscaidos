import React, { useEffect, useState } from "react";
import api from "../../api/api";
import sortPostsByDate from "@/helpers/orderPosts";
import CardForo from "../CardForo";
import Pagination from "../Pagination/Pagination2";

export default function MyPosts({ user }) {
  const [userPostsData, setUserPostsData] = useState({
    posts: [],
    order: "recent",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const postsPerPage = 3;

  useEffect(() => {
    async function fetchUserPosts() {
      if (user) {
        const result = await api(`/user/${user.id}/?filter=publications`);
        const data = result.data.user.publications;
        setUserPostsData((prevData) => ({
          ...prevData,
          posts: sortPostsByDate(data, prevData.order),
        }));
      }
    }

    fetchUserPosts();
  }, [user]);

  useEffect(() => {
    if (userPostsData.posts && userPostsData.posts.length > 0) {
      const totalPages = Math.ceil(userPostsData.posts.length / postsPerPage);
      setTotalPages(totalPages);
    }
  }, [userPostsData.posts]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleOrderChange = (event) => {
    const newOrder = event.target.value;

    setUserPostsData((prevData) => ({
      ...prevData,
      order: newOrder,
      posts: sortPostsByDate(prevData.posts, newOrder),
    }));
  };

  // Calculate the range of posts to display on the current page
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = userPostsData.posts.slice(startIndex, endIndex);

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
      {currentPosts && currentPosts.length > 0 ? (
        <div className="w-full">
          {currentPosts.map((post) => {
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
          })}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      ) : (
        <p>No hay publicaciones.</p>
      )}
    </section>
  );
}
