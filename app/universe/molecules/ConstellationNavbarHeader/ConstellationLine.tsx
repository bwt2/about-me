import { useState, useEffect, useRef } from 'react';

type coordinates = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};

type ConstellationLineProps = {
  headElem: HTMLDivElement;
  tailElem: HTMLDivElement;
  svgElem: SVGSVGElement;
};

export default function ConstellationLine({
  headElem,
  tailElem,
  svgElem,
}: ConstellationLineProps) {
  const [coords, setCoords] = useState<coordinates>({
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
  });
  const randomTimer = useRef(Math.floor(Math.random() * 10) + 5);

  useEffect(() => {
    if (!headElem || !tailElem) return;

    const updateCoords = () => {
      if (!headElem || !tailElem) return;

      const headRect: DOMRect = headElem.getBoundingClientRect();
      const tailRect: DOMRect = tailElem.getBoundingClientRect();
      const svgRect: DOMRect = svgElem.getBoundingClientRect();

      setCoords({
        x1: headRect.left + headRect.width / 2 - svgRect.left,
        y1: headRect.top + headRect.height / 2 - svgRect.top,
        x2: tailRect.left + tailRect.width / 2 - svgRect.left,
        y2: tailRect.top + tailRect.height / 2 - svgRect.top,
      });
    };

    updateCoords();

    window.addEventListener('resize', updateCoords);
    return () => window.removeEventListener('resize', updateCoords);
  }, [headElem, tailElem, svgElem]);

  return (
    <line
      x1={coords.x1}
      y1={coords.y1}
      x2={coords.x2}
      y2={coords.y2}
      stroke="white"
      strokeWidth="4"
      opacity="0.25"
    >
      <animate
        attributeName="opacity"
        values="0;0.25;0"
        dur={`${randomTimer.current}s`}
        repeatCount="indefinite"
      />
    </line>
  );
}
