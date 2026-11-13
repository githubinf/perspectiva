
export interface PurchaseOption {
  platform: string;
  url: string;
  logo?: string;
  emoji?: string;
  cta?: string;
}

export interface AudiobookOption {
  platform: string;
  url: string;
}

export interface BookItem {
  id?: string;
  title: string;
  description: string;
  url: string;
  coverUrl?: string;
  purchaseOptions?: PurchaseOption[];
  audiobookOptions?: AudiobookOption[];
  extraInfo?: string[];
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
