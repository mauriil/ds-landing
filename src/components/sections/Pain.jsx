import { FiChevronRight } from 'react-icons/fi';
import { pain } from '@/data/content.es';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Callout from '@/components/ui/Callout';

export default function Pain() {
  return (
    <Section id="dolor" bg="muted">
      <Container>
        <SectionHeading
          title={pain.title}
          subtitle={pain.subtitle}
        />

        <div className="max-w-3xl mx-auto">
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3.5 mb-10">
            {pain.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-muted-foreground"
              >
                <FiChevronRight className="h-4 w-4 text-primary/70 shrink-0 mt-1" />
                <span className="text-[0.938rem] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <Callout
            label={pain.callout.label}
            text={pain.callout.text}
            variant="warning"
          />
        </div>
      </Container>
    </Section>
  );
}
