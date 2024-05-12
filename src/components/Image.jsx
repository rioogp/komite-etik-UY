function Image({ type, src, alt }) {
  const style = {
    auth: "hidden w-3/6 xl:block object-cover h-full",
    logo: "h-10 w-auto",
    profile: "rounded-full h-10 w-auto",
    full: "w-full h-[63.7rem] object-cover object-center z-0",
    absolute: "w-[30rem] absolute hidden xl:inline-block bottom-0 left-[5rem]",
  };

  return <img src={src} alt={alt} className={style[type]} />;
}

export default Image;
