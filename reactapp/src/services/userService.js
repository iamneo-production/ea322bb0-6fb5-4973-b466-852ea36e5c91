import axiosInstance from "./axiosInstance";
import authService from "./auth";
const userService = {
  registerUser: async (formData, onRegister) => {
    try {
      await axiosInstance.post("/user/register", formData).then((res) => {
        onRegister(res?.status);
      });
    } catch (error) {
      onRegister(error?.response?.status);
    }
  },
  loginUser: async (formData, onLogin) => {
    try {
      await axiosInstance.post("/user/login", formData).then((res) => {
        if (res?.data?.message !== "Invalid Credentials") {
          authService.login(res?.data);
          onLogin(200);
        } else {
          onLogin(400);
        }
      });
    } catch (error) {}
  },
};

export default userService;
