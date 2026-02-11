import { insight } from '@/data/content.es';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

export default function Insight() {
  return (
    <Section bg="white">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          {/* Subtle decorative line instead of a big icon */}
          <div className="mx-auto mb-8 h-1 w-12 rounded-full bg-primary/60" />

          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance mb-8">
            {insight.title}
          </h2>

          <div className="space-y-5">
            {insight.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-lg text-muted-foreground leading-relaxed text-pretty"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
