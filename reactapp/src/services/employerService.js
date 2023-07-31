import axiosInstance from "./axiosInstance";
const employerService = {
  createEmployer: async (formData, onRegister) => {
    try {
      await axiosInstance.post("/employer", formData).then((res) => {
        let data = res?.data;
        for (let key in data) {
          localStorage.setItem(key, data[key]);
        }
        onRegister(res?.status);
      });
    } catch (error) {}
  },
  getAllEmployers: async (setData) => {
    try {
      await axiosInstance.get("/employer").then((res) => {
        setData(res?.data);
      });
    } catch (error) {}
  },
  getEmployerById: async (id, setData) => {
    try {
      await axiosInstance.get(`/employer?id=${id}`).then((res) => {
        setData(res?.data?.[0]);
      });
    } catch (error) {}
  },
  updateEmployerById: async (id, formData, onSuccess) => {
    try {
      await axiosInstance.put(`/employer?id=${id}`, formData).then((res) => {
        onSuccess(res?.status);
      });
    } catch (error) {
      onSuccess(error?.response?.status);
    }
  },
  getEmployerStatistics: async (id, setData) => {
    try {
      await axiosInstance.get(`/employer/statistics/${id}`).then((res) => {
        setData(res?.data);
      });
    } catch (error) {}
  },
  getAllCandidates: async (id, setData) => {
    try {
      await axiosInstance.get(`/employer/${id}/candidates`).then((res) => {
        setData(res?.data);
      });
    } catch (error) {}
  },
};
export default employerService;
