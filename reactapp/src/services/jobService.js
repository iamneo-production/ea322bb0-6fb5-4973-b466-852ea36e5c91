import axiosInstance from "./axiosInstance";
const jobService = {
  postJob: async (formData, onSuccess) => {
    try {
      await axiosInstance.post("/jobs", formData).then((res) => {
        onSuccess(res?.status);
      });
    } catch (error) {
      onSuccess(error?.response?.status);
    }
  },
  getJobById: async (id, setData) => {
    try {
      await axiosInstance.get(`/jobs?id=${id}`).then((res) => {
        setData(res?.data?.[0]);
      });
    } catch (error) {}
  },
  updateJobById: async (id, formData, onSuccess) => {
    try {
      await axiosInstance.put(`/jobs?id=${id}`, formData).then((res) => {
        onSuccess(res?.status);
      });
    } catch (error) {
      onSuccess(error?.response?.status);
    }
  },
  getAllJobs: async (setData) => {
    try {
      await axiosInstance.get("/jobs").then((res) => {
        setData(res?.data);
      });
    } catch (error) {}
  },
  applyToJob: async (jobId, jobSeekerId, onSuccess) => {
    try {
      await axiosInstance
        .post(`/jobs/apply?jobId=${jobId}&jobSeekerId=${jobSeekerId}`)
        .then((res) => {
          onSuccess(res?.status);
        });
    } catch (error) {
      onSuccess(error?.response?.status);
    }
  },
  getAllJobsPostedByEmployer: async (empId, setData) => {
    try {
      await axiosInstance.get(`/jobs/employer/${empId}`).then((res) => {
        setData(res?.data);
      });
    } catch (error) {}
  },
  deleteJobById: async (id, onSuccess) => {
    try {
      await axiosInstance.delete(`/jobs?id=${id}`).then((res) => {
        onSuccess(res.status);
      });
    } catch (error) {}
  },
};

export default jobService;
