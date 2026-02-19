export default function Section({ id, ariaLabel, className = '', children }) {
  const classes = `section-shell reveal-on-scroll ${className}`.trim();

  return (
    <section id={id} className={classes} aria-label={ariaLabel}>
      {children}
    </section>
  );
}
