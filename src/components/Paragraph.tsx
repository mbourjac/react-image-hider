import type { ReactNode } from 'react';

type ParagraphProps = {
  children: ReactNode;
};

export const Paragraph = ({ children }: ParagraphProps) => {
  return (
    <p className="relative text-[4rem] font-bold text-white hover:z-[1]">
      {children}
    </p>
  );
};
