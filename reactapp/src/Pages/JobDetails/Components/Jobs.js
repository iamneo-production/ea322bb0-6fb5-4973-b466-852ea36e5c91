import axios from "axios";
import React, { useEffect, useState } from "react";
import JobDetailsModal from "./JobDetails";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    loadJobs();
  }, []);
  const loadJobs = async () => {
    const result = await axios.get("http://localhost:8080/jobs");
    setJobs(result.data);
  };
  const [open, setOpen] = useState(false);
  const [jobId, setJobId] = useState(null);
  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr>
                <th key={index}>{index + 1}</th>
                <td>{job.title}</td>
                <td>
                  <button
                    onClick={() => {
                      setOpen(true);
                      setJobId(job.id);
                    }}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {open && <JobDetailsModal open={open} setOpen={setOpen} id={jobId} />}
    </>
  );
}
