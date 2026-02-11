import { hero } from '@/data/content.es';
import { smoothScrollTo } from '@/lib/utils';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import TrustStrip from '@/components/ui/TrustStrip';

export default function Hero() {
  return (
    <section className="relative bg-dark overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-lighter to-dark opacity-90" />
      {/* Subtle accent glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />

      <Container className="relative z-10">
        <div className="pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-40 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div className="max-w-xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.1] tracking-tight text-balance">
                {hero.headline}
              </h1>

              <p className="mt-6 text-lg md:text-xl text-zinc-300 leading-relaxed text-pretty">
                {hero.subheadline}
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => smoothScrollTo('contacto')}
                >
                  {hero.ctaPrimary}
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  className="border border-zinc-600 text-zinc-200 hover:text-white hover:bg-white/10"
                  onClick={() => smoothScrollTo('como-funciona')}
                >
                  {hero.ctaSecondary}
                </Button>
              </div>

              {/* Microcopy */}
              <p className="mt-4 text-sm text-zinc-400">
                {hero.microcopy}
              </p>

              {/* Trust strip */}
              <div className="mt-8 pt-8 border-t border-dark-muted">
                <TrustStrip items={hero.trustStrip} dark />
              </div>
            </div>

            {/* Right: Dashboard placeholder */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden border border-dark-muted shadow-glow">
                {/*
                  PLACEHOLDER: Reemplazar con imagen real del dashboard.
                  Ver hero.dashboardImageAlt en content.es.js para prompt de generación.
                  Archivo sugerido: /public/placeholder-dashboard.webp
                */}
                <div
                  className="w-full aspect-[16/10] bg-gradient-to-br from-dark-lighter via-dark-muted to-dark-lighter flex items-center justify-center"
                  role="img"
                  aria-label={hero.dashboardImageAlt}
                >
                  {/* Mock dashboard skeleton */}
                  <div className="w-[90%] h-[85%] rounded-xl bg-dark-lighter border border-dark-muted p-4 space-y-3">
                    {/* Top bar */}
                    <div className="flex items-center gap-3">
                      <div className="h-3 w-3 rounded-full bg-primary/60" />
                      <div className="h-2 w-24 rounded bg-zinc-700" />
                      <div className="ml-auto h-2 w-16 rounded bg-zinc-700" />
                    </div>
                    {/* Cards row */}
                    <div className="grid grid-cols-3 gap-3 mt-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="rounded-lg bg-dark-muted/50 border border-dark-muted p-3 space-y-2"
                        >
                          <div className="h-2 w-12 rounded bg-zinc-600" />
                          <div className="h-5 w-16 rounded bg-primary/30" />
                        </div>
                      ))}
                    </div>
                    {/* Chart placeholder */}
                    <div className="flex-1 rounded-lg bg-dark-muted/30 border border-dark-muted p-3 mt-2">
                      <div className="h-2 w-20 rounded bg-zinc-600 mb-3" />
                      <div className="flex items-end gap-1.5 h-20">
                        {[40, 65, 45, 80, 55, 70, 60, 75, 50, 85, 65, 72].map(
                          (h, i) => (
                            <div
                              key={i}
                              className="flex-1 rounded-t bg-primary/40"
                              style={{ height: `${h}%` }}
                            />
                          )
                        )}
                      </div>
                    </div>
                    {/* Bottom row */}
                    <div className="flex gap-3">
                      <div className="h-2 w-20 rounded bg-zinc-700" />
                      <div className="h-2 w-14 rounded bg-zinc-700" />
                      <div className="ml-auto h-2 w-10 rounded bg-primary/30" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 rounded-xl bg-white shadow-elevated px-4 py-3 flex items-center gap-3 border border-border">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">Estado</p>
                  <p className="text-sm font-semibold text-foreground">Planta operativa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
