import NavList from "./SideNavbar-NavList.tsx";
import Heading from "./SideNavbar-Heading";

export default function SideNavbar() {
  return (
    <aside className="side-nav-bar">
      <Heading />
      <NavList />
    </aside>
  );
}
