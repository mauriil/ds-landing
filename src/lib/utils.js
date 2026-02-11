/**
 * Utility functions for DuckSolutions landing page.
 */

/**
 * Merge class names conditionally (lightweight clsx alternative).
 * @param  {...(string|boolean|null|undefined)} classes
 * @returns {string}
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Smooth scroll to an anchor element by ID.
 * @param {string} id - Element ID (without #)
 * @param {number} [offset=80] - Offset from top (for sticky header)
 */
export function smoothScrollTo(id, offset = 80) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}

/**
 * Simple form field validation.
 * @param {Object} fields - { fieldName: value }
 * @param {Object} rules - { fieldName: { required, email, phone, minLength } }
 * @returns {{ valid: boolean, errors: Object }}
 */
export function validateForm(fields, rules) {
  const errors = {};

  for (const [field, rule] of Object.entries(rules)) {
    const value = (fields[field] || '').trim();

    if (rule.required && !value) {
      errors[field] = 'Este campo es obligatorio';
      continue;
    }

    if (rule.email && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      errors[field] = 'Ingresá un email válido';
      continue;
    }

    if (rule.phone && value && !/^[\d\s\-+().]{7,20}$/.test(value)) {
      errors[field] = 'Ingresá un número válido';
      continue;
    }

    if (rule.minLength && value && value.length < rule.minLength) {
      errors[field] = `Mínimo ${rule.minLength} caracteres`;
      continue;
    }
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
