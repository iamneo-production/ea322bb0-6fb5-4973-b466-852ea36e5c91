import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Layout, Space } from "antd";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import MyTable from "../../components/Table";
const { Header, Content } = Layout;
function CompanyProfile() {
  const defaultTitle = () => "List of Companies";

  const [hasData, setHasData] = useState(true); // state is required
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    loadData();
  }, [data]);
  const loadData = async () => {
    const result = await axios.get("http://localhost:8080/employers");
    setData(result.data);
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>

          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: true,
      ...getColumnSearchProps("id"),
      width: "6%",
    },
    {
      title: "Name",
      dataIndex: "name",
      sorter: true,
      ...getColumnSearchProps("name"),
    },
    {
      title: "Email ID",
      dataIndex: "emailId",
      ...getColumnSearchProps("emailId"),
    },
    {
      title: "Description",
      dataIndex: "description",
      sorter: true,
      ...getColumnSearchProps("description"),
    },

    {
      title: "Location",
      dataIndex: "location",
      sorter: true,
      ...getColumnSearchProps("location"),
    },
    {
      title: "Action",
      key: "action",
      width: "15%",
      render: () => (
        <Space size="middle">
          <a href="/">View Profile</a>
        </Space>
      ),
    },
  ];

  const headerStyle = {
    textAlign: "center",
    color: "#000",
    fontSize: "25px",
    fontWeight: "bold",
    letterSpacing: "2px",
    height: 64,
    paddingInline: 50,
    lineHeight: "64px",
    backgroundColor: "#8282f296",
    position: "sticky",
  };
  return (
    <div>
      <Layout>
        <Header style={headerStyle}>Company Profile</Header>

        <Content>
          <MyTable
            defaultTitle={defaultTitle}
            columns={columns}
            data={data}
            hasData={hasData}
            setHasData={setHasData}
          />
        </Content>
      </Layout>
    </div>
  );
}
export default CompanyProfile;
