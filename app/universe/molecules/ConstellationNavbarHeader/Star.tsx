import type React from 'react';
import { Link } from 'react-router';

type StarProps = {
  top: Percentage;
  left: Percentage;
  href?: ConstellationHeaderLinks;
  order?: number;
  text?: string;
  ref: React.Ref<HTMLDivElement>;
  activeLink: ConstellationHeaderLinks;
  hoveredLink: ConstellationHeaderLinks | null;
};

export default function Star({
  top,
  left,
  href,
  order,
  text,
  ref,
  activeLink,
  hoveredLink,
}: StarProps) {
  const backgroundGlowStyle: React.CSSProperties = {
    top,
    left,
    boxShadow:
      '0 0 30px 5px #ffffff41, 0 0 50px 20px rgba(255, 0, 255, 0.363), 0 0 70px 35px rgba(0, 255, 255, 0.315)',
  };

  if (href && order && text) {
    const isActive = activeLink === href;
    const isHovered = hoveredLink === href;

    return (
      <Link
        to={href}
        style={backgroundGlowStyle}
        aria-hidden
        className="group absolute sm:w-3 sm:h-3 w-2 h-2 rounded-full sm:border-[6px] border-white bg-white z-10"
      >
        <div ref={ref}></div>
        <StarAnnotation order={order} text={text} />
        <ActiveStarDecor
          className={isHovered || isActive ? 'opacity-100' : ''}
        />
      </Link>
    );
  }

  return (
    <div
      ref={ref}
      style={backgroundGlowStyle}
      aria-hidden
      className="z-10 absolute select-none w-3 h-3 rounded-full border-[6px] border-white bg-white group"
    >
      <ActiveStarDecor />
    </div>
  );
}

type StarAnnotationProps = {
  order: number;
  text: string;
};

function StarAnnotation({ order, text }: StarAnnotationProps) {
  return (
    <>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 sm:w-10 sm:h-10 w-6 h-6 border border-white opacity-70"></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 sm:w-12 sm:h-12 w-8 h-8 border border-white opacity-70"></div>
      <div className="absolute -left-1/2 top-10 -translate-x-1/2 flex items-center gap-2 text-white">
        <div className="border border-white sm:p-1">
          {String(order).padStart(2, '0')}
        </div>
        <div>{text}</div>
      </div>
    </>
  );
}

type ActiveStarDecorProps = {
  className?: string;
};

function ActiveStarDecor({ className }: ActiveStarDecorProps) {
  return (
    <div
      aria-hidden
      className={[
        'transition-opacity duration-800 opacity-0 group-hover:opacity-100',
        className,
      ].join(' ')}
    >
      <div className="absolute top-0 left-0 -translate-x-[49.5%] -translate-y-[51.5%]">
        <div
          aria-hidden
          className="text-white text-7xl animate-spin [animation-duration:10s] transition-opacity"
        >
          ✶
        </div>
      </div>
      <div className="absolute top-0 left-0 -translate-x-[49.5%] -translate-y-[51.5%]">
        <div
          aria-hidden
          className="text-white text-7xl animate-spin scale-200 opacity-20 [animation-duration:5s] transition-opacity"
        >
          ✶
        </div>
      </div>
    </div>
  );
}
