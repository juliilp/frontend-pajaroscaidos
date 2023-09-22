import Image from "next/image";
import formatDate from "@/helpers/FormatDate";
import api from "@/api/api";

export default function ModalPublicacion({ modal }) {
  const deletePost = async () => {
    try {
      const response = await api.delete(`publication/delete/${modal.post.id}`);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
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
            onClick={() => toggleModal(undefined)}
          >
            X
          </button>
          <div className="w-full flex gap-6 ">
            <article className="w">
              <div className="flex gap-2 items-center">
                {modal.post.image && modal.post.image[0] && (
                  <Image
                    src={modal.post.image[0].secure_url}
                    alt={`post: ${modal.post.id}`}
                    width={300}
                    height={300}
                    className="h-[40px] w-[60px] rounded-lg my-2"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                )}
                <h2 className="text-lg font-semibold">{modal.post.title}</h2>
              </div>
              <p className="overflow-y-scroll w-80 h-24">
                {modal.post.description}
              </p>
            </article>
            <article className="flex flex-col w-full">
              <h2 className="font-semibold text-lg text-center">Comentarios</h2>
              {modal.post.comments ? (
                modal.post.comments.map((comment, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-end gap-4 border-b-gray-500 border-b-2"
                  >
                    <div className="">
                      <div className="flex gap-2 ">
                        <h2 className="font-medium">
                          {comment.user.nick_name}
                        </h2>
                        <p className="text-gray-600">
                          {formatDate(comment.createdAt)}
                        </p>
                      </div>
                      <p className="line-clamp-1">{comment.comment}</p>
                    </div>
                    <button>X</button>
                  </div>
                ))
              ) : (
                <h2>No hay comentarios</h2>
              )}
            </article>
          </div>
          <button
            className="py-1 px-3 bg-red-600 rounded-md"
            onClick={deletePost}
          >
            <span className="text-white">Borrar publicación</span>
          </button>
        </div>
      </div>
    </div>
  );
}
