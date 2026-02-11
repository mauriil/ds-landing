import { cn } from '@/lib/utils';

/**
 * Accessible select dropdown with label and error.
 * @param {Object} props
 * @param {string} props.id
 * @param {string} props.label
 * @param {Array<{value: string, label: string}>} props.options
 * @param {string} [props.value]
 * @param {Function} [props.onChange]
 * @param {string} [props.error]
 * @param {boolean} [props.required=false]
 * @param {string} [props.className]
 */
export default function Select({
  id,
  label,
  options = [],
  value,
  onChange,
  error,
  required = false,
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
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          'w-full rounded-lg border px-4 py-2.5 text-sm text-foreground bg-white',
          'transition-colors duration-150 appearance-none',
          'focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary',
          error ? 'border-red-400' : 'border-border hover:border-zinc-400',
          !value && 'text-muted-foreground'
        )}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} disabled={!opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
