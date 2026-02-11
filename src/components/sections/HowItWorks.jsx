import {
  FiSearch,
  FiLink,
  FiSliders,
  FiMonitor,
} from 'react-icons/fi';
import { howItWorks } from '@/data/content.es';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';

const iconMap = {
  FiSearch,
  FiLink,
  FiSliders,
  FiMonitor,
};

export default function HowItWorks() {
  return (
    <Section id="como-funciona" bg="muted">
      <Container>
        <SectionHeading title={howItWorks.title} subtitle={howItWorks.subtitle} />

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-12 md:space-y-0">
            {howItWorks.steps.map((step, index) => {
              const Icon = iconMap[step.icon];
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.number}
                  className="relative md:grid md:grid-cols-2 md:gap-12 md:py-8"
                >
                  {/* Timeline dot (desktop) */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <span className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold text-sm border-4 border-muted">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div
                    className={`${
                      isEven
                        ? 'md:col-start-1 md:text-right md:pr-8'
                        : 'md:col-start-2 md:text-left md:pl-8'
                    }`}
                  >
                    <div
                      className={`inline-flex items-center gap-3 ${
                        isEven ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      {/* Mobile number + icon */}
                      <span className="md:hidden flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold text-sm shrink-0">
                        {step.number}
                      </span>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary">
                        {Icon && <Icon className="h-6 w-6" />}
                      </div>
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed text-[0.938rem]">
                      {step.description}
                    </p>
                  </div>

                  {/* Empty column for alternating layout */}
                  {isEven && <div className="hidden md:block" />}
                  {!isEven && <div className="hidden md:block md:col-start-1 md:row-start-1" />}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
