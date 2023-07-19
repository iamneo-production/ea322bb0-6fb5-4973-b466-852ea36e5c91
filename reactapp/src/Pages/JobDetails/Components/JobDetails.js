import React, { useEffect, useState } from "react";
import { Button, Modal, Descriptions } from "antd";
import axios from "axios";

export default function JobDetailsModal({ id, open, setOpen }) {
  const [job, setJob] = useState([]);

  useEffect(() => {
    loadJob();
  }, []);

  const loadJob = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/jobs/?id=${id}`);
      const dataArray=response.data;
      if(dataArray.length>0){
        const first=dataArray[0];
        setJob(first);
      }
      
    } catch (error) {
      console.error(error);
    }
  };

  const showModal = () => {
    setOpen(true);
  };
  const handleApply = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        centered
        width={1000}
        open={open}
        onOk={handleApply}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Back
          </Button>,
          <Button key="link" href="#" type="primary" onClick={handleApply}>
            Apply
          </Button>,
        ]}
      >
        <Descriptions title="Job Details" column={2}>
          <Descriptions.Item label="Job id">{job.id}</Descriptions.Item>
          <Descriptions.Item label="Job Tittle">{job.title}</Descriptions.Item>
          <Descriptions.Item label="Job Description">
            {job.description}
          </Descriptions.Item>
          <Descriptions.Item label="Job Requirements">
            {job.requirements}
          </Descriptions.Item>
          <Descriptions.Item label="Job Location">
            {job.location}
          </Descriptions.Item>
        </Descriptions>
      </Modal>
    </>
  );
}
