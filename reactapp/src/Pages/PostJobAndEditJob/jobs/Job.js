import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import jobService from "../../../services/jobService";

const Job = (props) => {
  const { type, toast, setViewModifyState, jobId, modalClose, alreadyApplied } =
    props;
  const isAddType = type === "ADD";
  const isViewType = type === "VIEW";
  const [initialValues, setInitialValues] = useState(false);
  const isEmployer = localStorage.getItem("role") === "employer";
  const isJobSeeker = localStorage.getItem("role") === "jobseeker";
  const jobSeekerId = localStorage.getItem("jobSeekerId");
  const [form] = Form.useForm();
  const [job, setJob] = useState({});
  const onSuccess = (status) => {
    if (status >= 200 && status < 300) {
      toast.success("Job Posted Successfully");
    } else {
      toast.error("Job Post Failed");
    }
    setViewModifyState("VIEW");
    modalClose();
  };
  const onFinish = (values) => {
    values["employer"] = { id: localStorage.getItem("employerId") };
    jobService.postJob(values, onSuccess);
  };
  const onUpdate = (status) => {
    if (status >= 200 && status < 300) {
      toast.success("Job Update Success");
      setViewModifyState("VIEW");
      modalClose();
    } else {
      toast.error("Job Update Failed");
    }
  };
  const onApplicationSuccess = (status) => {
    if (status >= 200 && status < 300) {
      toast.success("Job Application Success");
      modalClose();
    } else {
      toast.error("Job Application Failed");
    }
  };
  const applyToJob = () => {
    jobService.applyToJob(jobId, jobSeekerId, onApplicationSuccess);
    let jobs = [];
    jobs.push(localStorage.getItem("jobsApplied"));
    jobs.push(jobId);
    localStorage.setItem("jobsApplied", jobs);
  };
  const updateJob = () => {
    const updatedData = {
      title: form.getFieldValue("title"),
      location: form.getFieldValue("location"),
      description: form.getFieldValue("description"),
      requirements: form.getFieldValue("requirements"),
    };
    jobService.updateJobById(jobId, updatedData, onUpdate);
  };

  useEffect(() => {
    const loadData = async () => {
      !isAddType && (await jobService.getJobById(jobId, setJob));
    };
    loadData().then(() => {
      setInitialValues(true);
    });
  }, [initialValues]);
  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <div className="container">
        <div className="row">
          <div className="offset-md-0">
            {initialValues && (
              <Form
                form={form}
                name="register"
                onFinish={onFinish}
                scrollToFirstError
                initialValues={job}
              >
                <div className="border rounded p-4 mt-2 shadow">
                  <h2 className="text-center m-4">
                    {isAddType
                      ? "Add a Job"
                      : isViewType
                      ? "Job Details"
                      : "Edit Job Details"}
                  </h2>
                  <Form.Item
                    className="mb-3 form-label"
                    name="title"
                    label="Title"
                    tooltip={isAddType ? "Please enter the Job Post Title" : ""}
                    rules={[
                      {
                        required: true,
                        message: "Please input the Job Title!",
                        whitespace: true,
                      },
                      {
                        pattern: /^[a-zA-Z0-9 ,.'-]+$/i,
                        message: "Please enter a valid Job Title",
                      },
                    ]}
                  >
                    <Input
                      disabled={isViewType}
                      value={!isAddType ? job?.title : ""}
                      className="form-control opacity-75 w-100"
                    />
                  </Form.Item>

                  <Form.Item
                    className="mb-3 form-label"
                    name="location"
                    label="Job Location"
                    tooltip={isAddType ? "Please enter the Job Location" : ""}
                    rules={[
                      {
                        required: true,
                        message: "Please input the Job Location!",
                        whitespace: true,
                      },
                      {
                        pattern: /^[a-zA-Z0-9 ,.'-]+$/i,
                        message: "Please enter a valid Job Location",
                      },
                    ]}
                  >
                    <Input
                      disabled={isViewType}
                      value={!isAddType ? job?.location : ""}
                      className="form-control opacity-75 w-100"
                    />
                  </Form.Item>
                  <Form.Item
                    className="mb-3 form-label"
                    name="requirements"
                    label="Requirements"
                    tooltip={
                      isAddType ? "Please enter the Job Requirements" : ""
                    }
                    rules={[
                      {
                        required: true,
                        message: "Please input the Job Requirements!",
                        whitespace: true,
                      },
                      {
                        pattern: /^[a-zA-Z0-9 ,.'-]+$/i,
                        message: "Please enter a valid Job Requirement",
                      },
                    ]}
                  >
                    <TextArea
                      disabled={isViewType}
                      className="form-control opacity-75 w-100"
                    />
                  </Form.Item>

                  <Form.Item
                    className="mb-3 form-label"
                    name="description"
                    label="Job Description"
                    tooltip={
                      isAddType ? "Please enter the Job Description" : ""
                    }
                    rules={[
                      {
                        required: true,
                        message: "Please input the Job Description!",
                        whitespace: true,
                      },
                      {
                        pattern: /^[a-zA-Z0-9 ,.'-]+$/i,
                        message: "Please enter a valid Job Description",
                      },
                    ]}
                  >
                    <TextArea
                      disabled={isViewType}
                      className="form-control opacity-75 w-100"
                    />
                  </Form.Item>
                  <div className="d-flex justify-content-center">
                    <Form.Item>
                      {isAddType ? (
                        <Button type="primary" htmlType="submit">
                          Submit
                        </Button>
                      ) : (
                        !isViewType && (
                          <Button
                            type="primary"
                            htmlType="submit"
                            onClick={(e) => {
                              e.preventDefault();
                              updateJob();
                            }}
                          >
                            Update Job
                          </Button>
                        )
                      )}
                    </Form.Item>

                    {isViewType && isEmployer && (
                      <Button
                        type="primary"
                        className="btn btn-outline-secondary"
                        onClick={() => {
                          setViewModifyState("MODIFY");
                        }}
                      >
                        Edit Job Details
                      </Button>
                    )}
                    {isJobSeeker && (
                      <Button
                        disabled={alreadyApplied ? true : false}
                        style={{
                          padding: "5px",
                          margin: 0,
                        }}
                        type="primary"
                        className="btn btn-outline-primary"
                        onClick={() => {
                          applyToJob();
                        }}
                      >
                        {alreadyApplied ? "Already Applied" : "Apply For Job"}
                      </Button>
                    )}
                  </div>
                </div>
              </Form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
