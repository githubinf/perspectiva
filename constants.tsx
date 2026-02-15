
import { Book, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Biblioteca', href: '#biblioteca' },
  { label: 'Sistemas', href: '#sistemas' },
  { label: 'Sobre la editorial', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

export const FEATURED_BOOKS: Book[] = [
  {
    id: '1',
    title: '📚 Fundamentos digitales',
    description: 'Para quienes quieren construir su primer activo online con bases sólidas.\n\nLibros:\n- Cómo crear un Blog optimizado\n- Mi Blog y los Programas de Afiliados\n- Guía Completa de Inbound Marketing',
    coverUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800',
    category: 'Iniciación',
    amazonUrl: '#',
    buttonLabel: '👉 Ver esta ruta'
  },
  {
    id: '2',
    title: '💰 Monetización y afiliación',
    description: 'Sistemas reales para convertir tráfico en ingresos.\n\nLibros:\n- Dominando el marketing de afiliados\n- Marketing CPA Revelado\n- Cpa Marketing Fórmula Smartlink\n- Dinero con Clickbank en minutos',
    coverUrl: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=800',
    category: 'Ingresos',
    amazonUrl: '#',
    buttonLabel: '👉 Explorar monetización'
  },
  {
    id: '3',
    title: '🤖 Inteligencia Artificial aplicada',
    description: 'Usa la IA como herramienta práctica, no como moda.\n\nLibros:\n- Cómo ganar dinero con ChatGPT\n- Desbloquea tu inspiración con ChatGPT\n- Inteligencia Artificial\n- El futuro del marketing (IA)',
    coverUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    category: 'Tecnología',
    amazonUrl: '#',
    buttonLabel: '👉 Ver IA aplicada'
  },
  {
    id: '4',
    title: '🚀 Tráfico, contenidos y crecimiento',
    description: 'Aprende a atraer personas reales a tus proyectos.\n\nLibros:\n- Ideas Maestras de Tráfico Web\n- Ideas y consejos de Tráfico Web\n- El Poder del Marketing de Contenidos\n- Dominando el Arte del Email Marketing',
    coverUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    category: 'Crecimiento',
    amazonUrl: '#',
    buttonLabel: '👉 Aumentar mi tráfico'
  },
  {
    id: '5',
    title: '🧠 Mentalidad y creación',
    description: 'Para construir desde dentro hacia fuera.\n\nLibros:\n- El Vendedor Hipnótico\n- El arte de atraer la abundancia\n- De la Pluma al Dinero\n- Cómo crear Ebooks\n- Ebook en 24 horas',
    coverUrl: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?auto=format&fit=crop&q=80&w=800',
    category: 'Mindset',
    amazonUrl: '#',
    buttonLabel: '👉 Desarrollar mi mentalidad'
  }
];
