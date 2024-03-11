import { useState } from 'react';

export const useElementMousePosition = <T extends HTMLElement>() => {
  const [elementMousePosition, setElementMousePosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const updateElementMousePosition = (event: React.MouseEvent<T>) => {
    const { x, y } = event.currentTarget.getBoundingClientRect();

    setElementMousePosition({
      x: event.clientX - x,
      y: event.clientY - y,
    });
  };

  const resetElementMousePosition = () => {
    setElementMousePosition(null);
  };

  return {
    elementMousePosition,
    resetElementMousePosition,
    updateElementMousePosition,
  };
};
