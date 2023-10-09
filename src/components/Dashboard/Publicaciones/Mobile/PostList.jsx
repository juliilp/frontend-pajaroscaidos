import Image from "next/image";

export default function PostList({ posts, toggleModal }) {
  return (
    <>
      {posts?.map((post) => (
        <tr
          key={post.id}
          className="hover:bg-[#444444] cursor-pointer"
          onClick={() => toggleModal(post)}
        >
          <td className="flex justify-center">
            <Image
              src={post.image[0].imageUrl}
              alt={`post: ${post.id}`}
              width={300}
              height={300}
              className="h-[40px] w-[60px] rounded-lg my-2"
              onError={(e) => (e.target.style.display = "none")}
            />
          </td>
          <td className="max-w-[130px] truncate">{post.title}</td>
          <td>{post.reactions.length}</td>
          <td className="hidden sm:table-cell">{post.comments.length}</td>
        </tr>
      ))}
    </>
  );
}
