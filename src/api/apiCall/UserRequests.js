import api from "../api";
import { MESSAGE_TYPES } from "../dictionary/dictionary";

export async function getUserById(userId) {
  try {
    const response = await api.get(`user/${userId}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
    alert("Ha ocurrido un error, intentelo mas tarde.");
  }
}

export async function UpdateUser(user, id) {
  try {
    const response = await api.put(`user/update/${id}`, user);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
    alert("Ha ocurrido un error, intentelo mas tarde.");
  }
}

export async function UpdateUserStatus(userId, body) {
  try {
    const response = await api.patch(`user/admin/${userId}/action`, body);
    return response.status;
  } catch (error) {
    console.error("Error al cambiar el estado:", error);
    alert("Ha ocurrido un error, intentelo mas tarde.");
  }
}

export async function UpdatePassword(userId, body) {
  try {
    const response = await api.put(`user/update-password/${userId}`, body);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    if (error.response.data.error.code === MESSAGE_TYPES.INVALID_PASSWORD) {
      alert("La contraseña no es correcta");
    }
    console.error("Error al cambiar la contraseña:", error);
    alert("Ha ocurrido un error, intentelo mas tarde.");
  }
}
