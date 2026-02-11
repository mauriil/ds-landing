import { cn } from '@/lib/utils';

/**
 * Small badge/tag component.
 * @param {Object} props
 * @param {'default'|'accent'|'dark'} [props.variant='default']
 * @param {string} [props.className]
 * @param {React.ReactNode} props.children
 */
export default function Badge({ variant = 'default', className, children }) {
  const variantStyles = {
    default: 'bg-muted text-muted-foreground',
    accent: 'bg-primary-100 text-accent-foreground',
    dark: 'bg-dark-lighter text-zinc-300',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
