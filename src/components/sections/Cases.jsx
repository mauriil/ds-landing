import {
  FiThermometer,
  FiClock,
  FiAlertTriangle,
  FiWifiOff,
  FiAlertCircle,
  FiTrendingDown,
  FiXCircle,
} from 'react-icons/fi';
import { cases } from '@/data/content.es';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';

const iconMap = {
  FiThermometer,
  FiClock,
  FiAlertTriangle,
  FiWifiOff,
  FiAlertCircle,
  FiTrendingDown,
  FiXCircle,
};

export default function Cases() {
  return (
    <Section id="casos" bg="white">
      <Container>
        <SectionHeading title={cases.title} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {cases.items.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.text}
                className="flex items-center gap-3 rounded-xl border border-border bg-white px-5 py-4 transition-all duration-200 hover:shadow-card hover:border-primary/20"
              >
                {Icon && (
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                )}
                <span className="text-sm font-medium text-foreground leading-snug">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>

        {/* Contrast strip — subtle, not infomercial */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="rounded-xl bg-muted border border-border px-8 py-5 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
            <p className="text-sm text-muted-foreground flex-1">
              <span className="font-medium text-foreground">{cases.before}</span>
            </p>
            <div className="hidden sm:block h-8 w-px bg-border" />
            <p className="text-sm text-muted-foreground flex-1">
              <span className="font-medium text-primary">{cases.after}</span>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
