import api from "../../api/api";
import Cookies from "js-cookie";
import { MESSAGE_TYPES } from "../dictionary/dictionary";

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

    const banners = response.data.images.banners;
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

export async function getItemsShop(pageNumber,itemPerPage) {
  ///esperando que haya datos en el back para integrarla
  try {
    const items = await api.get(`shop/items?itemPerPage=${itemPerPage??6}&pageNumber=${pageNumber??1}`);
    return items.data
  } catch (error) {
    console.log(error)
  }
}
export async function createNewItem(data){
   try {
      const request=await api.post(`/shop/item`,data)
      console.log(request.data,'aparentemente enviado');
   } catch (error) {
     console.log(error);
   }
}
