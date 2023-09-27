export default function CalculateAge(birthDateDB) {
  if (!birthDateDB) {
    return "-";
  }

  const birthDate = new Date(birthDateDB);
  const currentDate = new Date();
  const age = currentDate.getFullYear() - birthDate.getFullYear();

  // Verificar si el cumpleaños ya pasó este año
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();
  const birthMonth = birthDate.getMonth();
  const birthDay = birthDate.getDate();

  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && currentDay < birthDay)
  ) {
    if (age > 0 || age < 200) return "Edad invalida";

    return age - 1;
  } else {
    return age;
  }
}
