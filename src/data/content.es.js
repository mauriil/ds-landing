/**
 * Contenido centralizado para la landing page de DuckSolutions.
 * Editar este archivo para cambiar textos sin tocar componentes.
 */

// ─── Navigation ──────────────────────────────────────────────
export const nav = {
  brand: 'DuckSolutions',
  links: [
    { label: 'Solución', href: 'solucion' },
    { label: 'Cómo funciona', href: 'como-funciona' },
    { label: 'Casos', href: 'casos' },
    { label: 'Enfoque', href: 'diferenciador' },
    { label: 'Para quién', href: 'audiencia' },
    { label: 'Contacto', href: 'contacto' },
  ],
  cta: 'Hablar con el equipo',
};

// ─── Hero ────────────────────────────────────────────────────
export const hero = {
  headline: 'Control total de tu planta alimenticia — sin cambiar tu maquinaria',
  subheadline:
    'Trazabilidad automática, control de procesos y evidencia para auditorías. Todo lo que hoy depende de planillas, memoria y buena voluntad — resuelto con datos.',
  ctaPrimary: 'Solicitar diagnóstico técnico',
  ctaSecondary: 'Ver cómo funciona',
  microcopy: 'Evaluación técnica sin costo ni compromiso.',
  trustStrip: [
    'Se instala sobre tu equipamiento actual',
    'Sin obras ni paradas de planta',
    'Pensado para pymes alimenticias',
  ],
  /**
   * PLACEHOLDER: Imagen del dashboard/producto.
   * Ubicación: /public/placeholder-dashboard.webp
   *
   * PROMPT PARA GENERAR CON IA (e.g. Midjourney, DALL-E):
   * "Clean, modern industrial dashboard UI mockup on a monitor in a food manufacturing plant.
   *  Shows temperature charts, lot tracking, alert indicators, and process timelines.
   *  Light background, amber/yellow accent color, minimalist design. Isometric or 3/4 view.
   *  Professional, premium feel. No text. 16:10 aspect ratio."
   */
  dashboardImageAlt: 'Vista previa del panel de control DuckSolutions',
};

// ─── Pain / Reality Check ────────────────────────────────────
export const pain = {
  title: 'Esto probablemente te suene familiar',
  subtitle: 'No es un problema de capacidad. Es un problema de herramientas.',
  items: [
    'Las planillas de control están dispersas entre producción, calidad y depósito',
    'Algunos registros se cargan tarde, otros directamente se pierden',
    'Si un inspector pide la trazabilidad de un lote, hay que reconstruirla a mano',
    'Los desvíos de temperatura o proceso se detectan después — si se detectan',
    'Cada auditoría es una corrida de último momento para armar documentación',
    'Las decisiones operativas se toman con intuición porque no hay datos a mano',
  ],
  callout: {
    label: 'El costo real',
    text: 'Mermas que no se ven, lotes comprometidos, horas de trabajo administrativo innecesario y riesgo regulatorio acumulado.',
  },
};

// ─── Insight / Turn ──────────────────────────────────────────
export const insight = {
  title: 'El problema no es tu producción — es no tener visibilidad de lo que pasa',
  paragraphs: [
    'La mayoría de las plantas pymes producen bien. El problema aparece cuando alguien pregunta: qué pasó con este lote, cuándo, bajo qué condiciones. Y la respuesta depende de encontrar una planilla, un registro en papel o la memoria de alguien.',
    'Sin esa visibilidad, cada lote es un riesgo que no se mide, cada desvío es un costo que no se ve, y cada auditoría es un estrés que se podría evitar.',
  ],
};

// ─── Solution Overview ───────────────────────────────────────
export const solution = {
  title: 'Un sistema que conecta tu planta y convierte procesos en datos concretos',
  subtitle: 'Se integra con lo que ya tenés. Tu equipo lo usa desde el primer día.',
  cards: [
    {
      icon: 'FiThermometer',
      title: 'Control ambiental continuo',
      description:
        'Temperatura, humedad y condiciones críticas monitoreadas 24/7 en cámaras, depósitos y líneas.',
    },
    {
      icon: 'FiPackage',
      title: 'Trazabilidad real por lote',
      description:
        'Cada lote queda vinculado a sus condiciones de proceso, materias primas, tiempos y responsables. Automáticamente.',
    },
    {
      icon: 'FiBell',
      title: 'Alertas antes del problema',
      description:
        'Cuando un parámetro se desvía, la alerta llega antes de que escale. No después de que ya costó.',
    },
    {
      icon: 'FiShield',
      title: 'Registros con marca de tiempo',
      description:
        'Historial digital que no se puede alterar retroactivamente. Lo que se registró, queda.',
    },
    {
      icon: 'FiFileText',
      title: 'Evidencia lista para auditorías',
      description:
        'Registros, gráficos y reportes exportables para inspectores, clientes y certificadoras.',
    },
    {
      icon: 'FiBarChart2',
      title: 'Reportes sin armarlos a mano',
      description:
        'Dashboards en tiempo real y reportes periódicos que se generan solos. Sin copiar y pegar planillas.',
    },
  ],
};

