import PostList from "./PostList";

export default function TableMobilePosts({
  posts,
  toggleModal,
  fetchPostsData,
}) {
  return (
    <table className="w-full table-auto text-center md:hidden">
      <thead>
        <tr>
          <th>
            <strong>Imagen</strong>
          </th>
          <th>
            <strong>Titulo</strong>
          </th>
          <th>
            <strong>Me gusta</strong>
          </th>
          <th className="hidden sm:table-cell">
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
