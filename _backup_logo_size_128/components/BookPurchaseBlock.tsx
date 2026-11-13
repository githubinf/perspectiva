import React from 'react';
import { BookItem, PurchaseOption } from '../types.ts';

export const OFFICIAL_PLATFORM_LOGOS = {
  amazonTapaBlanda: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/amazon-tapa-blanda.png',
  amazonKindleEbook: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/amazon-kindle-ebook.png',
  amazonTapaDura: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/amazon-tapa-dura.png',
  googlePlayAudiolibro: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/google_play_audiolibro.jpg',
  googlePlayEbook: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/google_play_ebook.jpg',
  googlePlayBook: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/google_play_book.png',
  kofi: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/ko-fi-logo.jpg',
  clickbank: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/clickbank-logo.jpg',
  payhip: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/payhip-logo.jpg',
  draft2digital: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/draft2digital-logo.jpg',
  lulu: 'https://ik.imagekit.io/ywyqvhnoc/fg-perspectiva/lulu-logo.jpg'
} as const;

export interface PurchaseTile {
  id: string;
  platform: string;
  format?: string;
  tooltip: string;
  logo: string;
  url: string;
  priority: number;
}

export function resolvePurchaseTiles(book: BookItem): PurchaseTile[] {
  const options: PurchaseOption[] = (book.purchaseOptions && book.purchaseOptions.length > 0)
    ? book.purchaseOptions
    : (book.url && book.url !== '#' ? [{ platform: 'Amazon', url: book.url }] : []);

  const tiles: PurchaseTile[] = [];

  for (let i = 0; i < options.length; i++) {
    const opt = options[i];
    if (!opt.url || opt.url === '#') continue;

    const p = (opt.platform || '').toLowerCase().trim();
    const cta = (opt.cta || '').toLowerCase().trim();
    const format = (opt.format || '').toLowerCase().trim();

    // 1. Amazon: diferenciar las tres ediciones
    if (p === 'amazon' || opt.url.includes('amazon') || opt.url.includes('amzn.to')) {
      if (cta.includes('kindle') || format.includes('kindle')) {
        tiles.push({
          id: `amazon-kindle-${i}`,
          platform: 'Amazon',
          format: 'Kindle ebook',
          tooltip: 'Amazon · Kindle ebook',
          logo: OFFICIAL_PLATFORM_LOGOS.amazonKindleEbook,
          url: opt.url,
          priority: 2
        });
      } else if (cta.includes('tapa dura') || format.includes('tapa dura') || cta.includes('hardcover')) {
        tiles.push({
          id: `amazon-tapadura-${i}`,
          platform: 'Amazon',
          format: 'Tapa dura',
          tooltip: 'Amazon · Tapa dura',
          logo: OFFICIAL_PLATFORM_LOGOS.amazonTapaDura,
          url: opt.url,
          priority: 3
        });
      } else {
        // Prioridad comercial establecida: tapa blanda como principal
        tiles.push({
          id: `amazon-tapablanda-${i}`,
          platform: 'Amazon',
          format: 'Tapa blanda',
          tooltip: 'Amazon · Tapa blanda',
          logo: OFFICIAL_PLATFORM_LOGOS.amazonTapaBlanda,
          url: opt.url,
          priority: 1
        });
      }
    }
    // 2. Google Play Books
    else if (p.includes('google play') || p.includes('google_play') || p.includes('googleplay')) {
      if (format === 'audiolibro' || cta.includes('audiolibro')) {
        tiles.push({
          id: `googleplay-audiolibro-${i}`,
          platform: 'Google Play',
          format: 'Audiolibro',
          tooltip: 'Google Play · Audiolibro',
          logo: OFFICIAL_PLATFORM_LOGOS.googlePlayAudiolibro,
          url: opt.url,
          priority: 35
        });
      } else if (format === 'ebook' || cta.includes('ebook') || opt.emoji === '📱') {
        tiles.push({
          id: `googleplay-ebook-${i}`,
          platform: 'Google Play',
          format: 'Ebook',
          tooltip: 'Google Play · Ebook',
          logo: OFFICIAL_PLATFORM_LOGOS.googlePlayEbook,
          url: opt.url,
          priority: 35
        });
      } else if (format === 'libro' || format === 'tapa blanda' || format === 'tapa dura' || cta.includes('libro')) {
        tiles.push({
          id: `googleplay-libro-${i}`,
          platform: 'Google Play',
          format: 'Libro',
          tooltip: 'Google Play · Libro',
          logo: OFFICIAL_PLATFORM_LOGOS.googlePlayBook,
          url: opt.url,
          priority: 35
        });
      }
      // Nota: Si el formato no estuviera confirmado en los datos, no se deduce por URL ni se asigna variante ficticia.
    }
    // 3. ClickBank
    else if (p.includes('clickbank')) {
      tiles.push({
        id: `clickbank-${i}`,
        platform: 'ClickBank',
        tooltip: 'ClickBank',
        logo: OFFICIAL_PLATFORM_LOGOS.clickbank,
        url: opt.url,
        priority: 10
      });
    }
    // 4. Payhip
    else if (p.includes('payhip')) {
      tiles.push({
        id: `payhip-${i}`,
        platform: 'Payhip',
        tooltip: 'Payhip',
        logo: OFFICIAL_PLATFORM_LOGOS.payhip,
        url: opt.url,
        priority: 20
      });
    }
    // 5. Draft2Digital
    else if (p.includes('draft2digital')) {
      tiles.push({
        id: `draft2digital-${i}`,
        platform: 'Draft2Digital',
        tooltip: 'Draft2Digital',
        logo: OFFICIAL_PLATFORM_LOGOS.draft2digital,
        url: opt.url,
        priority: 30
      });
    }
    // 6. Lulu
    else if (p.includes('lulu')) {
      tiles.push({
        id: `lulu-${i}`,
        platform: 'Lulu',
        tooltip: 'Lulu',
        logo: OFFICIAL_PLATFORM_LOGOS.lulu,
        url: opt.url,
        priority: 40
      });
    }
    // 7. Ko-fi
    else if (p.includes('ko-fi') || p.includes('kofi')) {
      tiles.push({
        id: `kofi-${i}`,
        platform: 'Ko-fi',
        tooltip: 'Ko-fi',
        logo: OFFICIAL_PLATFORM_LOGOS.kofi,
        url: opt.url,
        priority: 50
      });
    }
    // Cualquier otra plataforma sin logotipo oficial no se incluye para no inventar recursos
  }

  // Ordenar por prioridad establecida (Amazon Tapa blanda primero, luego Kindle, Tapa dura, etc.)
  tiles.sort((a, b) => a.priority - b.priority);

  return tiles;
}

