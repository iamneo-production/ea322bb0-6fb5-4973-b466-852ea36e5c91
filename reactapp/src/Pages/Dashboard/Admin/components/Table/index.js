import { Table } from "antd";
import "./index.css";

const MyTable = (props) => {
  const { columns, data, hasData, defaultTitle } = props;


  const tableColumns = columns.map((item, key) => ({
    ...item,
    ...{ key: key },
    ellipsis: true,
  }));
  const tableProps = {
    bordered: true,
    loading: false,
    size: "large",
    expandable: undefined,
    title: defaultTitle,
    showHeader: true,
    scroll: { y: 240 },
    tableLayout: undefined,
  };
  return (
    <>
      <Table
        {...tableProps}
        pagination={{
          position: ["none", "bottomCenter"],
          defaultCurrent: 1,
          pageSize: 15,
        }}
        rowKey={(tableColumns) => tableColumns.id}
        columns={tableColumns}
        dataSource={hasData ? data : []}
        scroll={{ y: 240 }}
        style={{ tableLayout: { maxHeight: "20px" } }}
      />
    </>
  );
};
export default MyTable;
