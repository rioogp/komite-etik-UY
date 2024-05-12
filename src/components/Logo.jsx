import { useNavigate } from "react-router-dom";
import Image from "./Image";

function Logo({ style }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/")}
      className={`text-center ${style} cursor-pointer`}
    >
      <Image
        src="/Logo.png"
        alt="Logo"
        type="logo"
        className="object-contain w-10 h-full"
      />
    </div>
  );
}

export default Logo;
