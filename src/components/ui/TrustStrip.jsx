import { FiCheck } from 'react-icons/fi';
import { cn } from '@/lib/utils';

/**
 * Trust micro-strip with check marks.
 * @param {Object} props
 * @param {string[]} props.items
 * @param {boolean} [props.dark=false]
 * @param {string} [props.className]
 */
export default function TrustStrip({ items, dark = false, className }) {
  return (
    <div
      className={cn(
        'flex flex-wrap items-center gap-x-6 gap-y-2 text-sm',
        dark ? 'text-zinc-300' : 'text-muted-foreground',
        className
      )}
    >
      {items.map((item) => (
        <span key={item} className="inline-flex items-center gap-1.5">
          <FiCheck className={cn('h-4 w-4', dark ? 'text-primary-400' : 'text-primary')} />
          {item}
        </span>
      ))}
    </div>
  );
}
