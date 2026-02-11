import { cn } from '@/lib/utils';

const variants = {
  primary:
    'bg-primary text-primary-foreground hover:bg-primary-dark focus-visible:ring-primary shadow-soft hover:shadow-elevated font-semibold',
  secondary:
    'bg-white text-foreground border border-border hover:bg-muted focus-visible:ring-primary font-medium',
  ghost:
    'text-foreground hover:bg-muted focus-visible:ring-primary font-medium',
  outline:
    'border-2 border-primary text-primary-foreground hover:bg-primary-50 focus-visible:ring-primary font-semibold',
};

const sizes = {
  sm: 'px-4 py-2 text-sm rounded',
  md: 'px-6 py-3 text-base rounded-lg',
  lg: 'px-8 py-4 text-lg rounded-lg',
};

/**
 * Reusable button component.
 * @param {Object} props
 * @param {'primary'|'secondary'|'ghost'|'outline'} [props.variant='primary']
 * @param {'sm'|'md'|'lg'} [props.size='md']
 * @param {string} [props.className]
 * @param {React.ReactNode} props.children
 * @param {Function} [props.onClick]
 * @param {string} [props.type='button']
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  onClick,
  type = 'button',
  ...rest
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        'inline-flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer whitespace-nowrap',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
