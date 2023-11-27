import api from "../api";

export const getNews = async (pageNumber, newsPerPage) => {
  try {
    const response = await api.get(`/news?pageNumber=${pageNumber}&newsPerPage=${newsPerPage}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener las noticias:", error);
  }
};

export const getNewsById = async (id) => {
  try {
    const response = await api.get(`/news/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener la noticia:", error);
  }
};

export const getAdvertising = async () => {
  try {
    const response = await api.get(`/advertising`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener las publicidades:", error);
  }
};
