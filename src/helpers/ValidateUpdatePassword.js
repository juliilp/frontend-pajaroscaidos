export default function ValidateUpdatePassword(
  fieldName,
  value,
  errors,
  setErrors,
  password
) {
  const minLenght = 8;
  const maxLength = 24;

  if (fieldName) {
    const newErrors = { ...errors } || {};

    switch (fieldName) {
      case "newPassword":
        password = value;

        if (value.length < minLenght || value.length > maxLength) {
          newErrors[
            fieldName
          ] = `La contraseña debe tener entre ${minLenght} y ${maxLength} caracteres.`;
        } else if (!/\d/.test(value)) {
          newErrors[fieldName] =
            "La contraseña debe contener al menos 1 número";
        } else {
          delete newErrors[fieldName];
        }
        break;

      case "confirmNewPassword":
        if (value !== password) {
          newErrors[fieldName] = "Las contraseñas no coinciden";
        } else {
          delete newErrors[fieldName];
        }
        break;

      default:
        break;
    }

    setErrors(newErrors);
  }
}
