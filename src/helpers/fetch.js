export const fetchHelper = async (url, method, token, body) => {
  const headers = {
    "Content-Type": "application/json",
  };
  const requestOptions = {
    method,
    headers,
  };

  if (token) {
    headers.Authorization = token;
  }

  if (body) {
    requestOptions.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
