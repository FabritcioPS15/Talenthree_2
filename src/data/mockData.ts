
import Comercio from './../medios/comercioexterior.png';
import Auxiliarti from './../medios/auxiliarti.png';
import Contable from './../medios/asistcontable.png';
import { BiCategory } from 'react-icons/bi';
export const courses = [
  {
    id: '1',
    title: 'Asistente Contable y Financiero',
    instructor: 'María Rodríguez',
    description: 'Aprende hoy las competencias contables y financieras que mañana te convertirán en pieza clave de cualquier organización...',
    price: 49.99,
    image: Contable,
    duration: '4 meses',
    students: 1258,
    rating: 4.8,
    modality: 'Virtual' as const,
    level: 'Principiante' as const,
    category: 'Desarrollo Personal' as const
  },
  {
    id: '2',
    title: 'Comercio Internacional',
    instructor: 'Carlos López',
    description: 'Gestiona oportunidades de negocio en el comercio exterior y conecta empresas con nuevos mercados alrededor del mundo...',
    price: 59.99,
    image: Comercio,
    duration: '6 meses',
    students: 842,
    rating: 4.6,
    modality: 'Virtual' as const,
    level: 'Intermedio' as const,
    category: 'Formación Laboral' as const
  },
  {
    id: '3',
    title: 'Auxiliar de TI',
    instructor: 'Ana Martínez',
    description: 'Aprende a brindar soporte básico de sistemas, atención técnica, manejo de bases de datos simples, gestión de hardware y software ...',
    price: 69.99,
    image: Auxiliarti,
    duration: '4 meses',
    students: 43,
    rating: 4.9,
    modality: 'Hibrido' as const,
    level: 'Principiante' as const,
    category: 'Formación Laboral' as const
  },
  {
    id: '4',
    title: 'Python para Ciencia de Datos',
    instructor: 'Roberto Sánchez',
    description: 'Introducción a Python para análisis de datos, visualización y machine learning básico.',
    price: 54.99,
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    duration: '20 horas',
    students: 1547,
    rating: 4.7,
    level: 'Principiante' as const,
    category: 'Formación Laboral' as const
  },
  {
    id: '5',
    title: 'Arquitectura de Software Avanzada',
    instructor: 'Laura Gómez',
    description: 'Aprende patrones de diseño, arquitecturas modernas y mejores prácticas para construir software robusto y escalable.',
    price: 79.99,
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    duration: '16 horas',
    students: 412,
    rating: 4.8,
    level: 'Avanzado' as const,
    category: 'Formación Laboral' as const
  },
  {
    id: '6',
    title: 'Introducción a la Ciberseguridad',
    instructor: 'Miguel Torres',
    description: 'Fundamentos de seguridad informática, hacking ético y protección de sistemas y datos.',
    price: 64.99,
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    duration: '14 horas',
    students: 928,
    rating: 4.5,
    level: 'Principiante' as const,
    category: 'Formación Laboral' as const
  },
];

export const events = [
  {
    id: '1',
    title: 'Ser 360: Descubre el arquitecto que hay en ti',
    date: '2025-07-15',
    time: '4 semanas',
    location: 'Semi presencial',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Curso teórico-práctico que promueve el desarrollo integral del ser humano. Combina herramientas físicas, emocionales y espirituales para fortalecer el bienestar personal...',
    isFeatured: true,
  },
  {
    id: '2',
    title: 'Mi primer trabajo: errores que no volvería a cometer',
    date: '2025-09-17',
    time: '19:00 Perú',
    location: 'Live',
    image: 'https://images.pexels.com/photos/7103/writing-notes-idea-conference.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Live en el que Waldo Barragán comparte sus experiencias reales y lecciones clave de sus inicios laborales. Hablaremos de decisiones apresuradas, falta de habilidades blandas, y como la inseguridad puede jugar en contra ...',
    isFeatured: false,
  },
  {
    id: '3',
    title: 'Tech Meetup: Inteligencia Artificial',
    date: '2025-08-05',
    time: '18:30 - 21:00',
    location: 'Hub Tecnológico Central',
    image: 'https://images.pexels.com/photos/2173508/pexels-photo-2173508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Encuentro para discutir los avances recientes en IA y su aplicación en diferentes industrias.',
    isFeatured: false,
  },
  {
    id: '4',
    title: 'Mi primer trabajo: errores que no volvería a cometer',
    date: '2025-09-17',
    time: '19:00 Perú',
    location: 'Live',
    image: 'https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Live en el que Waldo Barragán comparte sus experiencias reales y lecciones clave de sus inicios laborales. Hablaremos de decisiones apresuradas, falta de habilidades blandas, y como la inseguridad puede jugar en contra ...',
    isFeatured: true,
  },
];

export const instructors = [
  {
    id: '1',
    name: 'María Rodríguez',
    specialty: 'Desarrollo Frontend',
    bio: 'Ingeniera de software con más de 8 años de experiencia en desarrollo frontend. Especialista en React y arquitecturas modernas de UI.',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    courses: 5,
    students: 3200,
    rating: 4.8,
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      youtube: 'https://youtube.com'
    }
  },
  {
    id: '2',
    name: 'Carlos López',
    specialty: 'Desarrollo Backend',
    bio: 'Arquitecto de software con enfoque en sistemas distribuidos y microservicios. Más de 10 años de experiencia en Node.js y Java.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    courses: 7,
    students: 4800,
    rating: 4.6,
    social: {
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com',
    }
  },
  {
    id: '3',
    name: 'Ana Martínez',
    specialty: 'Desarrollo Mobile',
    bio: 'Desarrolladora mobile con experiencia en React Native, Swift y Kotlin. Ha trabajado en aplicaciones de alta escala para empresas Fortune 500.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    courses: 4,
    students: 2700,
    rating: 4.9,
    social: {
      twitter: 'https://twitter.com',
      youtube: 'https://youtube.com'
    }
  },
  {
    id: '4',
    name: 'Roberto Sánchez',
    specialty: 'Ciencia de Datos',
    bio: 'PhD en Inteligencia Artificial con experiencia en investigación. Especialista en Python para análisis de datos y machine learning.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    courses: 6,
    students: 5100,
    rating: 4.7,
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  },
];