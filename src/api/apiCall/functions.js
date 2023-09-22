import api from "../../api/api";
import Cookies from "js-cookie";
import { MESSAGE_TYPES } from "../dictionary/dictionary";

export const fetchPosts = async (pageNumber, order) => {
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
export const createNewPost = async (userId, newPost) => {
  try {
    // console.log('newPost: ', newPost)
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
  }
};

export async function getPostForNuestraComunidad(option) {
  try {
    const response = await api.get(
      `publication/community?filter=${option}&limit=${2}`
    );

    if (response.status === 200) {
      const publications = response.data.publications;
      return publications;
    } else {
      console.log("error al obtener publicaciones 'NUESTRA COMUNIDAD");
    }
  } catch (error) {
    console.log("error al obtener publicaciones 'NUESTRA COMUNIDAD");
  }
}

export async function getBannerImages() {
  try {
    const response = await api.get(`/news/banner`);

    if (response.status !== 200) return null;

    const banners = response.data.images;
    return banners;
  } catch (error) {
    console.log("error al obtener BANNER");
  }
}

export async function loginNextAuth(data) {
  try {
    const response = await api.post(`/user/login-auth0`, data);

    if (response.status !== 200) return null;

    const userBackEnd = response.data;
    // console.log('user back:', userBackEnd)
    return userBackEnd.user;
  } catch (error) {
    console.log("error al obtener user del back: ", error);
  }
}

export async function loginUser(data) {
  try {
    const response = await api.post(`/user/login`, data, {
      withCredentials: true,
    });

    if (response.status == 200) {
      const userBackEnd = response.data;
      // console.log('user back:', userBackEnd.user.id)

      if (userBackEnd.user.userEmailValidate === false) {
        Cookies.set("newUserId", JSON.stringify({ id: userBackEnd.user.id }), {
          expires: 7,
        });

        return MESSAGE_TYPES.VALIDATE_EMAIL;
      } else {
        return userBackEnd.user;
      }
    }
  } catch (error) {
    console.error("Error inicio sesion:", error);
    if (error.response && error.response.data && error.response.data.error) {
      return error.response.data.error.code;
    }
  }
}

export async function checkEmail(id, code) {
  try {
    // console.log('id', id)
    const response = await api.post(`user/${id}/validate`, code, {
      withCredentials: true,
    });

    if (response.status == 200) {
      Cookies.remove("newUserId");

      return;
    }
  } catch (error) {
    console.error("Error al validar codigo:", error);
    if (error.response && error.response.data && error.response.data.error) {
      return error.response.data.error.code;
    }
  }
}

export async function newCode(id) {
  try {
    const response = await api.patch(`user/${id}/code`, {
      withCredentials: true,
    });

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.error("Error al enviar un nuevo código:", error);
  }
}

export async function newPassword(data) {
  try {
    const response = await api.post(`user/generate-password`, data, {
      withCredentials: true,
    });

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    console.error("Error al enviar la pass:", error);
    if (error.response && error.response.data && error.response.data.error) {
      return error.response.data.error.code;
    }
  }
}
