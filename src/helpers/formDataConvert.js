export const formDataConver = (data) => {
  const formData = new FormData();
  for (const nameCamp in data) {
    formData.append(nameCamp, data[nameCamp]);
  }
  return formData;
};
