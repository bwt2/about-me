import { skills } from './SkillsData';
import SkillCategory from '~/universe/molecules/SkillsTable/SkillCategory';
import SkillCategoryContents from '~/universe/molecules/SkillsTable/SkillCategoryContents';

export default function Skills() {
  return (
    <>
      <>
        <h1 className="text-white font-bold text-5xl mb-10">Skills</h1>
        <main>
          <ul>
            {skills.map((data, index) => (
              <SkillCategory
                key={data.category}
                heading={data.category}
                index={index}
              >
                <SkillCategoryContents
                  category={data.category}
                  skills={data.skills}
                />
              </SkillCategory>
            ))}
          </ul>
        </main>
      </>
    </>
  );
}
