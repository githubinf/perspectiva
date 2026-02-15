
export interface Book {
  id: string;
  title: string;
  description: string;
  coverUrl: string;
  category: string;
  amazonUrl: string;
  buttonLabel?: string;
}

export interface NavItem {
  label: string;
  href: string;
}