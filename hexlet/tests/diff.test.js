import diff from '../src/diff';

test('solution', () => {
  const result1 = diff(new Set([2, 1]), new Set([2, 3]));
  expect(result1).toEqual(new Set([1]));

  const result2 = diff(new Set([]), new Set([2, 3]));
  expect(result2).toEqual(new Set([]));

  const result3 = diff(new Set([2, 1]), new Set([]));
  expect(result3).toEqual(new Set([2, 1]));
});