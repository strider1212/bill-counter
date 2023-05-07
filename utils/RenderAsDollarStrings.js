export const RenderAsDollarStrings = list => {
  let newBillsList = [];

  for (let i = 0; i < list.length; i++) {
    newBillsList.push(`$${list[i]}`)
  }

  return newBillsList;
}