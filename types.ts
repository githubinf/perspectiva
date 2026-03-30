
export interface PurchaseOption {
  platform: string;
  url: string;
  logo?: string;
  emoji?: string;
  cta?: string;
}

export interface BookItem {
  title: string;
  description: string;
  url: string;
  coverUrl?: string;
  purchaseOptions?: PurchaseOption[];
}

export interface BookCategory {
  id: string;
  title: string;
  category: string;
  intro: string;
  coverUrl: string;
  books: BookItem[];
}

export interface NavItem {
  label: string;
  href: string;
}
