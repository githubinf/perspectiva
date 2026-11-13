
export interface PurchaseOption {
  platform: string;
  url: string;
  logo?: string;
  emoji?: string;
  cta?: string;
  isPrimary?: boolean;
  rel?: string;
  format?: string;
}

export interface AudiobookOption {
  platform: string;
  url: string;
}

export interface EditorialBullet {
  title?: string;
  description: string;
}

export interface EditorialSubsection {
  title: string;
  paragraphs?: string[];
  bullets?: EditorialBullet[];
}

export interface EditorialSection {
  title: string;
  paragraphs?: string[];
  bullets?: EditorialBullet[];
  subsections?: EditorialSubsection[];
}

export interface BookItem {
  id?: string;
  slug?: string;
  path?: string;
  categorySlug?: string;
  title: string;
  subtitle?: string;
  description: string;
  url: string;
  coverUrl?: string;
  purchaseOptions?: PurchaseOption[];
  audiobookOptions?: AudiobookOption[];
  extraInfo?: string[];
  editorialSections?: EditorialSection[];
  isAvailable?: boolean;
  metaTitle?: string;
  metaDescription?: string;
  bookFormat?: string | null;
}

export interface BookCategory {
  id: string;
  slug?: string;
  path?: string;
  title: string;
  category: string;
  intro: string;
  coverUrl: string;
  books: BookItem[];
  metaTitle?: string;
  metaDescription?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

