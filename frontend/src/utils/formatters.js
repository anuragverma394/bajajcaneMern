// Formatters
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(amount);
};

export const formatPercentage = (value) => {
  return `${parseFloat(value).toFixed(2)}%`;
};

export const formatNumber = (num) => {
  return new Intl.NumberFormat('en-IN').format(num);
};

export default {
  formatCurrency,
  formatPercentage,
  formatNumber,
};
