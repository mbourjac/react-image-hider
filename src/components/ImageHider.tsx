import type { ReactNode } from 'react';
import { useElementMousePosition } from '../hooks/use-element-mouse-position';

type ImageHiderProps = {
  src: string;
  alt?: string;
  children: ReactNode;
  aspectRatio?: number;
};

export const ImageHider = ({
  src,
  alt = '',
  aspectRatio,
  children,
}: ImageHiderProps) => {
  const {
    elementMousePosition,
    resetElementMousePosition,
    updateElementMousePosition,
  } = useElementMousePosition<HTMLSpanElement>();

  return (
    <span className="group relative inline-block">
      <span
        className="text-stroke-1 lg:text-stroke-1.5 relative inline-block cursor-default text-transparent text-stroke-white"
        onMouseMove={updateElementMousePosition}
        onMouseOut={resetElementMousePosition}
        onBlur={resetElementMousePosition}
      >
        {children}
        {elementMousePosition && (
          <span
            className="pointer-events-none absolute z-[--revealed-image-z-index] w-[min(32rem,80vw)] [transform:translate(-50%,-50%)]"
            style={{
              left: elementMousePosition?.x,
              top: elementMousePosition?.y,
              aspectRatio,
            }}
          >
            <img src={src} alt={alt} className="h-full w-full" />
          </span>
        )}
      </span>
      <span className="text-stroke-1 lg:text-stroke-1.5 pointer-events-none absolute left-0 top-0 inline-block text-transparent text-stroke-white group-hover:z-[--hovered-label-z-index]">
        {children}
      </span>
    </span>
  );
};
