const translations = {
  en: {
    nav_projects: 'Projects',
    nav_about: 'About',
    nav_contact: 'Contact',
    nav_cv: 'Download CV',
    hero_eyebrow: 'Engineering · Software',
    hero_by: 'by Héctor García',
    hero_lead:
      'Electronics and Computer Engineer. I design and build custom software for real businesses, from desktop point-of-sale systems to mobile platforms.',
    hero_view_projects: 'View projects',
    hero_get_in_touch: 'Get in touch',
    projects_eyebrow: 'Projects',
    projects_title: 'Selected work',
    project1_status: 'In development',
    project1_desc:
      'Desktop point-of-sale system for small grocery stores: inventory control, barcode scanning, sales, and reporting, with thermal printer and cash drawer integration.',
    project2_status: 'Own venture',
    project2_desc:
      "Platform connecting consumers with near-expiration food at a reduced price, aimed at cutting food waste. Co-founder and lead on the project's technical documentation.",
    project2_tag_docs: 'Technical documentation',
    project_collab_label: 'In collaboration with developer',
    project_view_repo: 'View repository ↗',
    project3_status: 'In development',
    project3_desc:
      'iOS app that generates short stories with AI: the user picks the features they want in their story and the AI creates it, and can also read a PDF and turn it into a story. Designed for children, with a listening AI that follows along and guides the child until the story is finished.',
    project4_status: 'Experimental project',
    project4_desc:
      'Third-person horror game built as an experimental project in Unity, exploring tension, atmosphere, and pursuit mechanics.',
    project4_tag_horror: 'Horror',
    about_eyebrow: 'About',
    about_title: 'Profile',
    about_text:
      "I'm in my final semester of Electronics and Computer Engineering at Centro Universitario de los Valles (CUValles), Universidad de Guadalajara, currently finishing my professional internship. I combine my engineering background with freelance software development, building custom solutions for small businesses and working on my own ventures.",
    contact_eyebrow: 'Contact',
    contact_title: "Let's talk",
    contact_name: 'Name',
    contact_email: 'Email',
    contact_message: 'Message',
    contact_send: 'Send message',
    footer_credit: '© 2026 Corvus Stack — by Héctor García',
    footer_email: 'Email',
  },
  es: {
    nav_projects: 'Proyectos',
    nav_about: 'Acerca de',
    nav_contact: 'Contacto',
    nav_cv: 'Descargar CV',
    hero_eyebrow: 'Ingeniería · Software',
    hero_by: 'por Héctor García',
    hero_lead:
      'Ingeniero en Electrónica y Computación. Diseño y desarrollo software a la medida para negocios reales, desde sistemas de punto de venta de escritorio hasta plataformas móviles.',
    hero_view_projects: 'Ver proyectos',
    hero_get_in_touch: 'Contáctame',
    projects_eyebrow: 'Proyectos',
    projects_title: 'Trabajo destacado',
    project1_status: 'En desarrollo',
    project1_desc:
      'Sistema de punto de venta de escritorio para pequeñas tiendas de abarrotes: control de inventario, lectura de códigos de barras, ventas y reportes, con integración de impresora térmica y cajón de dinero.',
    project2_status: 'Proyecto propio',
    project2_desc:
      'Plataforma que conecta a consumidores con alimentos próximos a caducar a precio reducido, con el objetivo de reducir el desperdicio de comida. Cofundador y responsable de la documentación técnica del proyecto.',
    project2_tag_docs: 'Documentación técnica',
    project_collab_label: 'En colaboración con el desarrollador',
    project_view_repo: 'Ver repositorio ↗',
    project3_status: 'En desarrollo',
    project3_desc:
      'App para iOS que genera cuentos cortos con IA: el usuario elige las características que quiere para su cuento y la IA lo crea, además puede leer un PDF y convertirlo en cuento. Está pensada para niños, con una IA que escucha y da seguimiento al niño hasta que completa el cuento.',
    project4_status: 'Proyecto experimental',
    project4_desc:
      'Juego de terror en tercera persona hecho como proyecto experimental en Unity, explorando tensión, atmósfera y mecánicas de persecución.',
    project4_tag_horror: 'Terror',
    about_eyebrow: 'Acerca de',
    about_title: 'Perfil',
    about_text:
      'Estoy en mi último semestre de Ingeniería en Electrónica y Computación en el Centro Universitario de los Valles (CUValles), Universidad de Guadalajara, actualmente terminando mis prácticas profesionales. Combino mi formación en ingeniería con desarrollo de software freelance, creando soluciones a la medida para pequeños negocios y trabajando en mis propios proyectos.',
    contact_eyebrow: 'Contacto',
    contact_title: 'Hablemos',
    contact_name: 'Nombre',
    contact_email: 'Correo electrónico',
    contact_message: 'Mensaje',
    contact_send: 'Enviar mensaje',
    footer_credit: '© 2026 Corvus Stack — por Héctor García',
    footer_email: 'Correo',
  },
}

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n')
    if (dict[key]) el.textContent = dict[key]
  })

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder')
    if (dict[key]) el.setAttribute('placeholder', dict[key])
  })

  document.documentElement.setAttribute('lang', lang)
  localStorage.setItem('lang', lang)

  const label = document.getElementById('lang-toggle-label')
  if (label) label.textContent = lang === 'es' ? 'EN' : 'ES'

  const toggleBtn = document.getElementById('lang-toggle')
  if (toggleBtn) toggleBtn.setAttribute('aria-pressed', lang === 'es')
}

function initLanguage() {
  const saved = localStorage.getItem('lang')
  const browserLang = (navigator.language || 'en').slice(0, 2)
  const initialLang = saved || (browserLang === 'es' ? 'es' : 'en')

  applyLanguage(initialLang)

  const toggleBtn = document.getElementById('lang-toggle')
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('lang') === 'es' ? 'es' : 'en'
      applyLanguage(current === 'es' ? 'en' : 'es')
    })
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initLanguage()

  const revealEls = document.querySelectorAll('section, .project, .skill')
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )

  revealEls.forEach(el => {
    el.classList.add('reveal')
    observer.observe(el)
  })
})
