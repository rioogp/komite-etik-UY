import HeadingAuthentication from "./HeadingAuthentication";

function ContainerFormLayout({ children, paddingVertical }) {
  return (
    <div
      className={`flex flex-col w-full px-12 ${paddingVertical} md:px-24 overflow-scroll`}
    >
      {children}
    </div>
  );
}

export default ContainerFormLayout;
