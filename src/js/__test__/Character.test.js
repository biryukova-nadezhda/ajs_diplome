import Character from "../Character";


test('should return Error', () => {
  expect(() => {
    new Character();
  }).toThrow();
});

/* test('should return new object', () => {
  const expected = {};
  const result = new Daemon(1);
  expect(result).toEqual(expected);
})
 */
