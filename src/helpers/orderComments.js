export const orderByAntiguos = (a, b) =>
  new Date(a.createdAt) - new Date(b.createdAt);

export const orderByRecientes = (a, b) =>
  new Date(b.createdAt) - new Date(a.createdAt);

export const orderByDestacados = (a, b) => {
  //Funcion pendiente cuando se decida que es destacado
};
