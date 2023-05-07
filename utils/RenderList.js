export const RenderList = (bills) => {
  const list = document.getElementById("bill-list");

  bills.forEach(bill => {
    const listItem = document.createElement("li");
    listItem.textContent = bill;
    list.appendChild(listItem);
  })

}