export default function validateUpdateUser(
  fieldName,
  value,
  errors,
  setErrors
) {
  const maxLength = 24;
  const fieldNamesMap = {
    nick_name: "nickname",
    first_name: "nombre",
    last_name: "apellido",
  };

  const newFieldName = fieldNamesMap[fieldName];

  if (newFieldName) {
    const newErrors = { ...errors } || {};

    if (value.length > maxLength) {
      newErrors[
        fieldName
      ] = `El ${newFieldName} no puede tener más de ${maxLength} caracteres`;
    } else {
      delete newErrors[fieldName];
    }

    setErrors(newErrors);
  }
}
