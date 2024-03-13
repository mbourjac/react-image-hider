import type { ReactNode } from 'react';

type ParagraphProps = {
  children: ReactNode;
};

export const Paragraph = ({ children }: ParagraphProps) => {
  return (
    <p className="relative text-[2.5rem] font-bold text-white hover:z-[--hovered-paragraph-z-index] sm:text-[3rem] lg:text-[4rem]">
      {children}
    </p>
  );
};
