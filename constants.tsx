
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
    title: 'Sistemas de Activos Digitales',
    description: 'Cómo construir estructuras que trabajen por ti mientras duermes.',
    coverUrl: 'https://picsum.photos/seed/book1/400/600',
    category: 'Marketing',
    amazonUrl: '#'
  },
  {
    id: '2',
    title: 'Perspectiva Estratégica',
    description: 'El arte de ver lo que otros ignoran en un mercado saturado.',
    coverUrl: 'https://picsum.photos/seed/book2/400/600',
    category: 'Mentalidad',
    amazonUrl: '#'
  },
  {
    id: '3',
    title: 'IA Aplicada al Crecimiento',
    description: 'No es tecnología, es apalancamiento. Guía para humanos reales.',
    coverUrl: 'https://picsum.photos/seed/book3/400/600',
    category: 'Tecnología',
    amazonUrl: '#'
  },
  {
    id: '4',
    title: 'Marketing de Intención',
    description: 'Por qué el ruido ya no vende y cómo atraer mediante la utilidad.',
    coverUrl: 'https://picsum.photos/seed/book4/400/600',
    category: 'Negocios',
    amazonUrl: '#'
  }
];
