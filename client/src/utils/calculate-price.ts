export const calculateDiscount = (price: number, discount: string | undefined) => {
  if (!discount) return;

  const numberPrice = Number(price);
  const discountRate = Number(discount.replace("%", "")) / 100;

  const discountedPrice = numberPrice * (1 - discountRate);

  return Math.floor(discountedPrice);
};
