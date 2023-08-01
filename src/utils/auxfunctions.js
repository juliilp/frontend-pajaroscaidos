export const convertirFecha = (fechaapi) => {
  const fecha = new Date(fechaapi);
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1;
  const anio = fecha.getFullYear();

  const diaStr = dia.toString().padStart(2, "0");
  const mesStr = mes.toString().padStart(2, "0");

  return `${diaStr}/${mesStr}/${anio}`;
};

export const newpostvalidations = (newpost) => {
  let errors = {};
  if (!newpost.title.length) errors.title = "Titulo obligatorio";
  if (newpost.title.length < 3) errors.title = "Titulo muy corto";

  if (!newpost.description.length) errors.description = "El campo de texto esta vacio";
  if (newpost.description.length < 10) errors.description = "El texto es muy corto";

  if (Object.entries(errors).length) errors.general = 'Revisa los errores por favor'
  
  return errors
};
