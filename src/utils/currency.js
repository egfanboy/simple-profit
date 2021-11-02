export const formatAmount = (value) =>
  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const parseAmount = (value) => value.replace(/\$\s?|(,*)/g, "");
