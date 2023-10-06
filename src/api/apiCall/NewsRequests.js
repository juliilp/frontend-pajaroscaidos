import api from "../api";

export const getNews = async (pageNumber, newsPerPage) => {
  try {
    const response = await api.get(
      `/news?pageNumber=${pageNumber}&newsPerPage=${newsPerPage}`
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener las noticias:", error);
  }
};
