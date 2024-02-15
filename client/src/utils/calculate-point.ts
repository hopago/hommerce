export const calculatePoint = (price: string) => {
  const numPrice = Number(price.replace("%", ""));

  const defaultPoint = 850;
  let totalPoint = defaultPoint;

  if (numPrice >= 30000) {
    let point = numPrice * 0.04;
    if (point > 850) {
      point = 850;
    }
    totalPoint = totalPoint + point;
  }

  if (numPrice >= 50000) {
    totalPoint = totalPoint + 2000;
  }

  return String(totalPoint);
};
