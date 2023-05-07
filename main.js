import { BillCounter } from "./utils/BillCounter.js";
import { RenderAsDollarStrings } from "./utils/RenderAsDollarStrings.js";

const bills = BillCounter(257);

const stringBills = RenderAsDollarStrings(bills);

const list = document.getElementById("bill-list");

stringBills.forEach(item => {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  list.appendChild(listItem);
})

console.log(stringBills)
