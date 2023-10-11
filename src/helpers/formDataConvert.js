export const formDataConver = (data) => {
  const formData = new FormData();

  for (const nameCamp in data) {
    if (Array.isArray(data[nameCamp])) {
      for (const file of data[nameCamp]) {
        formData.append(nameCamp, file);
      }
    } else {
      formData.append(nameCamp, data[nameCamp]);
    }
  }

  return formData;
};
