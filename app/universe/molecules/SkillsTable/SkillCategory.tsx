export default function SkillCategory({
  heading,
  children,
}: {
  heading: string;
  index: number;
  children: React.ReactNode | null;
}) {
  return (
    <li>
      <h2>{heading}</h2>
      <ul>{children}</ul>
    </li>
  );
}
