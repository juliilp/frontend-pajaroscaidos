import api from "../api";

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
