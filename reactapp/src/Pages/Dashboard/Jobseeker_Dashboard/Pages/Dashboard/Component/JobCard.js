import { Card, Space } from "antd";
import Link from "antd/es/typography/Link";
import Typography from "antd/es/typography/Typography";
function JobCard({jobDetail}) {
    return (
        <Card id="JobCard" >
            <Space direction="horizontal">
            <Space direction="vertical" >
            <div className="JobCard_text">
            <Typography.Title level={5} style={{ marginTop:"0px"}}>{jobDetail?.title}</Typography.Title>
            <Typography.Text level={3} style={{ marginTop:"0px",display:"block"}}>{jobDetail?.employerName}</Typography.Text>
            <Typography.Text level={2} style={{}}>{jobDetail?.location}</Typography.Text>
            <br />
            <a  style={{textAlign:"left",marginLeft:"-8px",color:'blue'}} onClick={()=>{
                console.log("Code to call the overlay model with the specific job id of this component")
            }}>View Job</a>
            </div>
            </Space>
            </Space>
        </Card>
    );
    
}

export default JobCard;