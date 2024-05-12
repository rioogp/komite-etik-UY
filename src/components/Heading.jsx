function Heading({ type, color, children, fontSize, width, center }) {
  const base = "font-semibold text-3xl md:text-5xl";

  const style = {
    primary: base + ` mb-8 md:mb-14 ${color}`,
    secondary: base + " mb-2",
    other: base + " mb-6",
    hometitle: "font-medium text-3xl md:text-4xl",
    notifTitle: "font-semibold text-lg",
    custom: `font-semibold ${fontSize} ${color} ${width} ${center}`,
    heroTitle: `font-semibold text-start text-5xl md:text-8xl ${color}`,
  };

  return <h1 className={style[type]}>{children}</h1>;
}

export default Heading;
