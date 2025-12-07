import { csvToJson } from '../src/csv';
import { expect, test } from 'vitest';

test('malformed CSV throws error', () => {
  const malformed = 'a,b\n1,2,3'; // extra column
  expect(() => csvToJson(malformed)).toThrow();
});

test('empty CSV returns empty array', () => {
  const empty = '';
  const result = csvToJson(empty);
  expect(result).toEqual([]);
});
