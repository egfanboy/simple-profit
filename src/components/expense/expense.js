import { InputNumber, Space, Select, Button, Input } from "antd";
import { useState } from "react";
import { parseAmount, formatAmount } from "../../utils/currency";

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
  const [description, setDescription] = useState("");

  const reset = () => {
    setAmount(0);
    setDescription("");
  };

  const handleSubmit = () => {
    reset();
    props.addExpense && props.addExpense({ amount, type, description });
  };

  return (
    <Space className="sp-add-expense" direction="vertical" align="center">
      <InputNumber
        className="sp-add-expense__field"
        value={amount}
        onChange={(e) => setAmount(e)}
        size="large"
        formatter={formatAmount}
        parser={parseAmount}
        min={0}
      />

      <Input
        placeholder="description"
        className="sp-add-expense__field"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        size="large"
      ></Input>

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
      <Button type="primary" onClick={handleSubmit} disabled={!amount}>
        Add
      </Button>
    </Space>
  );
};
