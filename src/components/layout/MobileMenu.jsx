import { useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import { cn } from '@/lib/utils';
import { smoothScrollTo } from '@/lib/utils';
import Button from '@/components/ui/Button';

/**
 * Mobile slide-over menu.
 * @param {Object} props
 * @param {boolean} props.open
 * @param {Function} props.onClose
 * @param {Array<{label: string, href: string}>} props.links
 * @param {string} props.ctaLabel
 */
export default function MobileMenu({ open, onClose, links, ctaLabel }) {
  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNavClick = (href) => {
    onClose();
    // Small delay so menu closes before scroll
    setTimeout(() => smoothScrollTo(href), 150);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300',
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={cn(
          'fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-elevated',
          'transition-transform duration-300 ease-out',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <span className="text-lg font-bold text-foreground">Menú</span>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Cerrar menú"
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-col p-6 gap-1">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left px-4 py-3 rounded-lg text-base font-medium text-foreground hover:bg-muted transition-colors"
            >
              {link.label}
            </button>
          ))}

          <div className="mt-6 pt-6 border-t border-border">
            <Button
              variant="primary"
              size="lg"
              className="w-full"
              onClick={() => handleNavClick('contacto')}
            >
              {ctaLabel}
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
