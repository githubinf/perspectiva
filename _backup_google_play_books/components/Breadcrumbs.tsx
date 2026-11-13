import React from 'react';
import { Link } from '../router.tsx';
import { ChevronRight } from 'lucide-react';

export interface CrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: CrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-4 text-xs font-medium text-[#1b1b1b]/60">
      <ol className="flex items-center flex-wrap gap-2">
        <li>
          <Link href="/" className="hover:text-[#174532] transition-colors">
            Inicio
          </Link>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center gap-2">
              <ChevronRight className="w-3 h-3 text-[#174532]/30 flex-shrink-0" />
              {isLast || !item.href ? (
                <span className="text-[#174532] font-semibold truncate max-w-[200px] sm:max-w-xs md:max-w-md">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-[#174532] transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
