import { FiMail } from 'react-icons/fi';
import { smoothScrollTo } from '@/lib/utils';
import { footer, nav } from '@/data/content.es';
import Container from '@/components/ui/Container';

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-dark-muted">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="flex items-center justify-center h-8 w-8 rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                  D
                </span>
                <span className="text-lg font-bold text-white">
                  {footer.brand}
                </span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
                {footer.tagline}
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-4">
                Navegación
              </h4>
              <nav className="flex flex-col gap-2" aria-label="Footer navigation">
                {nav.links.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => smoothScrollTo(link.href)}
                    className="text-left text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-4">
                Contacto
              </h4>
              <a
                href={`mailto:${footer.email}`}
                className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-primary transition-colors"
              >
                <FiMail className="h-4 w-4" />
                {footer.email}
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-dark-muted flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-zinc-500">{footer.copyright}</p>
            {/* TODO: Agregar link real a política de privacidad */}
            <a
              href={footer.legalHref}
              className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              {footer.legal}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
