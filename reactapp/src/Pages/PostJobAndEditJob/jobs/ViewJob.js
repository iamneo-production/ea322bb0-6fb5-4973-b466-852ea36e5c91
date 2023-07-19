import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ViewJobDetails = () => {
  const [job, setJob] = useState({
    title: '',
    requirements: '',
    description: '',
    location: '',
  });

  const { id } = useParams();

  const loadJobById = useCallback(async () => {
    const result = await axios.get(`http://localhost:8080/jobs/id?id=${id}`);
    setJob(result.data);
  }, [id]);

  useEffect(() => {
    loadJobById();
  }, [loadJobById]);

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-8'>
          <div className='view-job-container border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'>View Job</h2>
            <div className='card' style={{ width: '95%' }}>
              <div className='card-header'>
                <p className='text-center mb-3 h5'><b>Details of job by id:</b> {job.jobid}</p>
                <ul className='list-group'>
                  <li className='list-group-item'>
                    <b>Title:</b> {job.title}
                  </li>
                  <li className='list-group-item'>
                    <b>Requirements:</b> {job.requirements}
                  </li>
                  <li className='list-group-item'>
                    <b>Description:</b> {job.description}
                  </li>
                </ul>
              </div>
              <div className='card-footer text-center'>
                <Link className='btn btn-primary' to='/'>Back to Jobs</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewJobDetails;
