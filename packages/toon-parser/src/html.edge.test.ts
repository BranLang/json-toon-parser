import { htmlToJson } from '../src/html';
import { expect, test } from 'vitest';

test('nested HTML tags are parsed correctly', () => {
  const html = '<div><span>Text</span></div>';
  const result = htmlToJson(html);
  // Assuming result structure contains nested elements
  expect(result).toMatchObject({ children: [{ tag: 'div', children: [{ tag: 'span', text: 'Text' }] }] });
});

test('malformed HTML throws error', () => {
  const badHtml = '<div><span>Missing closing tags';
  expect(() => htmlToJson(badHtml)).toThrow();
});
