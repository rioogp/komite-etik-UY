import Image from "./Image";

function Logo({ style }) {
  return (
    <div className={`text-center ${style}`}>
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
