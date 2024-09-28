import axios from "axios";

const axiosInstance = axios.create({
  // Fire base url
  // baseURL: "http://127.0.0.1:5001/mk--clone-4388a/us-central1/api",

  // render url
  baseURL: "https://amazon-api-clone.onrender.com",
});

export { axiosInstance };
