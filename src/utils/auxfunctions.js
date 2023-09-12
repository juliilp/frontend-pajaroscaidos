const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

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

  if (!newpost.description.length)
    errors.description = "El campo de texto esta vacio";
  if (newpost.description.length < 10)
    errors.description = "El texto es muy corto";

  if (Object.entries(errors).length)
    errors.general = "Revisa los errores por favor";

  return errors;
};

export const validateLogin = (email, password) => {
  const error = {};

  if (!email) error.email = "Debe ingresar e-mail";
  if (!password) error.password = "Debe ingresar una contraseña";

  if (email && !emailRegex.test(email))
    error.email = "Debe ingresar un e-mail valido";

  return error;
};

export const validateEmail = (email) => {
  const error = {};

  if (!email) error.email = "Debe ingresar e-mail";

  if (email && !emailRegex.test(email))
    error.email = "Debe ingresar un e-mail valido";

  return error;
};

export const validateCreateUser = (input) => {
  const { email, password, passwordConfirm, first_name, last_name } = input;

  const error = {};

  if (!email) error.email = "Debe ingresar e-mail";
  if (!password) error.password = "Debe ingresar una contraseña";
  if (!passwordConfirm) error.passwordConfirm = "Debe confirmar la contraseña";
  if (!first_name) error.first_name = "Debe ingresar su nombre";
  if (!last_name) error.last_name = "Debe ingresar su apellido";

  if (password !== passwordConfirm)
    error.passwordConfirm = "Las contraseñas no coinciden";

  if (email && !emailRegex.test(email))
    error.email = "Debe ingresar un e-mail valido";

  return error;
};
