import Button from "../../../_components/Button";

import cart from "../../../assets/ico_cart.png";

export default function AddCartButton() {
  const onCartClick = () => {};

  return (
    <Button
      className="cart"
      icon={cart}
      type="button"
      size="sm"
      onClick={onCartClick}
      isAuth={true}
    />
  );
}
