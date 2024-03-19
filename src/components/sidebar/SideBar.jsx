import Logo from "../Logo";
import SideNav from "./SideNav";

function SideBar({ setTitle }) {
  return (
    <aside className="bg-color-primary flex flex-col gap-6 h-dvh p-7">
      <Logo />
      <SideNav setTitle={setTitle} />
    </aside>
  );
}

export default SideBar;
