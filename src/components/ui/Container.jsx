import { cn } from '@/lib/utils';

/**
 * Centered container with max width and horizontal padding.
 * @param {Object} props
 * @param {string} [props.className]
 * @param {React.ReactNode} props.children
 */
export default function Container({ className, children }) {
  return (
    <div className={cn('mx-auto max-w-container px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  );
}
