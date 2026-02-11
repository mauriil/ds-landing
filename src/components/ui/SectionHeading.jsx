import { cn } from '@/lib/utils';

/**
 * Section heading with optional subtitle.
 * @param {Object} props
 * @param {string} props.title
 * @param {string} [props.subtitle]
 * @param {'left'|'center'} [props.align='center']
 * @param {boolean} [props.dark=false] - If true, use light text colors
 * @param {string} [props.className]
 */
export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
  dark = false,
  className,
}) {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' && 'text-center',
        className
      )}
    >
      <h2
        className={cn(
          'text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight text-balance',
          dark ? 'text-white' : 'text-foreground'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-lg md:text-xl max-w-3xl leading-relaxed',
            align === 'center' && 'mx-auto',
            dark ? 'text-zinc-300' : 'text-muted-foreground'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
