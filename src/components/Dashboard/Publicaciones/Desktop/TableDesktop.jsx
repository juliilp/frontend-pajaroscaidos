import PostList from "./PostList";

export default function TableDesktopPosts({
  posts,
  toggleModal,
  fetchPostsData,
}) {
  return (
    <table className="w-full table-auto text-center hidden md:table">
      <thead>
        <tr>
          <th className="w-[10%]">
            <strong>Imagen</strong>
          </th>
          <th className="w-[40%]">
            <strong>Titulo</strong>
          </th>
          <th className="w-[20%]">
            <strong>Usuario</strong>
          </th>
          <th className="w-[15%]">
            <strong>Me gusta</strong>
          </th>
          <th className="w-[15%]">
            <strong>Comentarios</strong>
          </th>
        </tr>
      </thead>
      <tbody>
        <PostList
          posts={posts}
          toggleModal={toggleModal}
          fetchPostsData={fetchPostsData}
        />
      </tbody>
    </table>
  );
}
