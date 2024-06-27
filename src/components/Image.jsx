function Image({ type, src, alt, onLoad }) {
  const style = {
    auth: "hidden w-3/6 xl:block object-cover h-full",
    logo: "h-14 w-full object-contain",
    profile: "rounded-full h-9 w-auto",
    full: "w-full h-[63.7rem] object-cover object-center z-0",
    absolute: "w-[24rem] absolute hidden xl:inline-block bottom-0 left-[3rem]",
    home: "w-auto h-auto",
  };

  return <img src={src} alt={alt} className={style[type]} onLoad={onLoad} />;
}

export default Image;
