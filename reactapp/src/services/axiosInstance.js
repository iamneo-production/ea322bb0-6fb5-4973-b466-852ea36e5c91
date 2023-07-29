import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://ide-fadbdbfecafeceefecdaaadeaeaadbdbabf.project.examly.io/proxy/8080",
  timeout: 5000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default axiosInstance;
