import React from 'react';
import Breadcrumbs from '../Breadcrumbs.tsx';

interface LegalPageShellProps {
  title: string;
  intro: string;
  lastUpdated: string;
  children: React.ReactNode;
}

const LegalPageShell: React.FC<LegalPageShellProps> = ({
  title,
  intro,
  lastUpdated,
  children,
}) => {
  return (
    <div className="pt-28 bg-white text-[#1b1b1b]">
      <header className="bg-[#dae7df]/20 border-b border-[#174532]/12 pb-10 md:pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <Breadcrumbs items={[{ label: title }]} />

          <div className="mt-4 max-w-[65ch]">
            <h1 className="text-h1 font-bold font-serif text-[#174532] leading-tight mb-4">
              {title}
            </h1>
            <p className="text-subtitle text-[#1b1b1b]/80 font-normal leading-relaxed">
              {intro}
            </p>
          </div>
        </div>
      </header>

      <article className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="max-w-[70ch] space-y-10 text-body text-[#1b1b1b]/85 leading-relaxed">
            {children}

            <div className="pt-8 border-t border-[#dae7df]/80">
              <p className="text-[14.5px] font-semibold text-[#174532]">
                {lastUpdated}
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default LegalPageShell;
