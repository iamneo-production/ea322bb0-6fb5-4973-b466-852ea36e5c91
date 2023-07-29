import { Space, Layout, Button, Input } from "antd";
import MyTable from "../../components/Table";
import { useState, useRef, useEffect } from "react";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import "./index.css";
import reportsData from "./reportsData";
const { Header, Content } = Layout;
function Reports() {
  /**
   * The defaultTitle function returns the string "Reports" for the heading of the table.
   */
  const defaultTitle = () => "Reports";

  /* This state variable is used to determine whether there is data to be displayed in the table. */
  const [hasData, setHasData] = useState(true);

  /* These lines of code are defining state variables and a ref variable for handling search
  functionality in the table. */
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  /*  This state variable is used to store the data that will be displayed in the table. */
  const [data, setData] = useState([]);

  /**
   * The function handles search and reset functionality for a table.
   * @param selectedKeys - selectedKeys is an array that contains the selected filter values for a
   * specific column in a table.
   * @param confirm - The `confirm` parameter is a function that is used to confirm the selected search
   * filters. It is typically called after the search filters have been applied.
   * @param dataIndex - The `dataIndex` parameter represents the key or index of the column being
   * searched. It is used to identify the column in the table or data structure where the search is
   * being performed.
   */
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  /**
   * The handleReset function clears the filters and resets the search text.
   * @param clearFilters - The clearFilters parameter is a function that is used to clear any applied
   * filters in a search functionality.
   */
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  /**
   * The function `getColumnSearchProps` returns an object with properties and methods that can be used
   * to implement a search filter for a specific column in a table.
   * @param dataIndex - The `dataIndex` parameter is the key or index of the column in the data source
   * that you want to apply the search functionality to. It is used to identify the specific column in
   * the table.
   */
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

  /* The `columns` constant is an array of objects that define the columns for the table in the
  `Reports` component. Each object represents a column and contains properties such as `dataIndex`,
  `title`, `width`, `render`, and `...getColumnSearchProps()`. */
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

  /**
   * The handleDelete function filters out an item from the data array based on its key and updates the
   * data array.
   * @param key - The `key` parameter is the unique identifier of the item that needs to be deleted from
   * the `data` array.
   */
  const handleDelete = (key) => {
    let d = data.filter((item) => item.key !== key);
    setData(d);
  };

  /* The `useEffect` hook is used to load data when the component is mounted. */
  useEffect(() => {
    loadData();
  }, []);

  /**
   * The function `loadData` sets the data to `reportsData`.
   */
  const loadData = () => {
    setData(reportsData);
  };

  /* The `headerStyle` constant is an object that defines the CSS styles for the header of the `Reports`
component. */
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
        <Content>
          {/* The `<MyTable>` component is being used to render a table with data with the specified props. */}
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
