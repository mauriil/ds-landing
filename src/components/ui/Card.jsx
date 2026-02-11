import { cn } from '@/lib/utils';

/**
 * Card component with optional icon and hover effect.
 * @param {Object} props
 * @param {React.ReactNode} [props.icon]
 * @param {string} [props.title]
 * @param {string} [props.description]
 * @param {string} [props.className]
 * @param {React.ReactNode} [props.children]
 */
export default function Card({ icon, title, description, className, children }) {
  return (
    <div
      className={cn(
        'rounded-xl border border-border bg-white p-6 transition-all duration-200',
        'hover:shadow-card hover:border-primary/20',
        className
      )}
    >
      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
          {icon}
        </div>
      )}
      {title && (
        <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
      )}
      {description && (
        <p className="text-muted-foreground leading-relaxed text-[0.938rem]">{description}</p>
      )}
      {children}
    </div>
  );
}
