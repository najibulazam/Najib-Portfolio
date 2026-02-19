/**
 * PrimaryButton — reusable gradient CTA button.
 *
 * Renders an <a> when `href` is supplied, otherwise a <button>.
 *
 * Props:
 *   href       – string    – turns component into an anchor
 *   target     – string    – forwarded to <a>
 *   rel        – string    – forwarded to <a>
 *   onClick    – fn        – forwarded to <button>
 *   icon       – ReactNode – optional icon prepended to label
 *   size       – 'sm' | 'md' (default 'md')
 *   variant    – 'solid' | 'ghost' (default 'solid')
 *                 solid → gradient fill (cyan → purple, animates on hover)
 *                 ghost → gradient border + transparent fill
 *   disabled   – boolean   – disabled state with accessible aria attr
 *   className  – string    – extra classes
 *   children   – label text
 *
 * Colour system driven by CSS custom properties in index.css:
 *   --c-accent / --c-accent-2 / --c-accent-hover / --c-accent-tint
 *   --btn-gradient-glow / --btn-ghost-glow / --btn-focus-ring
 */
export default function PrimaryButton({
  href,
  target,
  rel,
  onClick,
  icon,
  size = 'md',
  variant = 'solid',
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  const base = 'btn-base';

  const sizes = {
    sm: 'text-xs py-2 px-4',
    md: 'text-sm sm:text-base py-2.5 px-6',
  };

  const variants = {
    solid: 'btn-gradient',
    ghost: 'btn-ghost-gradient',
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`.trim();

  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        target={target}
        rel={rel}
        className={classes}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...rest}
    >
      {content}
    </button>
  );
}
