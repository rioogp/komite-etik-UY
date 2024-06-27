import { useEffect, useState } from "react";
import Image from "../Image";
import { CircularProgress } from "@mui/material";

function AuthenticationLayout({ children }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div className="flex h-dvh w-screen mb-6 xl:mb-0 ">
      <Image
        src="/yarsi.jpeg"
        alt="Yarsi tampak depan"
        type="auth"
        onLoad={handleImageLoad}
      />
      {!isImageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <CircularProgress size={54} />
        </div>
      )}
      {isImageLoaded && children}
    </div>
  );
}

export default AuthenticationLayout;
