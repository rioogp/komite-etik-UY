import Image from "../Image";

function AuthenticationLayout({ children }) {
  return (
    <div className="flex h-dvh w-screen mb-6 xl:mb-0">
      <Image src="yarsi.jpeg" alt="Yarsi tampak depan" type="auth" />
      {children}
    </div>
  );
}

export default AuthenticationLayout;
