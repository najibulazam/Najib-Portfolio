export default function SectionHeading({ children }) {
  return (
    <div className="flex flex-col items-center mb-8 sm:mb-12">
      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-accent tracking-tight text-center leading-tight text-balance px-2">
        {children}
      </h2>
      <div className="mt-4 w-16 h-1 bg-gradient-to-r from-accent via-sky-400 to-accent-2 rounded-full"></div>
    </div>
  );
}
