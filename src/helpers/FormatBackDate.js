export default function parseBackendDate(backendDate) {
  // Divide la fecha en sus componentes: año, mes y día
  const [year, month, day] = backendDate.split("-").map(Number);

  // Crea un objeto Date con los componentes de fecha
  const parsedDate = new Date(year, month - 1, day); // Resta 1 al mes porque en JavaScript los meses van de 0 a 11

  return parsedDate;
}
