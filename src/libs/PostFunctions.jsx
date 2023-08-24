import api from "@/api/api";

export async function getPosts(id) {
  try {
    const resp = await api.get(`/publication/${id}`);
    return resp.data;
  } catch (error) {
    console.error(error.response);
  }
}

export async function createReaction(PostData) {
  const { idPost, reaction, idUser } = PostData;
  const body = { reaction, idUser };

  try {
    await api.post(`/reaction/create/${idPost}`, body);
  } catch (error) {
    return console.error(error.response);
  }
}

export async function deleteReaction(id) {
  try {
    await api.delete(`reaction/delete/${id}`);
  } catch (error) {
    console.error(error.response);
  }
}
