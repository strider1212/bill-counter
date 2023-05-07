const billCounter = (target) => {
  let waysToCount = [];
  let counter = 0;

  const find = (bill, history) => {
    counter += bill;

    if (counter == target) {
      waysToCount.push(history)
    } else if (counter > target) {
      return null;
    } else {
      return  find(10, history !== '' ? `${history} + $${bill}` : '$10') ||
              find(5, history !== '' ? `${history} + $${bill}` : '$5') ||
              find(1, history !== '' ? `${history} + $${bill}` : '$1')
    }
  }

  find(0, "")

  return waysToCount;
}

console.log(billCounter(10))