import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import jobSeekerService from "../../../services/jobSeekerService";
const JobSeekerProfile = (props) => {
  const {
    type,
    toast,
    setViewModifyState,
    jsId,
    modalClose,
    title,
    setJobSeekerName,
  } = props;
  const isAddType = type === "ADD";
  const isViewType = type === "VIEW";
  const isJobSeeker = localStorage.getItem("role") === "jobseeker";
  const [initialValues, setInitialValues] = useState(false);
  const [form] = Form.useForm();
  const [jobSeeker, setJobSeeker] = useState({});
  const onUpdate = (status) => {
    if (status >= 200 && status < 300) {
      toast.success("Profile Update Success");
      localStorage.setItem("jobSeekerName", form.getFieldValue("name"));
      setJobSeekerName(form.getFieldValue("name"));
      setViewModifyState("VIEW");
      modalClose();
    } else {
      toast.error("Profile Update Failed");
    }
  };
  const updateJobSeeker = () => {
    const updatedData = {
      name: form.getFieldValue("name"),
      location: form.getFieldValue("location"),
      skills: form.getFieldValue("skills"),
      experience: form.getFieldValue("experience"),
    };
    jobSeekerService.updateJobSeekerById(jsId, updatedData, onUpdate);
  };
  useEffect(() => {
    const loadData = async () => {
      !isAddType &&
        (await jobSeekerService.getJobSeekerById(jsId, setJobSeeker));
    };
    loadData().then(() => {
      setInitialValues(true);
    });
  }, [jobSeeker]);
  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <div className="container">
        <div className="row">
          <div className="offset-md-0">
            {initialValues && (
              <Form
                form={form}
                name="register"
                scrollToFirstError
                initialValues={jobSeeker}
              >
                <div className="border rounded p-4 mt-2 shadow">
                  <h2 className="text-center m-4">
                    {!isAddType && isViewType
                      ? title
                        ? title
                        : "Profile Details"
                      : "Edit Profile"}
                  </h2>
                  <Form.Item
                    className="mb-3 form-label"
                    name="name"
                    label="Name"
                    tooltip={isAddType ? "Please enter your Name" : ""}
                    rules={[
                      {
                        message: "Please input your Name!",
                        whitespace: true,
                      },
                      { ...(!isViewType && { required: true }) },
                      {
                        pattern: /^[a-zA-Z ,.'-]+$/i,
                        message: "Please enter a valid Name",
                      },
                    ]}
                  >
                    <Input
                      disabled={isViewType}
                      value={!isAddType ? jobSeeker?.title : ""}
                      className="form-control opacity-75 w-100"
                    />
                  </Form.Item>
                  {isViewType && (
                    <Form.Item
                      className="mb-3 form-label"
                      name="emailId"
                      label="Email ID"
                    >
                      <Input
                        disabled={isViewType}
                        className="form-control opacity-75 w-100"
                      />
                    </Form.Item>
                  )}

                  <Form.Item
                    className="mb-3 form-label"
                    name="location"
                    label="Location"
                    tooltip={isAddType ? "Please enter your Location" : ""}
                    rules={[
                      {
                        message: "Please input your Location!",
                        whitespace: true,
                      },
                      { ...(!isViewType && { required: true }) },
                      {
                        pattern: /^[a-zA-Z ,.'-]+$/i,
                        message: "Please enter a valid Location",
                      },
                    ]}
                  >
                    <Input
                      disabled={isViewType}
                      value={!isAddType ? jobSeeker?.location : ""}
                      className="form-control opacity-75 w-100"
                    />
                  </Form.Item>
                  <Form.Item
                    className="mb-3 form-label"
                    name="experience"
                    label="Experience"
                    tooltip={
                      isAddType
                        ? "Please tell us about your Previous Job Experience"
                        : ""
                    }
                    rules={[
                      {
                        message: "Please input your Previous Job Experience",
                        whitespace: true,
                      },
                      { ...(!isViewType && { required: true }) },
                      {
                        pattern: /^[a-zA-Z0-9 ,.'-]+$/i,
                        message: "Please enter a valid Job Experience",
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
                    name="skills"
                    label="Skills"
                    tooltip={
                      isAddType ? "Please tell us about your skills" : ""
                    }
                    rules={[
                      {
                        message: "Please input your Skills!",
                        whitespace: true,
                      },
                      { ...(!isViewType && { required: true }) },
                      {
                        pattern: /^[a-zA-Z0-9 ,.'-]+$/i,
                        message: "Please enter a valid Skill",
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
                      {!isAddType && !isViewType && (
                        <Button
                          type="primary"
                          htmlType="submit"
                          onClick={(e) => {
                            e.preventDefault();
                            updateJobSeeker();
                          }}
                        >
                          Update Profile
                        </Button>
                      )}
                    </Form.Item>

                    {isViewType && isJobSeeker && (
                      <Button
                        type="primary"
                        className="btn btn-outline-secondary"
                        onClick={() => {
                          setViewModifyState("MODIFY");
                        }}
                      >
                        Edit Profile
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

export default JobSeekerProfile;
