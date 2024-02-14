export const calculatePoint = (price: string) => {
  const numPrice = Number(price.replace("%", ""));

  const defaultPoint = 850;
  let totalPoint = defaultPoint;

  if (numPrice >= 30000) {
    const point = numPrice * 0.05;
    totalPoint = totalPoint + point;
  }

  if (numPrice >= 50000) {
    totalPoint = totalPoint + 50000;
  }

  return String(totalPoint);
};
