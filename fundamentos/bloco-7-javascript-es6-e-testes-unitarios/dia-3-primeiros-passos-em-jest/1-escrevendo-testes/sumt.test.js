const sumt = require('./sumt');

test('sums two values', () => {
  expect(sumt(2, 3)).toBe(5);
});