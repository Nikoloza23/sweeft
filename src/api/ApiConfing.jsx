import axios from "axios";

export const fetchUser = (page) => {
  return axios({
    method: "GET",
    url: `https://api.instantwebtools.net/v1/passenger?page&size=20`,
  })
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      return err;
    });
};
