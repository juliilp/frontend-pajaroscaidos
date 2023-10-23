import api from "../../api/api";
import Cookies from "js-cookie";
import { MESSAGE_TYPES } from "../dictionary/dictionary";
import { formDataConver } from "@/helpers/formDataConvert";
import jwt from "jsonwebtoken";
import axios from "axios";

const key = process.env.NEXT_PUBLIC_SECRET_KEY_DATA_JWT;

export async function getBannerImages() {
  try {
    const response = await api.get(`/news/banner`);
    return response.data.images.banners;
  } catch (error) {
    console.error("error al obtener BANNER");
  }
}

export async function loginNextAuth(data) {
  try {
    const response = await api.post(`/user/login-auth0`, data);

    if (response.status !== 200) return null;

    const userBackEnd = response.data;
    return userBackEnd.user;
  } catch (error) {
    console.error("Error inicio sesion:", error);
    if (error.response && error.response.data && error.response.data.error) {
      return error.response.data.error.code;
    }
  }
}

export async function loginUser(data) {
  try {
    const response = await api.post(`/user/login`, data, {
      withCredentials: true,
    });

    if (response.status == 200) {
      const userBackEnd = response.data;

      const JWTDecoded = jwt.verify(userBackEnd.user, key);

      if (JWTDecoded.user.userEmailValidate === false) {
        Cookies.set("newUserId", JSON.stringify({ id: JWTDecoded.user.id }), {
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

///---shop
export async function getItemsShop(pageNumber, itemPerPage) {
  try {
    const items = await api.get(
      `shop/items?itemPerPage=${itemPerPage ?? 6}&pageNumber=${pageNumber ?? 1}`
    );

    return items.data;
  } catch (error) {
    console.error(error);
  }
}
export async function createNewItem(data) {
  try {
    const formData = formDataConver(data);

    const request = await api.post(`/shop/item`, formData);
    // const request = await axios.post(`http://localhost:3001/shop/item`, formData);
  } catch (error) {
    console.log(error);
  }
}

export async function createCategory(name) {
  try {
    return api.post(`shop/category`, { name });
  } catch (error) {
    console.log(error);
  }
}
export async function deleteCategoryFromItem(id, category) {
  try {
    const request = await api.patch(`/shop/item/${id}`, category);
  } catch (error) {
    console.log(error);
  }
}

export async function editShopItem(id, data, categories, image) {
  const formData = formDataConver(data);

  try {
    const request = await api.put(`/shop/item/${id}`, formData);
    if (request.data && image.length) {
      const deleteImage = await api.put(`/shop/item/${id}`, {
        deleteImages: image,
      });
    }
    if (request.data && categories.length) {
      await categories.forEach((i) => {
        deleteCategoryFromItem(id, { category: i });
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export async function deleteShopItem(id) {
  try {
    const request = await api.delete(`/shop/item/${id}`);
  } catch (error) {
    console.log(error);
  }
}
export async function getCategories() {
  try {
    const request = await api.get(`/shop/category`);
    return request.data.categories;
    console.log(request.data);
  } catch (error) {
    console.log(error);
  }
}

export async function getItemShopById(id) {
  try {
    const request = await api.get(`/shop/item/${id}`);

    return request.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getItemLimit(limit) {
  try {
    const request = await api.get(`/shop/items?limit=${limit}`);

    return request.data.items;
  } catch (error) {
    console.log(error);
  }
}
