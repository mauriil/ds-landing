import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { cn } from '@/lib/utils';
import { faq } from '@/data/content.es';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-5 text-left group"
        aria-expanded={open}
      >
        <span className="text-base font-medium text-foreground pr-4 group-hover:text-primary transition-colors">
          {question}
        </span>
        <FiChevronDown
          className={cn(
            'h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200',
            open && 'rotate-180'
          )}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300 ease-in-out',
          open ? 'max-h-96 pb-5' : 'max-h-0'
        )}
      >
        <p className="text-muted-foreground text-[0.938rem] leading-relaxed pr-12">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <Section bg="muted">
      <Container>
        <SectionHeading title={faq.title} />

        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-border p-6 md:p-8">
          {faq.items.map((item) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
