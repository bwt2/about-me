import React from 'react';

export default function HomeIntro() {
  const titles: string[] = [
    'Full-stack Developer',
    'ML Engineer',
    'Robotics Software',
  ];
  return (
    <div className="flex flex-col gap-3 sm:items-start p-2 sm:p-0 items-center">
      <h1 className="text-white sm:text-7xl font-light text-4xl">
        Brian Tjahjadi
      </h1>
      <ol className="text-white sm:text-base font-light flex gap-5 text-sm mt-2 sm:mt-0">
        {titles.map((item, i) => (
          <React.Fragment key={i}>
            <li className="sm:text-base text-sm text-center">{item}</li>
            {i !== titles.length - 1 && (
              <span
                className="flex flex-col justify-center select-none scale-y-200 sm:scale-y-100"
                aria-hidden="true"
              >
                |
              </span>
            )}
          </React.Fragment>
        ))}
      </ol>
    </div>
  );
}
