export default function formatDate(dateDB) {
  const date = new Date(dateDB);

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  const formatedDate = `${day}/${month}/${year}`;

  return formatedDate;
}
