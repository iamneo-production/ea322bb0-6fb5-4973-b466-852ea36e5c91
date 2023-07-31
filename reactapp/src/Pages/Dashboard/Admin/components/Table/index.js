import { Table } from "antd";
import "./index.css";

const MyTable = (props) => {
  /*It is extracting the values of the properties `columns`, `data`, `hasData`,
  `defaultTitle`, and `rowKey` from the `props` object  */
  const { columns, data, hasData, defaultTitle, rowKey } = props;

  /* Its is creating a new array called `tableColumns` by mapping over the `columns` array. */
  const tableColumns = columns.map((item, key) => ({
    ...item,
    ...{ key: key },
    ellipsis: true,
  }));

  /* The `tableProps` object is defining the properties that will be passed to the `Table` component from
the `antd` library. These properties include: */
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
      {/* The code is rendering a table component using the `Table` component from the `antd` library. */
      /* The `rowKey={rowKey}` is setting the unique identifier for each row in the table. */}
      <Table
        {...tableProps}
        pagination={{
          position: ["none", "bottomCenter"],
          defaultCurrent: 1,
          pageSize: 15,
        }}
        rowKey={rowKey}
        columns={tableColumns}
        dataSource={hasData ? data : []}
        scroll={{ y: 240 }}
        style={{ tableLayout: { maxHeight: "20px" } }}
      />
    </>
  );
};
export default MyTable;
