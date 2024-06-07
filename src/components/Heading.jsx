function Heading({ type, color, children, fontSize, width, center }) {
  const base = "font-semibold text-xl md:text-3xl";

  const style = {
    primary: base + ` mb-8 md:mb-10 ${color}`,
    secondary: base + " mb-2",
    other: base + " mb-6",
    hometitle: "font-medium text-xl md:text-2xl",
    notifTitle: "font-semibold text-sm md:text-md",
    custom: `font-semibold ${fontSize} ${color} ${width} ${center}`,
    heroTitle: `font-semibold w-full text-start text-3xl xl:text-5xl ${color}`,
  };

  return <h1 className={style[type]}>{children}</h1>;
}

export default Heading;