// ─── Concrete Cases / Detections ─────────────────────────────
export const cases = {
  title: 'Situaciones que el sistema detecta automáticamente',
  items: [
    {
      icon: 'FiThermometer',
      text: 'Temperatura fuera de rango en cámara',
    },
    {
      icon: 'FiClock',
      text: 'Proceso que excedió el tiempo definido',
    },
    {
      icon: 'FiAlertTriangle',
      text: 'Lote con registro incompleto',
    },
    {
      icon: 'FiWifiOff',
      text: 'Sensor desconectado o sin lectura',
    },
    {
      icon: 'FiAlertCircle',
      text: 'Condición de riesgo sanitario',
    },
    {
      icon: 'FiTrendingDown',
      text: 'Desviación respecto al rango de proceso',
    },
    {
      icon: 'FiXCircle',
      text: 'Punto crítico de control sin validar',
    },
  ],
  before: 'Hoy: te enterás cuando ya pasó.',
  after: 'Con DuckSolutions: alerta inmediata + registro automático.',
};

// ─── How it Works (4 steps) ─────────────────────────────────
export const howItWorks = {
  title: 'Cómo se implementa',
  subtitle: 'Típicamente en pocas semanas, sin frenar tu operación.',
  steps: [
    {
      number: 1,
      icon: 'FiSearch',
      title: 'Relevamiento técnico',
      description:
        'Recorremos la planta, mapeamos puntos críticos y evaluamos tu equipamiento e infraestructura.',
    },
    {
      number: 2,
      icon: 'FiLink',
      title: 'Integración con lo existente',
      description:
        'Conectamos sensores y equipos que ya tenés. Si hace falta algo nuevo, lo definimos juntos.',
    },
    {
      number: 3,
      icon: 'FiSliders',
      title: 'Configuración de reglas',
      description:
        'Definimos rangos, eventos y alertas según tu proceso, tu normativa y lo que necesitás controlar.',
    },
    {
      number: 4,
      icon: 'FiMonitor',
      title: 'Panel en funcionamiento',
      description:
        'Accedés a tiempo real, históricos y evidencias desde cualquier dispositivo. Tu equipo opera con datos.',
    },
  ],
};

// ─── Benefits ────────────────────────────────────────────────
export const benefits = {
  title: 'Qué cambia en el día a día',
  operational: {
    heading: 'En la operación',
    items: [
      'Los desvíos se detectan cuando pasan, no después',
      'Las auditorías dejan de ser una emergencia',
      'Los controles manuales repetitivos se reducen',
      'Las decisiones se toman con datos, no con suposiciones',
      'Los responsables de calidad trabajan con respaldo real',
    ],
  },
  tangible: {
    heading: 'En lo concreto',
    items: [
      'Tablero en tiempo real con el estado de toda la planta',
      'Historial completo por lote, exportable',
      'Evidencias digitales listas para cualquier auditoría',
      'Alertas opcionales por WhatsApp o email',
    ],
  },
};

// ─── FAQ / Objections ────────────────────────────────────────
export const faq = {
  title: 'Dudas comunes',
  items: [
    {
      question: '¿Necesito cambiar mis máquinas o equipos?',
      answer:
        'No. El sistema se integra con tu equipamiento actual. Trabajamos con lo que ya tenés instalado.',
    },
    {
      question: '¿Reemplaza mi sistema de gestión o mis planillas?',
      answer:
        'No compite con tu ERP ni con lo que ya usás. Se complementa: agrega la capa de control y monitoreo que normalmente falta.',
    },
    {
      question: '¿Es complicado de usar para la gente de planta?',
      answer:
        'Está pensado para el día a día. La interfaz es simple, y la capacitación del equipo forma parte de la implementación.',
    },
    {
      question: '¿Funciona en plantas chicas?',
      answer:
        'Sí. De hecho, está diseñado para el contexto pyme: con presupuesto acotado, equipos reducidos y necesidad de resultados rápidos.',
    },
    {
      question: '¿Qué pasa si todavía no tengo sensores?',
      answer:
        'Se puede empezar con registros digitales y sumar sensores de forma gradual, según prioridad y presupuesto.',
    },
    {
      question: '¿Se puede conectar con balanzas, PLCs u otros equipos?',
      answer:
        'Depende del equipo y su protocolo, pero sí: esas integraciones se evalúan como parte del diagnóstico técnico.',
    },
  ],
};

