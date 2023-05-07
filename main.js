import { BillCounter } from "./utils/BillCounter.js";

const bills = BillCounter(257)

const renderAsDollarStrings = list => {
  let newBillsList = [];

  for (let i = 0; i < list.length; i++) {
    newBillsList.push(`$${bills[i]}`)
  }

  return newBillsList;
}

const stringBills = renderAsDollarStrings(bills)

console.log(stringBills)