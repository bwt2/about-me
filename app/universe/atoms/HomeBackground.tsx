import type { CSSProperties } from 'react';

const homeBackgroundStyle: CSSProperties = {
  position: 'fixed',
  inset: 0,
  pointerEvents: 'none',
  zIndex: -1,
  background:
    'radial-gradient(circle at center, #391E2A 20%, #272230 50%, #11202B 80%)',
  transform: 'translate(-50%, -50%) scale(2)',
};

export default function HomeBackground() {
  return <div aria-hidden style={homeBackgroundStyle} />;
}
