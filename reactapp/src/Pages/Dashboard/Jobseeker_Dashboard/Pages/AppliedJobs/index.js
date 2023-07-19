import Typography from "antd/es/typography/Typography";
import { Button, Table, Modal, Space } from "antd";
import { useEffect, useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import './index.css'
import axios from "axios";

function Appliedjobs () {
 
  const [dataSource, setDataSource] = useState();
  useEffect(()=>{
    loadData();
  },[])
  const loadData = async() =>{
    // const result = await axios.get(`http://localhost:8081/jobs`);
    // setDataSource(result?.data);
    setDataSource([
      {
          id:1,
        company:"KPR Designers",
        jobTitle:"Grapichs Designer",
        location:"Chennai",
        email:"kprdesigner00@gmail.com",
      },
      {
          id:2,
        company:"KPR Designers",
        jobTitle:"Grapichs Designer",
        location:"Chennai",
        email:"kprdesigner00@gmail.com",
      },
      {
          id:3,
        company:"KPR Designers",
        jobTitle:"Grapichs Designer",
        location:"Chennai",
        email:"kprdesigner00@gmail.com",
      },
      {
          id:4,
        company:"KPR Designers",
        jobTitle:"Grapichs Designer",
        location:"Chennai",
        email:"kprdesigner00@gmail.com",
      },
      {
        id:5,
        company:"KPR Designers",
        jobTitle:"Grapichs Designer",
        location:"Chennai",
        email:"kprdesigner00@gmail.com",
      },
      {
        id:30,
        company:"Virtusa",
        jobTitle:"Java Developer",
        location:"Delhi",
        email:"virtusa@virtusa.com",
      },
      {
        id:5,
        company:"KPR Designers",
        jobTitle:"Grapichs Designer",
        location:"Chennai",
        email:"kprdesigner00@gmail.com",
      },
      {
        id:5,
        company:"KPR Designers",
        jobTitle:"Grapichs Designer",
        location:"Chennai",
        email:"kprdesigner00@gmail.com",
      },
      {
        id:5,
        company:"KPR Designers",
        jobTitle:"Grapichs Designer",
        location:"Chennai",
        email:"kprdesigner00@gmail.com",
      },
      {
        id:30,
        company:"Virtusa",
        jobTitle:"Java Developer",
        location:"Delhi",
        email:"virtusa@virtusa.com",
      },
      {
        id:30,
        company:"Virtusa",
        jobTitle:"Java Developer",
        location:"Delhi",
        email:"virtusa@virtusa.com",
      },
      {
        id:30,
        company:"Virtusa",
        jobTitle:"Java Developer",
        location:"Delhi",
        email:"virtusa@virtusa.com",
      },
      {
        id:30,
        company:"Virtusa",
        jobTitle:"Java Developer",
        location:"Delhi",
        email:"virtusa@virtusa.com",
      },
  
    ]);
  }
  const columns = [
    { 
      key:"1",
      title: "S.No",
      dataSource: {render: (index) => index + 1},
      align: "center",
    },
    {
      key: "2",
      title: "Company",
      dataIndex: "company",
      align: "center",
    },
    {
      key: "3",
      title: "Job Title",
      dataIndex: "jobTitle",
      align: "center",
    },
    {
      key: "4",
      title: "Email",
      dataIndex: "email",
      align: "center",
    },
    {
      key: "4",
      title: "Location",
      dataIndex: "location",
      align: "center",
    },
    {
      key: "5",
      align: "center",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <DeleteOutlined
              onClick={() => {
                onDeleteAppliedJobs(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  const onDeleteAppliedJobs = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this Job record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((appliedjobs) => appliedjobs.id !== record.id);
        });
      },
    });
  };
 
    return (
    <div style={{padding:"5px 0px 0px 50px"}} className="AppliedJob">
        
        <Typography.Title level={3}>Applied Jobs</Typography.Title>
        
        <Space className="Applied_job_topic" direction="horizontal">
        
        <Typography.Title level={4} style={{marginTop:"10px",marginLeft:"20px",color:"white"}}>Jobs Applied Table</Typography.Title>
        
        <Button  type="primary"
        style={{marginLeft:"38rem"
        }}>Apply for Jobs</Button> 
        
        </Space>
       
      <header>
        <br />
        <Table
         columns={columns} dataSource={dataSource} className="Applied_job_table"
         style={{width:"950px"}}>

         </Table>
      </header>
    </div>
    );
}

export default Appliedjobs;