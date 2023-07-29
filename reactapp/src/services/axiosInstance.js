import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://8080-baedfefaabbaefecdaaadaccdadddfabcfbf.project.examly.io",
  timeout: 5000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default axiosInstance;
