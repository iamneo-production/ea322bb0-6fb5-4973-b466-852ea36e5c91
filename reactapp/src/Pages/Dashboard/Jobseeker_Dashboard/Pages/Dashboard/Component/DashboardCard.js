import { Card, Space } from "antd";
import Statistic from "antd/es/statistic/Statistic";

function DashboardCard({title,value, icon}) {
    return (
        <Card className="DashboardCard">
            <Space direction="horizontal"style={{
                textAlign:"center",
                justifyContent:"center",
                justifyItems:"center",
                columnGap:"10px"
                
                }}>
                {icon}
                <br />
                <Statistic style={{textAlign:"justify"}} title={title} value={value} />
            </Space>
        </Card>
    );
    
}

export default DashboardCard;