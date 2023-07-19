import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MdDeleteOutline } from 'react-icons/md';
import { BiPencil } from 'react-icons/bi';
import { GrFormView } from 'react-icons/gr';

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    const result = await axios.get("http://localhost:8080/jobs");
    console.log(result.data);
    setJobs(result.data);
  }

  const deleteJob = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this job?");
    if (confirmDelete) {
      await axios.delete(`http://localhost:8080/jobs?id=${id}`)
      loadJobs();
    }
  }

  return (
    <div className='container'>
      <div className='py-4'>
        <div className='table-responsive-sm table-responsive-md'>
        <table className="table table-striped border shadow">
          <thead>
            <tr>
              <th scope="col" className='text-center'>S.No</th>
              {/* <th scope="col" className='text-center' >jobid</th>  */}
              <th scope="col" className='text-center'>title</th>
              <th scope="col" className='text-center'>description</th>
              <th scope="col" className='text-center'>requirements</th>
              <th scope="col" className='text-center'>location</th>
              <th scope="col" className='text-center'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              jobs.map((job, index) => (
                <tr key={index}>
                  <th scope="row" className="text-center">{index + 1}</th>
                  {/* <td className="text-center">{job.jobid}</td>  */}
                  <td className="text-center">{job.title}</td>
                  <td className="text-center">{job.description}</td>
                  <td className="text-center">{job.requirements}</td>
                  <td className="text-center">{job.location}</td>
                  <td className="text-center">
                    <div className="d-flex flex-column align-items-center">
                      <Link to={`/viewjob/${job.jobid}`}>
                        <button className='btn btn-primary mx-2 my-1 opacity-75'>
                          <GrFormView size={24} />
                        </button>
                      </Link>
                      <Link to={`/editjob/${job.jobid}`}>
                        <button className='btn btn-outline-success mx-2 my-1 opacity-75'>
                          <BiPencil size={24} />
                        </button>
                      </Link>
                      <button
                        className='btn btn-outline-danger mx-2 my-1 opacity-75'
                        onClick={() => deleteJob(job.jobid)}
                      >
                        <MdDeleteOutline size={24} />
                      </button>
                      <button className='btn btn-outline-primary mx-2 my-1 opacity-75'>
                          View Job Applicants
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        </div>
      </div>
    </div>
  )
}

export default Home;
