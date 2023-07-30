import { Space, Layout, Button, Input } from "antd";
import MyTable from "../../components/Table";
import { useState, useRef, useEffect } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { FaUser } from "react-icons/fa";
import Highlighter from "react-highlight-words";
import "./index.css";
import reportsData from "./reportsData";
const { Header, Content } = Layout;
function Reports() {
  const defaultTitle = () => "Reports";
  const [hasData, setHasData] = useState(true); // state is required
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [data, setData] = useState([]);
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
      dataIndex: "key",
      title: "S.No",
      width: "4%",
      render: (text, object, index) => index + 1,
    },
    {
      title: "Reporter Name",
      dataIndex: "reporterName",

      ...getColumnSearchProps("reporterName"),
    },
    {
      title: "Reported User Name",
      dataIndex: "reportedUserName",

      ...getColumnSearchProps("reportedUserName"),
    },
    {
      title: "Time",
      dataIndex: "reportTime",

      ...getColumnSearchProps("reportTime"),
    },
    {
      title: "Status",
      dataIndex: "status",

      ...getColumnSearchProps("status"),
    },

    {
      title: "Action",
      key: "action",
      width: "15%",
      render: (key) => (
        <Space size="middle">
          <p className="view-btn" onClick={() => {}}>
            View
          </p>
          <p
            className="delete-btn"
            onClick={() => {
              handleDelete(key.key);
            }}
          >
            Delete
          </p>
        </Space>
      ),
    },
  ];
  const handleDelete = (key) => {
    let d = data?.filter((item) => item.key !== key);
    setData(d);
  };
  useEffect(() => {
    loadData();
  }, []);
  const loadData = () => {
    setData(reportsData);
  };
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
        <Header style={headerStyle}>Reports</Header>
        <Content></Content>
        <Content>
          <MyTable
            defaultTitle={defaultTitle}
            rowKey={(tableColumns) => tableColumns.key}
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
export default Reports;
