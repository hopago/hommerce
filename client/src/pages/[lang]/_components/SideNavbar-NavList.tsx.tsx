import { bookSubCategory } from "../../_components/constants/category";

import NavItem from "./SideNavbar-NavItem";

export default function NavList() {
  return (
    <div className="side-nav-bar__col-container">
      <ol>
        {bookSubCategory.map((category) => (
          <NavItem key={category} category={category} />
        ))}
      </ol>
    </div>
  );
}
