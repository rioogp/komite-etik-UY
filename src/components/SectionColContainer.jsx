function SectionColContainer({ children, items }) {
  return (
    <section
      className={`flex flex-col ${items} justify-center gap-8 px-8 md:px-24`}
    >
      {children}
    </section>
  );
}

export default SectionColContainer;
