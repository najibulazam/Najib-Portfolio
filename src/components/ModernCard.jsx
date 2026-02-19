export default function ModernCard({ children, className = '', as: Component = 'article', ...props }) {
  return (
    <Component
      className={`modern-card ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}
