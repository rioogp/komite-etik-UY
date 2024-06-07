import { useNavigate } from "react-router-dom";
import Image from "./Image";

function Logo({ style }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/")}
      className={`text-center ${style} cursor-pointer`}
    >
      <Image src="/Logo.png" alt="Logo" type="logo" />
    </div>
  );
}

export default Logo;
