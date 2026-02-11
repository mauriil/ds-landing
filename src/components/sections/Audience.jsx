import { FiCheck, FiX } from 'react-icons/fi';
import { audience } from '@/data/content.es';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Audience() {
  return (
    <Section id="audiencia" bg="white">
      <Container>
        <SectionHeading title={audience.title} />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Ideal for */}
          <div className="rounded-2xl border-2 border-primary/20 bg-primary-50/50 p-8">
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                <FiCheck className="h-4 w-4" />
              </span>
              {audience.idealTitle}
            </h3>
            <ul className="space-y-3">
              {audience.idealItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <FiCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-[0.938rem] text-foreground leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not for */}
          <div className="rounded-2xl border border-border bg-muted/50 p-8">
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-200 text-zinc-600 text-sm font-bold">
                <FiX className="h-4 w-4" />
              </span>
              {audience.notForTitle}
            </h3>
            <ul className="space-y-3">
              {audience.notForItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <FiX className="h-5 w-5 text-zinc-400 shrink-0 mt-0.5" />
                  <span className="text-[0.938rem] text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