interface BookPurchaseBlockProps {
  book: BookItem;
}

const BookPurchaseBlock: React.FC<BookPurchaseBlockProps> = ({ book }) => {
  const tiles = resolvePurchaseTiles(book);

  return (
    <div className="w-full bg-[#dae7df]/20 border border-[#dae7df]/60 rounded-2xl p-6 sm:p-7 shadow-lg">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-7">
        {/* Zona izquierda: Portada del libro */}
        <div className="flex-shrink-0 w-44 sm:w-48 flex justify-center">
          <img
            src={book.coverUrl}
            alt={book.title}
            className="w-full h-auto rounded-md shadow-md border border-[#dae7df]/80 object-cover"
            loading="eager"
            width={400}
            height={580}
          />
        </div>

        {/* Zona derecha: Plataformas de compra */}
        <div className="flex-grow flex flex-col justify-start items-center sm:items-start w-full sm:w-auto">
          {book.isAvailable !== false && tiles.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-3.5 justify-items-center sm:justify-items-start">
              {tiles.map((tile) => (
                <div key={tile.id} className="relative group/tooltip flex items-center justify-center">
                  <a
                    href={tile.url}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    aria-label={tile.tooltip}
                    className="w-16 h-16 rounded-xl bg-white border border-[#dae7df] shadow-xs hover:shadow-md hover:border-[#4db380] hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#174532] focus-visible:outline-none transition-all flex items-center justify-center p-2.5 cursor-pointer relative"
                  >
                    <img
                      src={tile.logo}
                      alt={tile.tooltip}
                      className="w-full h-full object-contain pointer-events-none"
                      loading="lazy"
                      width={64}
                      height={64}
                    />
                  </a>

                  {/* Tooltip discreto exclusivo con plataforma y formato */}
                  <div
                    role="tooltip"
                    className="absolute -top-9 left-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover/tooltip:opacity-100 group-focus-within/tooltip:opacity-100 transition-opacity duration-150 z-30 flex flex-col items-center"
                  >
                    <span className="bg-[#174532] text-white text-[11px] font-medium px-2.5 py-1 rounded shadow-md whitespace-nowrap tracking-wide leading-none">
                      {tile.tooltip}
                    </span>
                    <span className="w-1.5 h-1.5 bg-[#174532] rotate-45 -mt-0.5"></span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full py-4 px-4 bg-[#f4b925]/15 border border-[#f4b925]/40 text-[#174532] text-center rounded-md font-bold text-xs uppercase tracking-wider">
              ⏳ Edición en preparación • Próximamente disponible
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookPurchaseBlock;
