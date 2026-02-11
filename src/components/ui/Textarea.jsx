import { cn } from '@/lib/utils';

/**
 * Accessible textarea with label and error.
 * @param {Object} props
 * @param {string} props.id
 * @param {string} props.label
 * @param {string} [props.placeholder]
 * @param {string} [props.value]
 * @param {Function} [props.onChange]
 * @param {string} [props.error]
 * @param {boolean} [props.required=false]
 * @param {number} [props.rows=4]
 * @param {string} [props.className]
 */
export default function Textarea({
  id,
  label,
  placeholder,
  value,
  onChange,
  error,
  required = false,
  rows = 4,
  className,
}) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label
        htmlFor={id}
        className="text-sm font-medium text-foreground"
      >
        {label}
        {required && <span className="text-red-500 ml-0.5" aria-hidden="true">*</span>}
      </label>
      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          'w-full rounded-lg border px-4 py-2.5 text-sm text-foreground bg-white placeholder:text-muted-foreground resize-y',
          'transition-colors duration-150',
          'focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary',
          error ? 'border-red-400' : 'border-border hover:border-zinc-400'
        )}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
