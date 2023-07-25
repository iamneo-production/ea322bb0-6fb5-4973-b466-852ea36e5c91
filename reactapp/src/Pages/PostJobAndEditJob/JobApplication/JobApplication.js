import React from "react";
import { Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

const JobApplication = (props) => {
  const { jobApplicationData } = props;

  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <div className="container">
        <div className="row">
          <div className="offset-md-0">
            {jobApplicationData && (
              <Form
                name="jobApplication"
                scrollToFirstError
                initialValues={jobApplicationData}
              >
                <div className="border rounded p-4 mt-2 shadow">
                  <h2 className="text-center m-4">Job Application Details</h2>
                  <Form.Item
                    className="mb-3 form-label"
                    name="job-title"
                    label="Job Title"
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
                      disabled={true}
                      value={jobApplicationData}
                      className="form-control opacity-75 w-100"
                    />
                  </Form.Item>

                  <Form.Item
                    className="mb-3 form-label"
                    name="job-location"
                    label="Job Location"
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
                      disabled={true}
                      value={jobApplicationData}
                      className="form-control opacity-75 w-100"
                    />
                  </Form.Item>
                  <Form.Item
                    className="mb-3 form-label"
                    name="job-requirements"
                    label="Job Requirements"
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
                      style={{ resize: "none" }}
                      disabled={true}
                      className="form-control opacity-75 w-100"
                    />
                  </Form.Item>

                  <Form.Item
                    className="mb-3 form-label"
                    name="job-description"
                    label="Job Description"
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
                      style={{ resize: "none" }}
                      disabled={true}
                      className="form-control opacity-75 w-100"
                    />
                  </Form.Item>
                  <Form.Item
                    className="mb-3 form-label"
                    name="jobSeeker-name"
                    label="Job Seeker Name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Name!",
                        whitespace: true,
                      },
                      {
                        pattern: /^[a-zA-Z ,.'-]+$/i,
                        message: "Please enter a valid Name",
                      },
                    ]}
                  >
                    <Input
                      disabled={true}
                      value={jobApplicationData}
                      className="form-control opacity-75 w-100"
                    />
                  </Form.Item>
                  <Form.Item
                    className="mb-3 form-label"
                    name="jobSeeker-mailId"
                    label="Job Seeker E-Mail"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Location!",
                        whitespace: true,
                      },
                      {
                        pattern: /^[a-zA-Z ,.'-]+$/i,
                        message: "Please enter a valid Location",
                      },
                    ]}
                  >
                    <Input
                      disabled={true}
                      value={jobApplicationData}
                      className="form-control opacity-75 w-100"
                    />
                  </Form.Item>
                  <Form.Item
                    className="mb-3 form-label"
                    name="jobSeeker-location"
                    label="Job Seeker Location"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Location!",
                        whitespace: true,
                      },
                      {
                        pattern: /^[a-zA-Z ,.'-]+$/i,
                        message: "Please enter a valid Location",
                      },
                    ]}
                  >
                    <Input
                      disabled={true}
                      value={jobApplicationData}
                      className="form-control opacity-75 w-100"
                    />
                  </Form.Item>
                  <Form.Item
                    className="mb-3 form-label"
                    name="jobSeeker-experience"
                    label="Job Seeker Experience"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Previous Job Experience",
                        whitespace: true,
                      },
                      {
                        pattern: /^[a-zA-Z0-9 ,.'-]+$/i,
                        message: "Please enter a valid Job Experience",
                      },
                    ]}
                  >
                    <TextArea
                      style={{ resize: "none" }}
                      disabled={true}
                      className="form-control opacity-75 w-100"
                    />
                  </Form.Item>

                  <Form.Item
                    className="mb-3 form-label"
                    name="jobSeeker-skills"
                    label="Job Seeker Skills"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Skills!",
                        whitespace: true,
                      },
                      {
                        pattern: /^[a-zA-Z0-9 ,.'-]+$/i,
                        message: "Please enter a valid Skill",
                      },
                    ]}
                  >
                    <TextArea
                      style={{ resize: "none" }}
                      disabled={true}
                      className="form-control opacity-75 w-100"
                    />
                  </Form.Item>
                </div>
              </Form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplication;
