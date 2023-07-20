import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddJob = () => {
  let navigate = useNavigate();

  const [job, setJob] = useState({
    title: '',
    requirements: '',
    description: '',
    location: '',
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setJob((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/jobs', job);
      toast.success('Posted successfully', {
        autoClose: 2000,
      });
      navigate('/');
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  return (
    <div style={{ backgroundColor: 'whitesmoke' }}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-9 offset-md-0'>
            <form onSubmit={submitHandler}>
              <div className='border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Add Job</h2>
                <div className='mb-3'>
                  <label htmlFor='title' className='form-label'>
                    Title
                  </label>
                  <input
                    type='text'
                    id='title'
                    className='form-control opacity-75 w-100'
                    name='title'
                    value={job.title}
                    placeholder='Enter role of a job'
                    onChange={changeHandler}
                    required
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='requirements' className='form-label'>
                    Requirements
                  </label>
                  <input
                    type='text'
                    id='requirements'
                    className='form-control opacity-75 w-100'
                    name='requirements'
                    value={job.requirements}
                    placeholder='Enter Requirements'
                    onChange={changeHandler}
                    required
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='location' className='form-label'>
                    Location
                  </label>
                  <input
                    type='text'
                    id='location'
                    className='form-control opacity-75 w-100'
                    name='location'
                    value={job.location}
                    placeholder='Enter location'
                    onChange={changeHandler}
                    required
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='description' className='form-label'>
                    Description
                  </label>
                  <textarea
                    id='description'
                    className='form-control opacity-75'
                    name='description'
                    value={job.description}
                    placeholder='Enter job description'
                    rows='4'
                    cols='50'
                    onChange={changeHandler}
                    required
                  ></textarea>
                </div>
                <div className='d-flex justify-content-center'>
                  <button type='submit' className='btn btn-outline-primary'>
                    Submit
                  </button>
                  <Link to={'/'}>
                    <button type='submit' className='btn btn-outline-danger mx-2'>
                      Cancel
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddJob;