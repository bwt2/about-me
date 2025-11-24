export default function SkillCategoryContents({
  category,
  skills,
}: {
  category: string;
  skills: string[];
}) {
  return (
    <>
      {skills.sort().map((skill) => (
        <li key={category + skill}>{skill}</li>
      ))}
    </>
  );
}
