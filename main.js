import { BillCounter } from "./utils/BillCounter.js";
import { RenderAsDollarStrings } from "./utils/RenderAsDollarStrings.js";

const billForm = document.getElementById('bill-form')

billForm.addEventListener("submit", e => {
  e.preventDefault();

  const billInput = document.getElementById('total').value;

  const bills = BillCounter(parseInt(billInput, 10));

  const stringBills = RenderAsDollarStrings(bills);

  const list = document.getElementById("bill-list");
  list.innerHTML = ""; 

  stringBills.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    list.appendChild(listItem);
  });

})



