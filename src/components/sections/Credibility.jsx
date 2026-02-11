import { FiCpu, FiActivity, FiLayers } from 'react-icons/fi';
import { credibility } from '@/data/content.es';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';

const pillarIcons = [FiCpu, FiActivity, FiLayers];

export default function Credibility() {
  return (
    <Section bg="muted">
      <Container>
        <div className="max-w-3xl mx-auto">
          <SectionHeading title={credibility.title} />

          <div className="space-y-4 mb-12 text-center">
            {credibility.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-muted-foreground text-lg leading-relaxed text-pretty"
              >
                {p}
              </p>
            ))}
          </div>

          {/* Pillars — driven by data */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {credibility.pillars.map((label, i) => {
              const Icon = pillarIcons[i];
              return (
                <div
                  key={label}
                  className="inline-flex items-center gap-2.5 rounded-full bg-white border border-border px-5 py-2.5 text-sm font-medium text-foreground shadow-soft"
                >
                  {Icon && <Icon className="h-4 w-4 text-primary" />}
                  {label}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
