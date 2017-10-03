export const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    let error = new Error(res.statusText);
    error.res = res;
    throw error;
  }
};
