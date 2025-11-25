export default function SkillCategoryContents({
  skills,
}: {
  skills: string[];
}) {
  return (
    <>
      {skills.sort().map((skill, index) => (
        <li
          className="text-gray-300 hover:text-white transition-colors"
          key={index + skill}
        >
          {skill}
        </li>
      ))}
    </>
  );
}
