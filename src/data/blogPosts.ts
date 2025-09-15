const posts = [
  {
    id: 1,
    slug: "alimentos-que-fortalecen-tus-dientes",
    title: "10 Alimentos que Fortalecen tus Dientes Naturalmente",
    excerpt: "Una dieta equilibrada no solo beneficia tu salud general, sino que también puede fortalecer significativamente tus dientes y encías.",
  image: "/images/blog/post1.svg",
    date: "28 Agosto 2024",
    author: "Dr. Carlos Mendoza",
    category: "Nutrición Dental",
    content: `### Introducción

Una dieta equilibrada es esencial para la salud bucodental. Aquí te mostramos 10 alimentos que ayudan a fortalecer dientes y encías.

### 1. Lácteos

Los productos lácteos son ricos en calcio y fósforo, minerales importantes para la remineralización dental. Consume yogur, quesos y leche con moderación.

### 2. Frutas y verduras crujientes

Manzanas, zanahorias y apio estimulan la producción de saliva y ayudan a limpiar la superficie dental.

### Conclusión

Incorporar estos alimentos en tu dieta puede ayudar a mantener una sonrisa saludable.
`
  },
  {
    id: 2,
    slug: "ortodoncia-invisible-vs-brackets",
    title: "Ortodoncia Invisible vs. Brackets Tradicionales: ¿Cuál Elegir?",
    excerpt: "Comparamos las ventajas y desventajas de cada tratamiento ortodóntico para ayudarte a tomar la mejor decisión.",
  image: "/images/blog/post2.svg",
    date: "25 Agosto 2024",
    author: "Dra. Ana López",
    category: "Ortodoncia",
    content: `### Introducción

La ortodoncia ha avanzado mucho en los últimos años. Hoy existen opciones estéticas y funcionales según el caso del paciente.

### Ortodoncia invisible

Los alineadores transparentes son removibles y estéticos, ideales para casos leves a moderados.

### Brackets tradicionales

Brackets metálicos o cerámicos siguen siendo efectivos en casos complejos y ofrecen control total del movimiento dental.
`
  },
  {
    id: 3,
    slug: "superar-miedo-al-dentista",
    title: "Cómo Superar el Miedo al Dentista: Guía Completa",
    excerpt: "Técnicas efectivas para manejar la ansiedad dental y hacer que tu visita al dentista sea una experiencia cómoda y relajada.",
  image: "/images/blog/post3.svg",
    date: "22 Agosto 2024",
    author: "Dr. Roberto Silva",
    category: "Psicología Dental",
    content: `### Introducción

El miedo al dentista es común, y existen técnicas para afrontarlo. La comunicación con el equipo dental es clave.

### Técnicas de relajación

Respiración profunda, distracciones con música y explicaciones previas ayudan a reducir la ansiedad.
`
  },
  {
    id: 4,
    slug: "blanqueamiento-dental-guia",
    title: "Blanqueamiento Dental: Métodos, Riesgos y Resultados",
    excerpt: "Todo lo que necesitas saber sobre los distintos métodos de blanqueamiento dental y cómo escoger el adecuado.",
  image: "/images/blog/post1.svg",
    date: "15 Julio 2024",
    author: "Dra. Laura Gutiérrez",
    category: "Estética Dental",
    content: `### Métodos de blanqueamiento

Existen opciones en consultorio y en casa. El profesional determinará la mejor técnica según el paciente.

### Riesgos y cuidados

Sensibilidad dental y irritación gingival pueden aparecer; siempre seguir indicaciones del especialista.
`
  },
  {
    id: 5,
    slug: "implantes-dentales-mitos-y-verdades",
    title: "Implantes Dentales: Mitos y Verdades",
    excerpt: "Aclaramos las preguntas más frecuentes sobre implantes dentales: durabilidad, dolor y cuidados.",
  image: "/images/blog/post2.svg",
    date: "02 Junio 2024",
    author: "Dr. Miguel Torres",
    category: "Implantes",
    content: `### ¿Duelen los implantes?

Con anestesia adecuada el procedimiento es controlado; la recuperación puede incluir molestias moderadas.

### Cuidados postoperatorios

Seguir indicaciones de higiene y evitar esfuerzos los primeros días garantiza una buena evolución.
`
  },
  {
    id: 6,
    slug: "cuidado-de-encías-saludables",
    title: "Cuidado de Encías: Prevención de la Gingivitis y Periodontitis",
    excerpt: "Consejos prácticos para mantener tus encías saludables y prevenir enfermedades periodontales.",
  image: "/images/blog/post3.svg",
    date: "18 Mayo 2024",
    author: "Dra. Patricia Ramos",
    category: "Periodoncia",
    content: `### Prevención básica

Cepillado correcto, uso de hilo dental y visitas regulares al dentista son fundamentales para prevenir la pérdida ósea.

### Tratamientos disponibles

Desde raspado y alisado radicular hasta cirugía periodontal en casos avanzados.
`
  },
  {
    id: 7,
    slug: "salud-bucal-en-embarazo",
    title: "Salud Bucal durante el Embarazo: Qué Esperar y Cómo Cuidarte",
    excerpt: "El embarazo trae cambios hormonales que pueden afectar tu salud bucal; aprende a cuidarte durante este periodo.",
  image: "/images/blog/post1.svg",
    date: "05 Mayo 2024",
    author: "Dra. Valeria Ruiz",
    category: "Salud General",
    content: `### Cambios hormonales

Las encías pueden inflamarse más fácilmente; la higiene y las visitas al dentista son importantes.

### Tratamientos seguros

Muchos procedimientos son seguros durante el embarazo; el especialista te orientará según el trimestre.
`
  },
  {
    id: 8,
    slug: "ortodoncia-adultos-beneficios",
    title: "Ortodoncia en Adultos: Beneficios y Opciones",
    excerpt: "Nunca es tarde para corregir la posición de tus dientes; revisa las alternativas actuales para adultos.",
  image: "/images/blog/post2.svg",
    date: "12 Abril 2024",
    author: "Dr. Andrés Morales",
    category: "Ortodoncia",
    content: `### Beneficios estéticos y funcionales

Mejorar la alineación dental no solo embellece la sonrisa, también facilita la higiene y reduce desgaste.

### Opciones para adultos

Brackets estéticos, alineadores transparentes y terapias combinadas.
`
  },
  {
    id: 9,
    slug: "prevencion-caries-ninos",
    title: "Prevención de Caries en Niños: Guía para Padres",
    excerpt: "Hábitos, selladores y recomendaciones clave para proteger los dientes de los más pequeños.",
  image: "/images/blog/post3.svg",
    date: "28 Marzo 2024",
    author: "Dra. Mariana Peña",
    category: "Pediatría Dental",
    content: `### Hábitos desde temprano

Limpieza desde la erupción, limitar azúcares y visitas tempranas al dentista son fundamentales.

### Selladores

Los selladores de fosas y fisuras protegen las superficies masticatorias de los molares.
`
  },
  {
    id: 10,
    slug: "salud-oral-y-enfermedades-sistemicas",
    title: "Salud Oral y Enfermedades Sistémicas: Conexiones Importantes",
    excerpt: "Cómo la salud bucal está relacionada con condiciones como diabetes y enfermedades cardiovasculares.",
  image: "/images/blog/post1.svg",
    date: "10 Marzo 2024",
    author: "Dr. Javier Ortega",
    category: "Salud General",
    content: `### La boca como espejo de la salud

Inflamación crónica en las encías puede influir en el control glucémico y la inflamación sistémica.

### Recomendaciones

Comunicar condiciones médicas al dentista y mantener un control interdisciplinario.
`
  },
  {
    id: 11,
    slug: "endodoncia-cuando-es-necesaria",
    title: "Endodoncia: ¿Cuándo es Necesaria y Qué Esperar?",
    excerpt: "Entiende el tratamiento de conducto, sus beneficios y el proceso de recuperación.",
  image: "/images/blog/post2.svg",
    date: "01 Febrero 2024",
    author: "Dr. Luis Herrera",
    category: "Endodoncia",
    content: `### Indicaciones

Cuando la pulpa dental está comprometida por caries profunda o trauma, la endodoncia salva el diente.

### Proceso

El tratamiento consiste en limpiar, desinfectar y sellar los conductos radiculares.
`
  },
  {
    id: 12,
    slug: "tecnicas-de-higiene-oral-efectivas",
    title: "Técnicas de Higiene Oral Efectivas: Cepillado, Hilo y Enjuague",
    excerpt: "Aprende las mejores prácticas de higiene diaria para mantener dientes y encías sanos.",
  image: "/images/blog/post3.svg",
    date: "15 Enero 2024",
    author: "Dra. Natalia Campos",
    category: "Prevención",
    content: `### Cepillado correcto

Cepillar durante 2 minutos, dos veces al día, con técnica adecuada y cabezal pequeño.

### Hilo dental

Usar hilo diariamente para eliminar placa interdental.
`
  },
  {
    id: 13,
    slug: "odontologia-estetica-protesis",
    title: "Prótesis Dentales y Estética: Opciones para Recuperar tu Sonrisa",
    excerpt: "Desde prótesis removibles hasta fijas, conoce las alternativas para reemplazar piezas dentales.",
  image: "/images/blog/post1.svg",
    date: "02 Enero 2024",
    author: "Dra. Carmen Vega",
    category: "Prótesis",
    content: `### Tipos de prótesis

Removibles, parciales fijas y prótesis sobre implantes. La elección depende del caso y presupuesto.

### Consideraciones estéticas

Color, forma y función deben integrarse para un resultado natural.
`
  },
  {
    id: 14,
    slug: "mantenimiento-de-implantes",
    title: "Mantenimiento de Implantes Dentales: Claves para su Longevidad",
    excerpt: "Cómo cuidar tus implantes y qué controles realizar para evitar complicaciones a largo plazo.",
  image: "/images/blog/post2.svg",
    date: "15 Diciembre 2023",
    author: "Dr. Miguel Torres",
    category: "Implantes",
    content: `### Higiene específica

Los implantes requieren una técnica de higiene adaptada y visitas periódicas para controles.

### Señales de alerta

Inflamación, sangrado o movilidad deben ser evaluados por un especialista.
`
  },
  {
    id: 15,
    slug: "tips-para-una-sonrisa-natural",
    title: "5 Tips Rápidos para una Sonrisa Natural y Saludable",
    excerpt: "Pequeños hábitos que marcan la diferencia: desde la hidratación hasta el control del bruxismo.",
  image: "/images/blog/post3.svg",
    date: "01 Diciembre 2023",
    author: "Dra. Laura Gutiérrez",
    category: "Prevención",
    content: `### Tip 1: Hidratación

Beber suficiente agua ayuda a mantener la producción de saliva y protege contra la sequedad.

### Tip 2: Evitar masticar objetos duros

Protege tus dientes evitando usarlos como herramientas.
`
  }
];

export default posts;
