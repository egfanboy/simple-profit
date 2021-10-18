import { Table } from "antd";

const columns = [
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
];

export const ExpenseTable = (props) => {
  return (
    <Table
      style={{ width: "100%", marginTop: "20px" }}
      columns={columns}
      pagination={false}
      dataSource={props.moneyItems}
    ></Table>
  );
};
