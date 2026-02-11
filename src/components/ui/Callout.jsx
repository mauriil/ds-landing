import { cn } from '@/lib/utils';

/**
 * Callout/emphasis box.
 * @param {Object} props
 * @param {string} [props.label] - Bold label (e.g. "Resultado")
 * @param {string} props.text
 * @param {'warning'|'info'|'dark'} [props.variant='warning']
 * @param {string} [props.className]
 */
export default function Callout({ label, text, variant = 'warning', className }) {
  const variants = {
    warning: 'bg-primary-50 border-primary/30 text-accent-foreground',
    info: 'bg-blue-50 border-blue-200 text-blue-900',
    dark: 'bg-dark-lighter border-dark-muted text-zinc-200',
  };

  return (
    <div
      className={cn(
        'rounded-xl border-l-4 px-6 py-5',
        variants[variant],
        className
      )}
      role="note"
    >
      {label && <span className="font-bold mr-1">{label}:</span>}
      <span className="leading-relaxed">{text}</span>
    </div>
  );
}
