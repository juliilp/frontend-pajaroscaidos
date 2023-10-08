import Image from "next/image";
import Comentarios from "./Modal/Comentarios";
import { deletePost } from "@/api/apiCall/PostRequests";

export default function ModalPost({ modal, toggleModal, onDataUpdate }) {
  const handleDelete = async (postId) => {
    const response = await deletePost(postId);
    alert(response);
    onDataUpdate();
    toggleModal({});
  };

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen bg-[#0000008a] ${
        modal.toggle ? "block" : "hidden"
      }`}
    >
      <div className="flex w-full h-full justify-center items-center">
        <div className="bg-[#D9D9D9] flex flex-col items-end px-6 py-4 rounded-xl gap-2 w-[80%]">
          <button
            className="text-2xl text-red-600 font-bold"
            onClick={() => toggleModal({})}
          >
            X
          </button>
          <div className="w-full flex gap-6 ">
            <article className="flex flex-col w-[40%]">
              <div className="flex gap-2 items-center">
                {modal.post.image && modal.post.image[0] && (
                  <Image
                    src={modal.post.image[0].imageUrl}
                    alt={`post: ${modal.post.id}`}
                    width={300}
                    height={300}
                    className="h-[40px] w-[60px] rounded-lg my-2"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                )}
                <h2 className="text-lg font-semibold">{modal.post.title}</h2>
              </div>
              <p className="overflow-y-scroll w-80 flex-grow">
                {modal.post.description}
              </p>
            </article>
            <Comentarios post={modal.post} onDataUpdate={onDataUpdate} />
          </div>
          <button
            className="py-1 px-3 bg-red-600 rounded-md"
            onClick={() => handleDelete(modal.post.id)}
          >
            <span className="text-white">Borrar publicación</span>
          </button>
        </div>
      </div>
    </div>
  );
}
