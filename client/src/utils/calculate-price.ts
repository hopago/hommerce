export const calculateDiscount = (
  price: number,
  discount: number | undefined
) => {
  if (!discount) return;

  const numberPrice = Number(price);
  const discountRate = discount / 100;

  const discountedPrice = numberPrice * (1 - discountRate);

  return Math.floor(discountedPrice);
};
