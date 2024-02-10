type NavItemProps = {
  category: BookSubCategory;
};

export default function NavItem({ category }: NavItemProps) {
  return (
    <li>
      <span>{category}</span>
    </li>
  );
}
