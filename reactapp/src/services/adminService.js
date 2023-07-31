import axiosInstance from "./axiosInstance";
const adminService = {
  getStatistics: async (setData) => {
    try {
      await axiosInstance.get("/admin/statistics").then((res) => {
        setData(res?.data);
      });
    } catch (error) {}
  },
};
export default adminService;
