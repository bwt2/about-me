import type { ShikiTransformer } from 'shiki';
import { HastNodeToText } from './utils';
import type { RootContent } from 'hast';

export function underlineAnnotatedLines(): ShikiTransformer {
  return {
    name: 'underline-annotated-lines',

    line(node) {
      const identifierComment = '// [!test]';
      const lineText = (node.children ?? []).map(HastNodeToText).join('');

      if (!lineText.includes(identifierComment)) return;

      const props = node.properties ?? {};
      const existingClassName = props.className;

      if (Array.isArray(existingClassName)) {
        existingClassName.push('underline');
      } else if (typeof existingClassName === 'string') {
        props.className = [existingClassName, 'underline'];
      } else {
        props.className = ['underline'];
      }

      node.children = (node.children ?? []).filter((child: RootContent) => {
        return !HastNodeToText(child).includes(identifierComment);
      });
    },
  };
}
