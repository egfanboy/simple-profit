const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };

  return date.toLocaleDateString(navigator.language, options);
};
export const ProfitRollup = ({ moneyItems, startDate }) => {
  if (!moneyItems.length) {
    return null;
  }

  const profit = moneyItems.reduce((acc, item) => {
    if (item.type === "expense") {
      acc -= item.amount;
    } else {
      acc += item.amount;
    }

    return acc;
  }, 0);

  const C = profit < 0 ? NegativeProfit : PositiveProfit;

  return (
    <div>
      Since {formatDate(new Date(startDate))}
      <C amount={profit} />
    </div>
  );
};

const NegativeProfit = ({ amount }) => <span> you have lost: {amount}</span>;
const PositiveProfit = ({ amount }) => <span> you have made: {amount}</span>;
