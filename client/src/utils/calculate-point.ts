export const calculatePoint = (price: number) => {
  const defaultPoint = 850;
  let totalPoint = defaultPoint;

  if (price >= 30000) {
    let point = price * 0.04;
    if (point > 850) {
      point = 850;
    }
    totalPoint = totalPoint + point;
  }

  if (price >= 50000) {
    totalPoint = totalPoint + 2000;
  }

  return totalPoint;
};
