import { Table, Button } from "antd";

import { DeleteOutlined } from "@ant-design/icons";
import { formatAmount } from "../../utils/currency";

export const ExpenseTable = ({ moneyItems, deleteExpense }) => {
  const columns = [
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (text) => <p>{formatAmount(text)}</p>,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        return (
          <Button
            type="danger"
            shape="circle"
            icon={<DeleteOutlined />}
            // Key is the index of the expense array
            onClick={() => deleteExpense && deleteExpense(record.key)}
          ></Button>
        );
      },
    },
  ];

  return (
    <Table
      style={{ width: "100%", marginTop: "10px" }}
      columns={columns}
      pagination={{ position: "topLeft", pageSize: "10" }}
      dataSource={moneyItems.map((mi, i) => ({ ...mi, key: i }))}
    ></Table>
  );
};
