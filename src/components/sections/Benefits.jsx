import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { benefits } from '@/data/content.es';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Benefits() {
  return (
    <Section bg="white">
      <Container>
        <SectionHeading title={benefits.title} />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Operational changes */}
          <div className="rounded-2xl border border-border bg-white p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <FiArrowRight className="h-5 w-5 text-primary" />
              {benefits.operational.heading}
            </h3>
            <ul className="space-y-4">
              {benefits.operational.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <FiCheck className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-[0.938rem] leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tangible outcomes */}
          <div className="rounded-2xl bg-primary-50 border border-primary/10 p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <FiArrowRight className="h-5 w-5 text-primary" />
              {benefits.tangible.heading}
            </h3>
            <ul className="space-y-4">
              {benefits.tangible.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <FiCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground text-[0.938rem] leading-relaxed font-medium">
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
