import axiosInstance from "./axiosInstance";
const jobSeekerService = {
  createJobSeeker: async (formData, onRegister) => {
    try {
      await axiosInstance.post("/job-seekers", formData).then((res) => {
        let data = res?.data;
        for (let key in data) {
          localStorage.setItem(key, data[key]);
        }
        onRegister(res?.status);
      });
    } catch (error) {}
  },
  getAllJobSeekers: async (setData) => {
    try {
      await axiosInstance.get("/job-seekers").then((res) => {
        setData(res?.data);
      });
    } catch (error) {}
  },
  getJobSeekerById: async (id, setData) => {
    try {
      await axiosInstance.get(`/job-seekers?id=${id}`).then((res) => {
        setData(res?.data?.[0]);
      });
    } catch (error) {}
  },
  updateJobSeekerById: async (id, formData, onSuccess) => {
    try {
      await axiosInstance.put(`/job-seekers?id=${id}`, formData).then((res) => {
        onSuccess(res?.status);
      });
    } catch (error) {
      onSuccess(error?.response?.status);
    }
  },
  getJobSeekerStatistics: async (id, setData) => {
    try {
      await axiosInstance.get(`/job-seekers/statistics/${id}`).then((res) => {
        setData(res?.data);
      });
    } catch (error) {}
  },
  getAllAppliedJobs: async (id, setData) => {
    try {
      await axiosInstance.get(`/jobs/jobs-applied/${id}`).then((res) => {
        setData(res?.data);
      });
    } catch (error) {}
  },
};
export default jobSeekerService;
