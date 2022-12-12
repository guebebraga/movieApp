export const HttpClient = {
  customFetch: (url, data, success, error) => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };
    if (data) {
      options.body = data;
    }
    fetch(url, options)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((response) => {
        if (success) {
          success(response);
        }
      })
      .catch((errors) => {
        if (errors.response && error) {
          error(errors);
        }
      });
  },
};
