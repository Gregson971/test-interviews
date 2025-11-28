// Simplify / Refactorize this function
const calculateDiscount = (amount, type, years) => {
  // Calculate year-based discount (capped at 5%)
  const yearDiscount = Math.min(years, 5) / 100;

  // Define base discount rates by customer type
  const baseDiscountRates = {
    1: 0, // 0% base discount
    2: 0.1, // 10% base discount
    3: 0.3, // 30% base discount
    4: 0.5, // 50% base discount
  };

  const baseDiscountRate = baseDiscountRates[type] || 0;

  // Apply both discounts: final = amount × (1 - baseDiscount) × (1 - yearDiscount)
  const amountAfterBaseDiscount = amount * (1 - baseDiscountRate);
  return amountAfterBaseDiscount * (1 - yearDiscount);
};

// Export the function for use in tests
module.exports = calculateDiscount;
