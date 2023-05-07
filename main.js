const billCounter = (target) => {
  let billList = [];
  
  const billListTotal = () => {
    let count = 0;
    billList.map(item => {
      count += item;
    })
    return count;
  }

  const find = () => {

    if (billListTotal() + 100 <= target) {
      billList.push(100);
    } else if (billListTotal() + 50 <= target) {
      billList.push(50);
    } else if (billListTotal() + 20 <= target) {
      billList.push(20);
    } else if (billListTotal() + 10 <= target) {
      billList.push(10);
    } else if (billListTotal() + 5 <= target) {
      billList.push(5);
    } else if (billListTotal() + 1 <= target) {
      billList.push(1);
    }

    if (billListTotal() === target) {
      return 
    } else if (billListTotal() > target) {
      return null;
    } else {
      find();
    }
  }

  find();

  return billList;
}

