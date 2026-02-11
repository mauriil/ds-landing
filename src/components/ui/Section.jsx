import { cn } from '@/lib/utils';

/**
 * Section wrapper with consistent spacing and optional bg variants.
 * @param {Object} props
 * @param {string} [props.id]
 * @param {'white'|'muted'|'dark'} [props.bg='white']
 * @param {string} [props.className]
 * @param {React.ReactNode} props.children
 */
export default function Section({ id, bg = 'white', className, children }) {
  const bgStyles = {
    white: 'bg-white',
    muted: 'bg-muted/50',
    dark: 'bg-dark text-white',
  };

  return (
    <section
      id={id}
      className={cn(
        'py-20 md:py-28',
        bgStyles[bg],
        className
      )}
    >
      {children}
    </section>
  );
}
