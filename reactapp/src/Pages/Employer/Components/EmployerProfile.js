// import React ,{useState} from 'react'
// import axios from "axios";
// import { Layout, Modal , Descriptions} from 'antd';
// import { useNavigate } from "react-router-dom";

// const {  Content } = Layout;

// const contentStyle = {
//   padding:25,
//   textAlign: 'center',
//   minHeight: '50vh',
//   lineHeight: '5vh',
//   overflow: 'auto',
//   backgroundColor:"#E7E3F7",
  
// };

// export default function EmployerProfile() {
//     const navigate = useNavigate();
//     const [modal2Open, setModal2Open] = useState(true); 
//     const [employer,setEmployer]=useState({});
//     const { employerId } = useParams(); 
//     const getemployerbyid=()=>{
//     axios.get(`http://localhost:8080/employers/id?id=${employerId}`).then(
//      (response)=>{
//         console.log(response.data);
//         setEmployer(response.data);
//      },
//      (error)=>{
//        console.log(error);
//        toast.error("something went wrong");
//      }
//    );
//  };
//  useEffect(()=>{
//      getemployerbyid();
//  },[]);
//   return (
//     <div> 
//         <Modal
//         title="Employer Profile"
//         centered
//         open={modal2Open}
//         onOk={() => {setModal2Open(false) 
//                 navigate(-1)}}
//         onCancel={()=> {setModal2Open(false)
//                     navigate(-1)}}
//         width={1000}
//         >
//         <Content style={contentStyle}>
//             <div >
//               <Descriptions title="Employer's Info" column={1}>
//               <Descriptions.Item label="Name">{employer.name}</Descriptions.Item>
//               <Descriptions.Item label="Location" >{employer.location}</Descriptions.Item>
//               <br/>
//               <Descriptions.Item label="Description" >{employer.description}</Descriptions.Item>
//               </Descriptions>
//             </div>
//         </Content>
//     </Modal>
//     </div>
//   )
// }
