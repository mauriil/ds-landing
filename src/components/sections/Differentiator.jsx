import { FiCheck, FiMinus } from 'react-icons/fi';
import { differentiator } from '@/data/content.es';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { cn } from '@/lib/utils';

/**
 * Renders a cell value: true (check), 'partial' (~), false (dash).
 */
function CellValue({ value, highlighted }) {
  if (value === true) {
    return (
      <FiCheck
        className={cn('h-4 w-4 mx-auto', highlighted ? 'text-primary' : 'text-zinc-300')}
      />
    );
  }
  if (value === 'partial') {
    return (
      <span
        className={cn(
          'inline-block text-xs font-medium mx-auto',
          highlighted ? 'text-primary/70' : 'text-zinc-500'
        )}
        title="Parcialmente"
      >
        Parcial
      </span>
    );
  }
  return <FiMinus className="h-4 w-4 mx-auto text-zinc-700" />;
}

export default function Differentiator() {
  const { comparison } = differentiator;

  return (
    <Section id="diferenciador" bg="dark">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight text-balance mb-6">
            {differentiator.title}
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed text-pretty mb-4">
            {differentiator.statement}
          </p>
          <p className="text-xl text-zinc-200 font-medium leading-relaxed text-balance">
            {differentiator.substatement}
          </p>
        </div>

        {/* Comparison table */}
        <div className="max-w-4xl mx-auto overflow-x-auto rounded-xl border border-dark-muted">
          <table className="w-full text-sm" role="table">
            <thead>
              <tr className="border-b border-dark-muted">
                {comparison.headers.map((header, i) => (
                  <th
                    key={i}
                    className={cn(
                      'px-5 py-4 font-semibold whitespace-nowrap',
                      i === 0 ? 'w-48 text-left' : 'text-center',
                      i === comparison.headers.length - 1
                        ? 'text-primary bg-primary/[0.07]'
                        : 'text-zinc-500'
                    )}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row, rowIdx) => (
                <tr
                  key={row.feature}
                  className={cn(
                    'border-b border-dark-muted/50 last:border-b-0',
                    rowIdx % 2 === 0 && 'bg-white/[0.015]'
                  )}
                >
                  <td className="px-5 py-3.5 text-zinc-300 font-medium text-[0.8125rem]">
                    {row.feature}
                  </td>
                  {row.values.map((val, colIdx) => {
                    const isLast = colIdx === row.values.length - 1;
                    return (
                      <td
                        key={colIdx}
                        className={cn(
                          'px-5 py-3.5 text-center',
                          isLast && 'bg-primary/[0.07]'
                        )}
                      >
                        <CellValue value={val} highlighted={isLast} />
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  );
}
