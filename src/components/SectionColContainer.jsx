function SectionColContainer({ children, style }) {
  return (
    <section className={`flex flex-col justify-center gap-8 ${style}`}>
      {children}
    </section>
  );
}

export default SectionColContainer;
