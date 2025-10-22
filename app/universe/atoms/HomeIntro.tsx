export default function HomeIntro() {
  const titles: string[] = [
    'Full-stack Developer',
    'ML Engineer',
    'Robotics Software',
  ];
  return (
    <div className="flex flex-col gap-3 items-start">
      <h1 className="text-white text-7xl font-light">Brian Tjahjadi</h1>
      <ol className="text-white text-base font-light flex gap-5">
        {titles.map((item, i) => (
          <>
            <li>{item}</li>
            {i !== titles.length - 1 && (
              <span className="select-none" aria-hidden="true">
                |
              </span>
            )}
          </>
        ))}
      </ol>
    </div>
  );
}
