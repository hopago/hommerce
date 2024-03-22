import { useNavigate, useParams } from "react-router-dom";

type NavItemProps = {
  category: BookSubCategory;
};

export default function NavItem({ category }: NavItemProps) {
  const { lang } = useParams();

  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/category/${lang}/${category}`);
  };

  return (
    <li onClick={onClick}>
      <span>{category}</span>
    </li>
  );
}
