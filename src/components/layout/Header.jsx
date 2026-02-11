import { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';
import { cn, smoothScrollTo } from '@/lib/utils';
import { nav } from '@/data/content.es';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    smoothScrollTo(href);
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-30 transition-all duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-border/50'
            : 'bg-transparent'
        )}
      >
        <Container>
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo / Wordmark */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 group"
              aria-label="Ir al inicio"
            >
              {/* Duck icon placeholder */}
              <span className="flex items-center justify-center h-8 w-8 rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                D
              </span>
              <span
                className={cn(
                  'text-lg font-bold transition-colors',
                  scrolled ? 'text-foreground' : 'text-white'
                )}
              >
                {nav.brand}
              </span>
            </button>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Navegación principal"
            >
              {nav.links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    'px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                    scrolled
                      ? 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      : 'text-zinc-300 hover:text-white hover:bg-white/10'
                  )}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <Button
                variant="primary"
                size="sm"
                className="hidden md:inline-flex"
                onClick={() => handleNavClick('contacto')}
              >
                {nav.cta}
              </Button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(true)}
                className={cn(
                  'lg:hidden p-2 rounded-lg transition-colors',
                  scrolled
                    ? 'text-foreground hover:bg-muted'
                    : 'text-white hover:bg-white/10'
                )}
                aria-label="Abrir menú"
              >
                <FiMenu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={nav.links}
        ctaLabel={nav.cta}
      />
    </>
  );
}
