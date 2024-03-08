import type { ReactNode } from 'react';

type ParagraphProps = {
  children: ReactNode;
};

export const Paragraph = ({ children }: ParagraphProps) => {
  return <p className="text-[4rem] font-bold text-white">{children}</p>;
};
