import type { RootContent } from 'hast';

/**
 * Collect text from a HAST node (ex. Shiki line/spans)
 * @param {RootContent} n HAST node
 * @returns {string} text in HAST node
 */
export function HastNodeToText(n: RootContent): string {
  if (n.type === 'text') return n.value;
  if (n.type === 'element')
    return (n.children ?? []).map(HastNodeToText).join('');
  return '';
}
