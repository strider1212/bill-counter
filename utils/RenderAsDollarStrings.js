export const RenderAsDollarStrings = bills => {
  let billCounts = new Map();
  bills.forEach(bill => {
    billCounts.set(bill, (billCounts.get(bill) || 0) + 1)
  });

  const stringBills = [];
  billCounts.forEach((count, bill) => {
    const billString = count > 1 ? `$${bill} (x${count})` : `$${bill}`;
    stringBills.push(billString);
  });

  return stringBills;
}