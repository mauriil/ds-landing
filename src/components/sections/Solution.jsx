import {
  FiThermometer,
  FiPackage,
  FiBell,
  FiShield,
  FiFileText,
  FiBarChart2,
} from 'react-icons/fi';
import { solution } from '@/data/content.es';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';

/** Map icon string names to react-icons components */
const iconMap = {
  FiThermometer: FiThermometer,
  FiPackage: FiPackage,
  FiBell: FiBell,
  FiShield: FiShield,
  FiFileText: FiFileText,
  FiBarChart2: FiBarChart2,
};

export default function Solution() {
  return (
    <Section id="solucion" bg="muted">
      <Container>
        <SectionHeading
          title={solution.title}
          subtitle={solution.subtitle}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solution.cards.map((card) => {
            const IconComponent = iconMap[card.icon];
            return (
              <Card
                key={card.title}
                icon={IconComponent ? <IconComponent className="h-6 w-6" /> : null}
                title={card.title}
                description={card.description}
              />
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
