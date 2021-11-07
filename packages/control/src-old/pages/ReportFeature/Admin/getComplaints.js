import axios from "axios";

const HOST_URL = " ";

export const getComplaints = (child, token) => {
  // console.log(token)
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: `Token ${token}`
  };
  axios
    .get(`${HOST_URL}/clients/results/?child=${child}`)
    .then(res => {
      const complaints = res.data;
      // console.log(complaints, res)
    })
    .catch(err => {
      console.error(err);
    });
};
