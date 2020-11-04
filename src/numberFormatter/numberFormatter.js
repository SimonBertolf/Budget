const numberFormatter = {
  formattCurrency(number) {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'CHF' }).format(number);
  },
  formattNumber(number) {
    return new Intl.NumberFormat('de-DE', { maximumFractionDigits: 2 }).format(number);
  },
  formattPercent(number) {
    const value = number * 100;
    return `${value}%`;
  },
};

export default numberFormatter;
