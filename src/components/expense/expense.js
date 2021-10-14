import { InputNumber, Space, Select, Button } from "antd";
import { useState } from "react";

import "./expense.scss";

const OPTIONS = [
  {
    value: "profit",
    label: "Profit",
  },
  { value: "expense", label: "Expense" },
];

export const AddExpense = (props) => {
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState(OPTIONS[0].value);

  const reset = () => {
    setAmount(0);
    setType(OPTIONS[0].value);
  };

  const handleSubmit = () => {
    reset();
    props.addExpense && props.addExpense({ amount, type });
  };

  return (
    <Space className="sp-add-expense" direction="vertical" align="center">
      <InputNumber
        className="sp-add-expense__field"
        value={amount}
        onChange={(e) => setAmount(e)}
        size="large"
        min={0}
      />

      <Select
        className="sp-add-expense__field"
        value={type}
        size="large"
        onChange={(v) => setType(v)}
      >
        {OPTIONS.map((opt) => (
          <Select.Option key={opt.label} value={opt.value}>
            {opt.label}
          </Select.Option>
        ))}
      </Select>
      <Button type="primary" onClick={handleSubmit}>
        Add
      </Button>
    </Space>
  );
};
