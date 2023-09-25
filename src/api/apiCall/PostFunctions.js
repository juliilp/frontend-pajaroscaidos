import api from "@/api/api";
import { MESSAGE_TYPES } from "../dictionary/dictionary";

// Publicaciones
export const getAllPosts = async (pageNumber, order) => {
  try {
    const response = await api.get(
      `/publication/all?pageNumber=${pageNumber}&postPerPage=${6}&orderCreate=${order}`
    );
    const post = {};

    post.publications = response.data.publications;
    post.totalPages = response.data.totalPages;
    return post;
  } catch (error) {
    console.error("Error al obtener las publicaciones:", error);

    return MESSAGE_TYPES.ERROR;
  }
};

export async function getPost(id) {
  try {
    const resp = await api.get(`/publication/${id}`);
    return resp.data;
  } catch (error) {
    console.error(error.response);
    return MESSAGE_TYPES.ERROR;
  }
}

export const createNewPost = async (userId, newPost) => {
  try {
    const formData = new FormData();
    formData.append("title", newPost.title);
    formData.append("description", newPost.description);
    formData.append("image", newPost.image);
    const { data: response } = await api.post(
      `publication/create/${userId}`,
      formData
    );
    return response;
  } catch (error) {
    console.log(error);
    return MESSAGE_TYPES.ERROR;
  }
};

export const deletePost = async (postId) => {
  try {
    const response = await api.delete(`/publication/delete/${postId}`);
    if (response.status === 200) {
      return "Publicacion eliminada satisfactoriamente.";
    }
  } catch (error) {
    console.error(error);
    return "Error al eliminar la publicacion, intentelo mas tarde.";
  }
};

//Reacciones
export async function createReaction(PostData) {
  const { idPost, reaction, idUser } = PostData;
  const body = { reaction, idUser };

  try {
    await api.post(`/reaction/create/${idPost}`, body);
  } catch (error) {
    console.error(error.response);
    return MESSAGE_TYPES.ERROR;
  }
}

export async function deleteReaction(id) {
  try {
    await api.delete(`reaction/delete/${id}`);
  } catch (error) {
    console.error(error.response);
    return MESSAGE_TYPES.ERROR;
  }
}

//Comentarios
export const createComment = async (body, idPost) => {
  try {
    await api.post(`comment/create/${idPost}`, body);
  } catch (error) {
    console.error(error.response);
    return MESSAGE_TYPES.ERROR;
  }
};

export const deleteComment = async (commentId) => {
  try {
    const response = await api.delete(`comment/delete/${commentId}`);
    if (response.status === 200) {
      return "Comentario eliminado satisfactoriamente";
    }
  } catch (error) {
    console.error(error);
    return "Error al eliminar el comentario, intentelo mas tarde.";
  }
};
