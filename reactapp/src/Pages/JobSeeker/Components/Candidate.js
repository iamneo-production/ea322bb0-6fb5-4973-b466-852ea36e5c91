// import statements
import "./Candidate.css";
import axios from "axios";
import "antd/dist/reset.css";
import { Button, Checkbox, Form, Input } from "antd";
import { React, useState, useEffect } from "react";


function Candidate(props) {
  const [userData, setUserData] = useState({});  
  const { type } = props;
  const isAddType = type === "ADD";
  const isViewType = type === "VIEW";
  const [form] = Form.useForm();
  const toast = props.toast;
  const onFinish = (values) => {
    axios
      .post("http://localhost:8080/job-seekers", values)  //post form values to backend
      .then((userData) => {
        console.log(userData);
        props.setViewModifyState("VIEW");
      })
      .catch((err) => console.log(err));
  };
  const deleteAccount = () => {
    axios
      .delete(`http://localhost:8080/job-seekers/${props?.uid}`) //for deleting current user
      .then((user) => {
        // Routing code to go to HomePage after deletion of Account, if necessary
        toast.success("User Profile has been deleted successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((err) => console.log(err));
  };

  // updates the current user details
  const updateUser = () => {
    const updatedData = {
      id: props?.uid,
      name: form.getFieldValue("name"),
      location: form.getFieldValue("location"),
      experience: form.getFieldValue("experience"),
      skills: form.getFieldValue("skills"),
    };
    axios
      .put(`http://localhost:8080/job-seekers`, updatedData)
      .then((user) => {
        // Toastify Message to notify user about data updation status and redirect.
        toast.success("User Profile has been updated successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });

        props.setViewModifyState("VIEW");
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    !isAddType &&
      axios
        .get(`http://localhost:8080/job-seekers/${props?.uid}`) // gets current user
        .then((user) => {          
          
          setUserData(user.data[0]);
        })
        .catch((err) => console.log(err));
  }, [isAddType, isViewType]);  
  

  

  return (
    <div className="body">
      <div className="App">
        <h1 className="h1"> My Profile </h1>
        {isViewType && (
          <Button
            type="primary"
            className="editProfileButton"     // for editing the details of the current user
            onClick={() => {
              props?.setViewModifyState("MODIFY"); //Add, VIEW, MODIFY
            }}
          >
            Edit Profile
          </Button>
        )}
        
        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
          initialValues={userData}
        >
          
          <Form.Item
            initialValue={!isAddType ? userData?.name : ""}
            name="name"
            label="Name"
            tooltip="Please enter your first name"
            className="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
                whitespace: true,
              },
              {
                pattern: /^[a-z ,.'-]+$/i,
                message: "Please enter a valid name",
              },
            ]}
          >
            <Input  disabled={isViewType} placeholder= {userData.name}/>
          </Form.Item>

          

          <Form.Item
            initialValue={!isAddType ? userData?.location : ""}
            name="location"
            label="Location"
            tooltip="Please enter your location"
            className="location"
            rules={[
              {
                required: true,
                message: "Please input your location!",
                whitespace: true,
              },
              {
                pattern: /^[a-z ,.]+$/i,
                message: "Please enter a location",
              },
            ]}
          >
            <Input disabled={isViewType} placeholder= {userData.location}/>
          </Form.Item>

          <Form.Item
            initialValue={!isAddType ? userData?.experience : ""}
            name="experience"
            label="Experience"
            className="experience"
            rules={[
              {
                required: true,
                message: "Please input experience",
              },
              {
                pattern: /^[a-z0-9 ,.'-]+$/i,
                message: "Please enter a valid experience",
              },
            ]}
          >
            <Input.TextArea showCount maxLength={100} disabled={isViewType}  placeholder= {userData.experience}/>
          </Form.Item>

          <Form.Item
            initialValue={!isAddType ? userData?.skills : ""}
            name="skills"
            label="Skills"
            className="skills"
            rules={[
              {
                required: true,
                message: "Please input skills",
              },
              {
                pattern: /^[a-z ,.'-]+$/i,
                message: "Please enter a valid skills",
              },
            ]}
          >
            <Input.TextArea  showCount maxLength={100} disabled={isViewType} placeholder= {userData.skills}/>
          </Form.Item>

          <Form.Item
            className=""
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Should accept verification")),
              },
            ]}
          >
            {isAddType && (
              <Checkbox>
                I have checked and verified all my information.
              </Checkbox>
            )}
          </Form.Item>
          <Form.Item>
            {isAddType ? (
              <Button type="primary" 
              htmlType="submit" 
              >
                Submit
              </Button>
            ) : (
              !isViewType && (                // for updating the profile
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    updateUser();                    
                                        
                  }}
                >
                  Update Profile
                </Button>
              )
            )}

            {isViewType && (            //for deleting account
              <Button
                type="primary"
                className="deleteAccountButton"
                onClick={deleteAccount}
              >
                Delete Account
              </Button>
            )}
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Candidate;
