import type { PostMeta } from './posts';
// import { useShikiHighlighter } from 'react-shiki';
// import { underlineAnnotatedLines } from './shikiTransformers';

export const meta: PostMeta = {
  title: 'Hello World',
  date: '2025-12-20',
  description: 'Blog beta test',
};

export default function Post() {
  //   const code = `fn test() {
  //   no; // [!test]
  // }`;

  //   const highlightedCode = useShikiHighlighter(code, 'rust', 'vitesse-dark', {
  //     transformers: [underlineAnnotatedLines()],
  //   });

  return (
    <>
      <p>Hey, you're not supposed to see this!</p>
      {/* <code className="p-5 bg-[#121212] rounded mb-5 mt-5">
        {highlightedCode}
      </code> */}
    </>
  );
}
