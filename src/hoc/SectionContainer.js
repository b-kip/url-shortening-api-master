export default function SectionContainer({ sectionName, sectionClasses=[], containerClasses=[], children }) {
  return (
    <section className={`${ sectionName } ${sectionClasses.join(" ")}`}>
      <div className={`container ${containerClasses.join(" ")}`}>
        {children}
      </div>
    </section>
  );
}