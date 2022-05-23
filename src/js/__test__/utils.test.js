import {calcTileType} from '../utils.js';

test('should return Error', () => {
  expect(() => {
    calcTileType(68, 8);
  }).toThrow();
});

test('should return top-left', () => {
  const result = calcTileType(0, 8);
  const expected = "top-left";

  expect(result).toEqual(expected);
});

test('should return top-right', () => {
  const result = calcTileType(7, 8);
  const expected = "top-right";

  expect(result).toEqual(expected);
});

test('should return top', () => {
  const result = calcTileType(3, 8);
  const expected = "top";

  expect(result).toEqual(expected);
});

test('should return bottom-left', () => {
  const result = calcTileType(56, 8);
  const expected = "bottom-left";

  expect(result).toEqual(expected);
});

test('should return bottom-right', () => {
  const result = calcTileType(63, 8);
  const expected = "bottom-right";

  expect(result).toEqual(expected);
});

test('should return bottom', () => {
  const result = calcTileType(60, 8);
  const expected = "bottom";

  expect(result).toEqual(expected);
});

test('should return right', () => {
  const result = calcTileType(31, 8);
  const expected = "right";

  expect(result).toEqual(expected);
});

test('should return left', () => {
  const result = calcTileType(32, 8);
  const expected = "left";

  expect(result).toEqual(expected);
});

test('should return center', () => {
  const result = calcTileType(27, 8);
  const expected = "center";

  expect(result).toEqual(expected);
});
