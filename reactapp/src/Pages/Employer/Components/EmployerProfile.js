import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import employerService from "../../../services/employerService";
const EmployerProfile = (props) => {
  const {
    type,
    toast,
    setViewModifyState,
    empId,
    modalClose,
    title,
    setEmployerName,
  } = props;
  const isAddType = type === "ADD";
  const isViewType = type === "VIEW";
  const [initialValues, setInitialValues] = useState(false);
  const [form] = Form.useForm();
  const isEmployer = localStorage.getItem("role") === "employer";
  const [employer, setEmployerDetails] = useState({});
  const onUpdate = (status) => {
    if (status >= 200 && status < 300) {
      toast.success("Profile Update Success");
      localStorage.setItem("employerName", form.getFieldValue("name"));
      setEmployerName(form.getFieldValue("name"));
      setViewModifyState("VIEW");
      modalClose();
    } else {
      toast.error("Profile Update Failed");
    }
  };
  const updateEmployer = () => {
    const updatedData = {
      name: form.getFieldValue("name"),
      location: form.getFieldValue("location"),
      description: form.getFieldValue("description"),
    };
    employerService.updateEmployerById(empId, updatedData, onUpdate);
  };
  useEffect(() => {
    const loadData = async () => {
      !isAddType &&
        (await employerService.getEmployerById(empId, setEmployerDetails));
    };
    loadData().then(() => {
      setInitialValues(true);
    });
  }, [employer]);
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
                initialValues={employer}
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
                      value={!isAddType ? employer?.title : ""}
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
                      value={!isAddType ? employer?.location : ""}
                      className="form-control opacity-75 w-100"
                    />
                  </Form.Item>
                  <Form.Item
                    className="mb-3 form-label"
                    name="description"
                    label="Description"
                    tooltip={
                      isAddType ? "Please describe about your Company" : ""
                    }
                    rules={[
                      {
                        message: "Please input your Company Description",
                        whitespace: true,
                      },
                      { ...(!isViewType && { required: true }) },
                      {
                        pattern: /^[a-zA-Z0-9 ,.'-]+$/i,
                        message: "Please enter a valid Description",
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
                            updateEmployer();
                          }}
                        >
                          Update Profile
                        </Button>
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

export default EmployerProfile;
