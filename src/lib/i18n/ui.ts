import type { Language } from "src/types";

export const languages = {
  en: "English",
  es: "Español",
};

export const defaultLang: Language = "en";

export const ui: Record<Language, Record<string, string>> = {
  en: {
    "head.title": "Marcelo Oroquieta - Portfolio",
    "head.description": "Marcelo Oroquieta - Portfolio",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact",
    "nav.button.downloadcv": "Download CV",
    "sidebar.language": "Language",
    "hero.position": "Frontend Web Developer",
    "hero.description":
      "Building sleek, high-performing web apps with Next.js, React and Astro. Expanding my skill set into fullstack architecture and eagerly exploring the AI space",
    "hero.available": "Available for Work",
    "hero.button": "Contact me",
    "hero.image.alt": "picture of Marcelo Oroquieta",
    "projects.title": "Projects",
    "projects.prepwise.appName": "PREPWISE APP",
    "projects.prepwise.title": "AI-Powered Interview Practice Platform",
    "projects.prepwise.date": "Sep 2025",
    "projects.prepwise.description":
      "Interactive AI assistant for personalized technical interview practice. Supports real-time voice calls, custom scenario creation, and comprehensive post-session analytics.",
    "projects.sapphire.appName": "SAPPHIRE APP",
    "projects.sapphire.title": "Clothes E-Commerce Platform",
    "projects.sapphire.date": "Jul 2025",
    "projects.sapphire.description":
      "A modern high-performance e-commerce platform leveraging Next.js 15 and React 19. Implements type-safe database management with Prisma/Neon, robust form validation using Zod, and middleware-protected routing, featuring secure authentication, role-based access control, and Stripe/PayPal integration.",
    "projects.promptverse.appName": "PROMPTVERSE APP",
    "projects.promptverse.title": "Sharing AI-Powered Prompts",
    "projects.promptverse.date": "Dec 2024",
    "projects.promptverse.description":
      "A collaborative platform for AI prompt management. Built on a Next.js 15 and MongoDB architecture with advanced tag-based search and authenticated content controls.",
    "experience.title": "Experience",
    "experience.employment.fullTime": "Full-time",
    "experience.employment.freelance": "Freelance",
    "experience.globant.company": "Globant",
    "experience.globant.roles.0.title": "Web UI Developer SSr Adv",
    "experience.globant.roles.0.bullets.0":
      "Implemented complex visual components for an executive dashboard, including an interactive 3D globe built with Three.js and Globe.gl.",
    "experience.globant.roles.0.bullets.1":
      "Optimized rendering performance in heavy 3D scenes, ensuring smoothness, stability, and alignment with UX requirements.",
    "experience.globant.roles.0.bullets.2":
      "Built data adapters for Salesforce APIs, handling queries, transformations, and validation with Zod to ensure reliable data flow.",
    "experience.globant.roles.0.bullets.3":
      "Participated in rigorous code reviews and mentored junior developers, strengthening overall team code quality.",
    "experience.globant.roles.1.title": "Web UI Developer SSr",
    "experience.globant.roles.1.bullets.0":
      "Developed A11y improvements after an external audit, resolving key compliance issues and raising the platform’s accessibility standards for public educational use.",
    "experience.globant.roles.1.bullets.1":
      "Managed application state with MobX and introduced TypeScript across core modules, reducing runtime errors and improving responsiveness.",
    "experience.globant.roles.1.bullets.2":
      "Developed responsive and accessible interfaces in React/Next.js using Styled Components combined with Tailwind CSS.",
    "experience.globant.roles.1.bullets.3":
      "Implemented testing strategies to validate components and ensure the reliability and stability of the application.",
    "experience.globant.roles.2.title": "Web UI Developer Jr Adv",
    "experience.globant.roles.2.bullets.0":
      "Applied Atomic Design principles to build reusable, scalable UI components, accelerating feature development for a sustainability project.",
    "experience.globant.roles.2.bullets.1":
      "Implemented React to build a responsive and dynamic user interface, actively engaging in team meetings and progress updates.",
    "experience.globant.roles.2.bullets.2":
      "Contributed to architectural discussions and decisions during the early stages of the project.",
    "experience.globant.roles.2.bullets.3":
      "Participated in code reviews and provided constructive feedback to enhance overall code quality.",
    "experience.globant.roles.3.title": "Service Desk Analyst SSr Adv",
    "experience.globant.roles.3.bullets.0":
      "Provided local and global remote technical support for Windows, Linux (Ubuntu), macOS, and mobile devices.",
    "experience.globant.roles.3.bullets.1": "Deployed desktop and laptop equipment efficiently using MDT and JAMF.",
    "experience.globant.roles.3.bullets.2":
      "Initiated and developed an internal project utilizing artificial intelligence to improve service area operations.",
    "experience.globant.roles.3.bullets.3":
      "Managed device inventory, assigned application licenses, and audited security standards compliance.",
    "experience.globant.roles.4.title": "Service Desk Analyst SSr",
    "experience.globant.roles.4.bullets.0":
      "Resolved hardware and software issues, providing maintenance for workstations, IP telephony, and meeting room peripherals.",
    "experience.globant.roles.4.bullets.1":
      "Created and administered virtual machines to support various internal operations.",
    "experience.globant.roles.4.bullets.2":
      "Administered and created documentation and guides for the support area's knowledge base.",
    "experience.globant.roles.4.bullets.3":
      "Assisted remote areas such as Networks, Telephony, DataCenter, Systems Engineering, and Security.",
    "experience.freelance.company": "Freelance",
    "experience.freelance.roles.0.title": "Frontend Developer - Fullstack",
    "experience.freelance.roles.0.bullets.0":
      "Developed the rebuild of a compliance-embedded technology platform for fleets and mobility partners, migrating the entire application to Next.js to enhance performance and scalability.",
    "experience.freelance.roles.0.bullets.1":
      "Built 'Contact' and 'Coming Soon' pages ensuring pixel-perfect translation from UI designs to production.",
    "experience.freelance.roles.0.bullets.2":
      "Integrated SendGrid API to manage and automate reliable email communications within the platform.",
    "experience.freelance.roles.1.title": "Frontend React Developer",
    "experience.freelance.roles.1.bullets.0":
      "Developed a UI chatbot interface for the frontend application using Prompt-kit.",
    "experience.freelance.roles.1.bullets.1":
      "Built responsive and modern UI components utilizing Next.js, React, Tailwind CSS, and Shadcn UI.",
    "experience.freelance.roles.2.title": "React & Next.js Developer",
    "experience.freelance.roles.2.bullets.0":
      "Migrated a car rental search application to a modern React and Next.js stack.",
    "experience.freelance.roles.2.bullets.1":
      "Architected the application to be fully embeddable via iframes for seamless integration into external client websites.",
    "experience.freelance.roles.2.bullets.2":
      "Rebuilt the UI based on the legacy design and integrated the frontend with a backend API, including a reservation inquiry form.",
    "experience.freelance.roles.3.title": "Next.js & Supabase Developer",
    "experience.freelance.roles.3.bullets.0":
      "Troubleshooted and refactored an AI-generated Next.js application used for managing building parking spaces.",
    "experience.freelance.roles.3.bullets.1":
      "Resolved UI bugs and complex Supabase integration issues that the initial AI generation failed to implement correctly.",
    "experience.freelance.roles.3.bullets.2":
      "Restructured the codebase to restore functionality, improve maintainability, and ensure a stable connection with the Supabase backend.",
    "experience.freelance.roles.4.title": "Frontend Development for Web3 Project",
    "experience.freelance.roles.4.bullets.0":
      "Implemented responsive screens and reusable UI components based on Figma designs for a Web3 platform.",
    "experience.freelance.roles.4.bullets.1":
      "Built the user interface utilizing Tailwind CSS and heavily customized Shadcn UI components to meet specific design requirements.",
    "experience.freelance.roles.5.title": "WordPress Web Developer",
    "experience.freelance.roles.5.bullets.0":
      "Maintained a psychologist's website built on WordPress, ensuring platform stability.",
    "experience.freelance.roles.5.bullets.1":
      "Implemented necessary updates and corrected existing issues to improve overall site functionality.",
    "skills.title": "Skills",
    "testimonials.title": "What People Say",
    "testimonials.items.0.quote":
      "I had the opportunity to work with Marcelo and can highlight his high level of responsibility and commitment in every project. He is characterized by his proactivity and willingness to take on new challenges, always adding value to the team.",
    "testimonials.items.0.title": "Operations Specialist",
    "testimonials.items.1.quote":
      "I have known Marcelo for many years, and I have no doubt that he is one of the most professional individuals I have ever met. His transparency, precision, and analytical skills when solving problems are truly outstanding. He has an impeccable track record.",
    "testimonials.items.1.title": "Cybersecurity Recruitment Specialist",
    "testimonials.items.2.quote":
      "Marcelo was amazing to work with! He was extremely responsive, professional, and delivered results quickly. I hired him to help debug three different apps across multiple tech stacks (React, Next.js, Supabase, Vercel, etc.), and he successfully solved every issue.",
    "testimonials.carousel.avatar.alt": "Photo of {name}",
    "testimonials.carousel.companyLogo.alt": "Logo of {company}",
    "testimonials.carousel.prev": "Previous testimonial",
    "testimonials.carousel.next": "Next testimonial",
    "testimonials.carousel.goto": "Go to testimonial {n}",
    "contact.badge": "Get in touch",
    "contact.description":
      "What’s next? Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect.",
    "contact.email.ariaLabel": "Send email to {email}",
    "contact.copyEmail.ariaLabel": "Copy email address",
    "contact.copied": "Copied!",
    "contact.social": "You may also find me on these platforms!",
    "contact.github.ariaLabel": "Visit GitHub profile",
    "contact.linkedin.ariaLabel": "Visit LinkedIn profile",
    "footer.ariaLabel": "Site footer",
    "footer.description": "Frontend Developer passionate about creating innovative digital solutions",
    "footer.location": "Remote | Mendoza, Argentina",
    "footer.available": "Available for Work",
    "footer.linksTitle": "Quick Links",
    "footer.nav.ariaLabel": "Footer navigation",
    "footer.nav.hero": "Go to top",
    "footer.nav.hero.ariaLabel": "Go to hero section",
    "footer.nav.experience": "Experience",
    "footer.nav.experience.ariaLabel": "Go to experience section",
    "footer.nav.projects": "Projects",
    "footer.nav.projects.ariaLabel": "Go to projects section",
    "footer.nav.contact": "Contact",
    "footer.nav.contact.ariaLabel": "Go to contact section",
    "footer.credit": "Designed and coded with ☕️ by {name}",
    "chatbot.trigger": "Ask My AI",
    "chatbot.title": "Chat with my AI",
    "chatbot.placeholder": "Ask me anything...",
    "chatbot.send": "Send",
    "chatbot.close": "Close chat",
    "chatbot.waiting": "Thinking...",
    "chatbot.demo":
      "Thanks for your message! This is a demo response. The AI integration is coming soon :)",
  },
  es: {
    "head.title": "Marcelo Oroquieta - Portafolio",
    "head.description": "Marcelo Oroquieta - Portafolio",
    "nav.projects": "Proyectos",
    "nav.experience": "Experiencia",
    "nav.testimonials": "Testimonios",
    "nav.contact": "Contacto",
    "nav.button.downloadcv": "Descargar CV",
    "sidebar.language": "Idioma",
    "hero.position": "Desarrollador Frontend Web",
    "hero.description":
      "Desarrollando aplicaciones web elegantes y de alto rendimiento con Next.js, React y Astro. Ampliando mis habilidades hacia la arquitectura fullstack y explorando los alcances campo de la IA",
    "hero.available": "Disponible para Trabajar",
    "hero.button": "Contactame",
    "hero.image.alt": "foto de Marcelo Oroquieta",
    "projects.title": "Proyectos",
    "projects.prepwise.appName": "PREPWISE APP",
    "projects.prepwise.title": "Plataforma de práctica de entrevistas con IA",
    "projects.prepwise.date": "Sep 2025",
    "projects.prepwise.description":
      "Asistente de IA interactivo para practicar entrevistas técnicas de forma personalizada. Incluye llamadas de voz en tiempo real, creación de escenarios a medida y analíticas completas post-sesión.",
    "projects.sapphire.appName": "SAPPHIRE APP",
    "projects.sapphire.title": "Plataforma e-commerce de indumentaria",
    "projects.sapphire.date": "Jul 2025",
    "projects.sapphire.description":
      "Plataforma e-commerce moderna y de alto rendimiento basada en Next.js 15 y React 19. Implementa manejo de base de datos con tipos seguros usando Prisma/Neon, validación robusta de formularios con Zod y routing protegido por middleware, con autenticación segura, control de acceso por roles e integración con Stripe/PayPal.",
    "projects.promptverse.appName": "PROMPTVERSE APP",
    "projects.promptverse.title": "Compartir prompts impulsados por IA",
    "projects.promptverse.date": "Dic 2024",
    "projects.promptverse.description":
      "Plataforma colaborativa para gestión de prompts de IA. Construida con Next.js 15 y MongoDB, con búsqueda avanzada por tags y controles de contenido autenticados.",
    "experience.title": "Experiencia",
    "experience.employment.fullTime": "Tiempo completo",
    "experience.employment.freelance": "Freelance",
    "experience.globant.company": "Globant",
    "experience.globant.roles.0.title": "Desarrollador Web UI SSr Adv",
    "experience.globant.roles.0.bullets.0":
      "Implementé componentes visuales complejos para un dashboard ejecutivo, incluyendo un globo 3D interactivo construido con Three.js y Globe.gl.",
    "experience.globant.roles.0.bullets.1":
      "Optimizé el rendimiento de renderizado en escenas 3D pesadas, asegurando fluidez, estabilidad y alineación con requisitos de UX.",
    "experience.globant.roles.0.bullets.2":
      "Construí adaptadores de datos para APIs de Salesforce, manejando consultas, transformaciones y validación con Zod para asegurar un flujo de datos confiable.",
    "experience.globant.roles.0.bullets.3":
      "Participé en code reviews rigurosos y mentoreé desarrolladores junior, fortaleciendo la calidad general del código del equipo.",
    "experience.globant.roles.1.title": "Desarrollador Web UI SSr",
    "experience.globant.roles.1.bullets.0":
      "Desarrollé mejoras de accesibilidad (A11y) tras una auditoría externa, resolviendo issues clave y elevando los estándares de accesibilidad de la plataforma para uso educativo público.",
    "experience.globant.roles.1.bullets.1":
      "Gestioné el estado de la aplicación con MobX e introduje TypeScript en módulos centrales, reduciendo errores en runtime y mejorando la respuesta.",
    "experience.globant.roles.1.bullets.2":
      "Desarrollé interfaces responsive y accesibles en React/Next.js usando Styled Components combinados con Tailwind CSS.",
    "experience.globant.roles.1.bullets.3":
      "Implementé estrategias de testing para validar componentes y asegurar la confiabilidad y estabilidad de la aplicación.",
    "experience.globant.roles.2.title": "Desarrollador Web UI Jr Adv",
    "experience.globant.roles.2.bullets.0":
      "Apliqué principios de Atomic Design para construir componentes de UI reutilizables y escalables, acelerando el desarrollo de funcionalidades en un proyecto de sostenibilidad.",
    "experience.globant.roles.2.bullets.1":
      "Implementé React para construir una interfaz de usuario responsive y dinámica, participando activamente en reuniones de equipo y actualizaciones de progreso.",
    "experience.globant.roles.2.bullets.2":
      "Contribuí a discusiones y decisiones de arquitectura durante las etapas iniciales del proyecto.",
    "experience.globant.roles.2.bullets.3":
      "Participé en code reviews y brindé feedback constructivo para mejorar la calidad general del código.",
    "experience.globant.roles.3.title": "Analista de Service Desk SSr Adv",
    "experience.globant.roles.3.bullets.0":
      "Brindé soporte técnico remoto local y global para Windows, Linux (Ubuntu), macOS y dispositivos móviles.",
    "experience.globant.roles.3.bullets.1":
      "Desplegué equipamiento de escritorio y laptops de manera eficiente utilizando MDT y JAMF.",
    "experience.globant.roles.3.bullets.2":
      "Inicié y desarrollé un proyecto interno utilizando inteligencia artificial para mejorar la operación del área de soporte.",
    "experience.globant.roles.3.bullets.3":
      "Gestioné inventario de dispositivos, asigné licencias de aplicaciones y audité cumplimiento de estándares de seguridad.",
    "experience.globant.roles.4.title": "Analista de Service Desk SSr",
    "experience.globant.roles.4.bullets.0":
      "Resolví problemas de hardware y software, brindando mantenimiento a estaciones de trabajo, telefonía IP y periféricos de salas de reunión.",
    "experience.globant.roles.4.bullets.1":
      "Creé y administré máquinas virtuales para soportar distintas operaciones internas.",
    "experience.globant.roles.4.bullets.2":
      "Administré y generé documentación y guías para la base de conocimiento del área de soporte.",
    "experience.globant.roles.4.bullets.3":
      "Asistí a áreas remotas como Redes, Telefonía, DataCenter, Ingeniería de Sistemas y Seguridad.",
    "experience.freelance.company": "Freelance",
    "experience.freelance.roles.0.title": "Desarrollador Frontend - Fullstack",
    "experience.freelance.roles.0.bullets.0":
      "Desarrollé el rebuild de una plataforma tecnológica con compliance embebido para flotas y partners de movilidad, migrando toda la aplicación a Next.js para mejorar rendimiento y escalabilidad.",
    "experience.freelance.roles.0.bullets.1":
      "Construí páginas de 'Contact' y 'Coming Soon', asegurando una traducción pixel-perfect desde los diseños de UI a producción.",
    "experience.freelance.roles.0.bullets.2":
      "Integré la API de SendGrid para gestionar y automatizar comunicaciones por email confiables dentro de la plataforma.",
    "experience.freelance.roles.1.title": "Desarrollador Frontend React",
    "experience.freelance.roles.1.bullets.0":
      "Desarrollé una interfaz de chatbot para la aplicación frontend usando Prompt-kit.",
    "experience.freelance.roles.1.bullets.1":
      "Construí componentes de UI responsive y modernos utilizando Next.js, React, Tailwind CSS y Shadcn UI.",
    "experience.freelance.roles.2.title": "Desarrollador React & Next.js",
    "experience.freelance.roles.2.bullets.0":
      "Migré una aplicación de búsqueda de alquiler de autos a un stack moderno con React y Next.js.",
    "experience.freelance.roles.2.bullets.1":
      "Arquitecté la aplicación para que fuera completamente embebible vía iframes para una integración fluida en sitios web externos de clientes.",
    "experience.freelance.roles.2.bullets.2":
      "Reconstruí la UI basada en el diseño legacy e integré el frontend con una API backend, incluyendo un formulario de consulta de reserva.",
    "experience.freelance.roles.3.title": "Desarrollador Next.js & Supabase",
    "experience.freelance.roles.3.bullets.0":
      "Diagnostiqué y refactoricé una aplicación Next.js generada con IA para administrar espacios de estacionamiento en edificios.",
    "experience.freelance.roles.3.bullets.1":
      "Resolví bugs de UI e issues complejos de integración con Supabase que la generación inicial con IA no implementó correctamente.",
    "experience.freelance.roles.3.bullets.2":
      "Reestructuré el codebase para restaurar funcionalidad, mejorar mantenibilidad y asegurar una conexión estable con el backend de Supabase.",
    "experience.freelance.roles.4.title": "Desarrollo Frontend para proyecto Web3",
    "experience.freelance.roles.4.bullets.0":
      "Implementé pantallas responsive y componentes de UI reutilizables basados en diseños de Figma para una plataforma Web3.",
    "experience.freelance.roles.4.bullets.1":
      "Construí la interfaz utilizando Tailwind CSS y componentes de Shadcn UI fuertemente customizados para cumplir requisitos específicos de diseño.",
    "experience.freelance.roles.5.title": "Desarrollador Web WordPress",
    "experience.freelance.roles.5.bullets.0":
      "Mantuve el sitio web de un psicólogo construido en WordPress, asegurando la estabilidad de la plataforma.",
    "experience.freelance.roles.5.bullets.1":
      "Implementé actualizaciones necesarias y corregí issues existentes para mejorar la funcionalidad general del sitio.",
    "skills.title": "Habilidades",
    "testimonials.title": "Feedback que inspira",
    "testimonials.items.0.quote":
      "Tuve la oportunidad de trabajar con Marcelo y puedo destacar su alto nivel de responsabilidad y compromiso en cada proyecto. Se caracteriza por su proactividad y por asumir nuevos desafíos, siempre aportando valor al equipo.",
    "testimonials.items.0.title": "Especialista en Operaciones",
    "testimonials.items.1.quote":
      "Conozco a Marcelo desde hace muchos años y no tengo dudas de que es uno de los profesionales más serios que he conocido. Su transparencia, precisión y capacidad analítica al momento de resolver problemas es algo sobresaliente. Trayectoria intachable.",
    "testimonials.items.1.title": "Especialista en reclutamiento de ciberseguridad",
    "testimonials.items.2.quote":
      "¡Marcelo fue excelente para trabajar! Fue extremadamente receptivo, profesional y entregó resultados rápidamente. Lo contraté para ayudarme a debuggear tres apps distintas en varios stacks (React, Next.js, Supabase, Vercel, etc.) y resolvió cada issue con éxito.",
    "testimonials.carousel.avatar.alt": "Foto de {name}",
    "testimonials.carousel.companyLogo.alt": "Logo de {company}",
    "testimonials.carousel.prev": "Testimonio anterior",
    "testimonials.carousel.next": "Testimonio siguiente",
    "testimonials.carousel.goto": "Ir al testimonio {n}",
    "contact.badge": "Contactame",
    "contact.description":
      "¿Qué sigue? No dudes en contactarme si estás buscando un desarrollador, tenés una consulta o simplemente querés conectar.",
    "contact.email.ariaLabel": "Enviar email a {email}",
    "contact.copyEmail.ariaLabel": "Copiar dirección de email",
    "contact.copied": "¡Copiado!",
    "contact.social": "¡También podés encontrarme en estas plataformas!",
    "contact.github.ariaLabel": "Visitar perfil de GitHub",
    "contact.linkedin.ariaLabel": "Visitar perfil de LinkedIn",
    "footer.ariaLabel": "Pie de página",
    "footer.description": "Desarrollador Frontend apasionado por crear soluciones digitales innovadoras",
    "footer.location": "Remoto | Mendoza, Argentina",
    "footer.available": "Disponible para trabajar",
    "footer.linksTitle": "Enlaces rápidos",
    "footer.nav.ariaLabel": "Navegación del pie",
    "footer.nav.hero": "Ir arriba",
    "footer.nav.hero.ariaLabel": "Ir a la sección principal",
    "footer.nav.experience": "Experiencia",
    "footer.nav.experience.ariaLabel": "Ir a la sección experiencia",
    "footer.nav.projects": "Proyectos",
    "footer.nav.projects.ariaLabel": "Ir a la sección proyectos",
    "footer.nav.contact": "Contacto",
    "footer.nav.contact.ariaLabel": "Ir a la sección contacto",
    "footer.credit": "Diseñado y desarrollado con ☕️ por {name}",
    "chatbot.trigger": "Pregúntale a mi IA",
    "chatbot.title": "Chatea con mi IA",
    "chatbot.placeholder": "Pregúntame lo que quieras...",
    "chatbot.send": "Enviar",
    "chatbot.close": "Cerrar chat",
    "chatbot.waiting": "Pensando...",
    "chatbot.demo":
      "¡Gracias por tu mensaje! Esta es una respuesta de demostración. La integración con la IA está en camino :)",
  },
} as const;
