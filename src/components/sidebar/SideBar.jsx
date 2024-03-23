import Logo from "../Logo";
import SideNav from "./SideNav";

function SideBar() {
  return (
    <aside className="bg-color-primary flex flex-col gap-6 h-dvh p-7">
      <Logo />
      <SideNav />
    </aside>
  );
}

export default SideBar;
