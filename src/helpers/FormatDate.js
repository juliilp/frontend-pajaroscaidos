export default function formatDate(dateDB) {
  const date = new Date(dateDB);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  const formatedDate = `${year}-${month}-${day}`;

  return formatedDate;
}
