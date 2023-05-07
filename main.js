import { BillCounter } from "./utils/BillCounter.js";

const bills = BillCounter(150)

const renderList = (bills) => {
  const list = document.getElementById("bill-list");

  bills.forEach(bill => {
    const listItem = document.createElement("li");
    listItem.textContent = bill;
    list.appendChild(listItem);
  })

}

renderList(bills)
