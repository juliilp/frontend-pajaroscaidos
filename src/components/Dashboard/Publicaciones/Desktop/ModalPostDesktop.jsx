import Image from "next/image";
import { deletePost, getPost } from "@/api/apiCall/PostRequests";
import Comments from "./Modal/Comments";
import { useEffect, useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";

export default function ModalPostDesktop({ modal, toggleModal, onDataUpdate }) {
  const [post, setPost] = useState(null);

  const fetchPost = async () => {
    const data = await getPost(modal.postId);
    setPost(data.publication);
  };

  useEffect(() => {
    const body = document.getElementById("Body");
    body && (body.style.overflow = "hidden");

    fetchPost();

    return () => {
      body && (body.style.overflow = "auto");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modal.postId]);

  const handleCloseModal = (event) => {
    if (event.target.id === "outside") {
      toggleModal("");
    }
  };

  const handleDelete = async (postId) => {
    const response = await deletePost(postId);
    alert(response);
    onDataUpdate();
    toggleModal({});
  };

  return (
    <div className="bg-[#0000008a] fixed w-full h-full top-0 left-0 z-[9999999] duration-300 overflow-y-auto hidden md:block">
      <div
        onClick={handleCloseModal}
        id="outside"
        className="flex justify-center items-center h-full"
      >
        <div className="bg-[#D9D9D9] flex flex-col items-end px-6 py-4 rounded-xl gap-2 w-[80%]">
          <button
            className="text-2xl text-red-600 font-bold"
            onClick={() => toggleModal("")}
          >
            X
          </button>
          {post ? (
            <div className="w-full flex gap-6 ">
              <article className="flex flex-col w-[40%]">
                <div className="flex gap-2 items-center">
                  {post.image && post.image[0] && (
                    <Image
                      src={post.image[0].secure_url}
                      alt={`post: ${post.id}`}
                      width={300}
                      height={300}
                      className="h-[40px] w-[60px] rounded-lg my-2"
                      onError={(e) => (e.target.style.display = "none")}
                    />
                  )}
                  <h2 className="text-lg font-semibold">{post.title}</h2>
                </div>
                <p className="overflow-y-auto w-full flex-grow">
                  {post.description}
                </p>
              </article>
              <Comments
                post={post}
                onDataUpdate={onDataUpdate}
                fetchPost={fetchPost}
              />
            </div>
          ) : (
            <div className="w-full py-3 flex justify-center">
              <BiLoaderAlt className="animate-spin" size={35} />
            </div>
          )}
          <button
            className="py-1 px-3 bg-red-600 rounded-md"
            onClick={() => handleDelete(post.id)}
          >
            <span className="text-white">Borrar publicación</span>
          </button>
        </div>
      </div>
    </div>
  );
}
