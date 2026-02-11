import { useState } from 'react';
import { FiSend, FiMail } from 'react-icons/fi';
import { contact } from '@/data/content.es';
import { validateForm } from '@/lib/utils';
import { useToast } from '@/components/ui/Toast';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';

const initialForm = {
  nombre: '',
  empresa: '',
  email: '',
  whatsapp: '',
  tipoPlanta: '',
  tamano: '',
  mensaje: '',
  consent: false,
};

const validationRules = {
  nombre: { required: true, minLength: 2 },
  empresa: { required: true },
  email: { required: true, email: true },
  whatsapp: { required: true, phone: true },
  tipoPlanta: { required: true },
  tamano: { required: true },
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { showToast } = useToast();

  const { fields } = contact.form;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate
    const { valid, errors: formErrors } = validateForm(form, validationRules);
    if (!form.consent) {
      formErrors.consent = 'Debés aceptar para continuar';
    }

    if (!valid || Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setSubmitting(true);

    // TODO: Integrar con backend real (API, Formspree, etc.)
    // Simulamos un envío exitoso con un pequeño delay
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setSubmitting(false);
    setSubmitted(true);
    setForm(initialForm);
    setErrors({});
    showToast(contact.form.successMessage);
  };

  return (
    <Section id="contacto" bg="white">
      <Container>
        <div className="max-w-2xl mx-auto">
          <SectionHeading
            title={contact.title}
            subtitle={contact.subtitle}
          />

          {/* Microcopy */}
          <p className="text-center text-sm text-muted-foreground mb-10 font-medium">
            {contact.microcopy}
          </p>

          {submitted ? (
            <div className="text-center py-12 rounded-2xl bg-green-50 border border-green-100">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mx-auto mb-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">¡Solicitud enviada!</h3>
              <p className="text-muted-foreground">{contact.form.successMessage}</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm text-primary font-medium hover:underline"
              >
                Enviar otra solicitud
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-5 bg-muted/30 rounded-2xl border border-border p-6 md:p-8"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Input
                  id="nombre"
                  label={fields.nombre.label}
                  placeholder={fields.nombre.placeholder}
                  value={form.nombre}
                  onChange={handleChange}
                  error={errors.nombre}
                  required
                />
                <Input
                  id="empresa"
                  label={fields.empresa.label}
                  placeholder={fields.empresa.placeholder}
                  value={form.empresa}
                  onChange={handleChange}
                  error={errors.empresa}
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <Input
                  id="email"
                  label={fields.email.label}
                  type="email"
                  placeholder={fields.email.placeholder}
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                  required
                />
                <Input
                  id="whatsapp"
                  label={fields.whatsapp.label}
                  type="tel"
                  placeholder={fields.whatsapp.placeholder}
                  value={form.whatsapp}
                  onChange={handleChange}
                  error={errors.whatsapp}
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <Select
                  id="tipoPlanta"
                  label={fields.tipoPlanta.label}
                  options={fields.tipoPlanta.options}
                  value={form.tipoPlanta}
                  onChange={handleChange}
                  error={errors.tipoPlanta}
                  required
                />
                <Select
                  id="tamano"
                  label={fields.tamano.label}
                  options={fields.tamano.options}
                  value={form.tamano}
                  onChange={handleChange}
                  error={errors.tamano}
                  required
                />
              </div>

              <Textarea
                id="mensaje"
                label={fields.mensaje.label}
                placeholder={fields.mensaje.placeholder}
                value={form.mensaje}
                onChange={handleChange}
                rows={3}
              />

              {/* Consent */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={form.consent}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary/40 accent-primary"
                  aria-describedby={errors.consent ? 'consent-error' : undefined}
                />
                <div>
                  <label
                    htmlFor="consent"
                    className="text-sm text-foreground cursor-pointer"
                  >
                    {contact.form.consent}
                  </label>
                  {errors.consent && (
                    <p id="consent-error" role="alert" className="text-xs text-red-500 mt-1">
                      {errors.consent}
                    </p>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={submitting}
              >
                {submitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <FiSend className="h-4 w-4" />
                    {contact.form.submit}
                  </span>
                )}
              </Button>

              {/* Mailto fallback */}
              <p className="text-center text-xs text-muted-foreground">
                ¿Preferís escribirnos directo?{' '}
                <a
                  href={`mailto:${contact.form.mailtoFallback}?subject=Consulta desde landing`}
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  <FiMail className="h-3 w-3" />
                  {contact.form.mailtoFallback}
                </a>
              </p>
            </form>
          )}
        </div>
      </Container>
    </Section>
  );
}