// ─── Differentiator ──────────────────────────────────────────
// Values: true = sí, 'partial' = parcialmente, false = no
export const differentiator = {
  title: 'Un enfoque distinto',
  statement:
    'La mayoría de las opciones que existen resuelven una parte del problema: un ERP gestiona, los sensores miden, una consultora documenta. Pero ninguna conecta todo eso en un sistema pensado para el día a día de una planta pyme.',
  substatement:
    'DuckSolutions integra control, monitoreo y evidencia en un solo lugar.',
  comparison: {
    headers: ['', 'ERP genérico', 'Sensores sueltos', 'Consultora HACCP', 'DuckSolutions'],
    rows: [
      {
        feature: 'Foco en planta alimenticia',
        values: ['partial', false, true, true],
      },
      {
        feature: 'Monitoreo en tiempo real',
        values: ['partial', true, false, true],
      },
      {
        feature: 'Trazabilidad por lote',
        values: ['partial', false, 'partial', true],
      },
      {
        feature: 'Evidencia lista para auditorías',
        values: ['partial', false, true, true],
      },
      {
        feature: 'Implementación en semanas',
        values: [false, true, false, true],
      },
      {
        feature: 'Se conecta con equipamiento de planta',
        values: ['partial', true, false, true],
      },
      {
        feature: 'Pensado para escala pyme',
        values: ['partial', 'partial', 'partial', true],
      },
    ],
  },
};

// ─── Audience ────────────────────────────────────────────────
export const audience = {
  title: '¿Es para tu planta?',
  idealTitle: 'Tiene sentido si:',
  idealItems: [
    'Elaborás alimentos o bebidas',
    'Manejás lotes de producción',
    'Tenés cámaras de frío o procesos con temperatura crítica',
    'Te auditan clientes, organismos o certificadoras',
    'Necesitás trazabilidad real, no solo registros en papel',
    'Querés dejar de depender de planillas y controles manuales',
  ],
  notForTitle: 'Probablemente no aplique si:',
  notForItems: [
    'Tu planta ya tiene SCADA y automatización completa',
    'No elaborás alimentos ni bebidas',
    'No tenés procesos que requieran control de condiciones ambientales',
  ],
};

// ─── Contact / CTA ───────────────────────────────────────────
export const contact = {
  title: 'Pedí un diagnóstico técnico',
  subtitle:
    'Evaluamos tu planta, identificamos riesgos y te decimos qué puntos conviene monitorear. Sin costo.',
  microcopy: 'Es una evaluación técnica, no una charla comercial.',
  form: {
    fields: {
      nombre: { label: 'Nombre y apellido', placeholder: 'Juan Pérez', type: 'text' },
      empresa: { label: 'Empresa', placeholder: 'Nombre de tu empresa', type: 'text' },
      email: { label: 'Email', placeholder: 'juan@empresa.com', type: 'email' },
      whatsapp: { label: 'WhatsApp', placeholder: '+54 11 1234-5678', type: 'tel' },
      tipoPlanta: {
        label: 'Tipo de planta',
        options: [
          { value: '', label: 'Seleccioná el tipo' },
          { value: 'lacteos', label: 'Lácteos' },
          { value: 'bebidas', label: 'Bebidas' },
          { value: 'conservas', label: 'Conservas' },
          { value: 'frigorifico', label: 'Frigorífico' },
          { value: 'panificados', label: 'Panificados' },
          { value: 'otros', label: 'Otros' },
        ],
      },
      tamano: {
        label: 'Tamaño de la empresa',
        options: [
          { value: '', label: 'Seleccioná el tamaño' },
          { value: 'micro', label: 'Micro' },
          { value: 'pyme-chica', label: 'Pyme chica' },
          { value: 'pyme-media', label: 'Pyme media' },
        ],
      },
      mensaje: {
        label: 'Mensaje (opcional)',
        placeholder: 'Contanos brevemente sobre tu planta o qué estás buscando...',
      },
    },
    consent: 'Acepto que DuckSolutions me contacte por este medio',
    submit: 'Enviar solicitud',
    successMessage: 'Recibimos tu solicitud. Te contactamos en las próximas 48 horas hábiles.',
    /** TODO: Reemplazar con email real */
    mailtoFallback: 'contacto@ducksolutions.com.ar',
  },
};

// ─── Footer ──────────────────────────────────────────────────
export const footer = {
  brand: 'DuckSolutions',
  tagline: 'Control operativo para plantas alimenticias.',
  /** TODO: Reemplazar con email real */
  email: 'contacto@ducksolutions.com.ar',
  copyright: `© ${new Date().getFullYear()} DuckSolutions`,
  legal: 'Política de privacidad',
  /** TODO: Agregar link real a política de privacidad */
  legalHref: '#',
};
