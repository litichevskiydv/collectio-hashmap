const HashMap = require("../src/hashMap");

class Key {
  constructor(hi, lo) {
    this.hi = hi;
    this.lo = lo;
  }
}

class KeysComparer {
  getHashCode(obj) {
    let hash = 17;
    hash = hash * 31 + obj.hi;
    hash = hash * 31 + obj.lo;
    return hash;
  }

  equals(a, b) {
    return a.hi === b.hi && a.lo === b.lo;
  }
}

test("Should set and get value", () => {
  // Given
  const map = new HashMap(new KeysComparer());

  const firstKey = new Key(1, 1);
  const firstKeyValue = 1;

  // When
  map.set(firstKey, firstKeyValue);

  // Then
  const secondKey = new Key(firstKey.hi, firstKey.lo);
  expect(map.get(secondKey)).toBe(firstKeyValue);
  expect(map.size).toBe(1);
});

test("Should override existed value", () => {
  // Given
  const map = new HashMap(new KeysComparer());

  const firstKey = new Key(1, 1);
  const firstKeyValue = 1;
  const firstKeyAnotherValue = 2;

  // When
  map.set(firstKey, firstKeyValue);
  map.set(firstKey, firstKeyAnotherValue);

  // Then
  expect(map.get(firstKey)).toBe(firstKeyAnotherValue);
  expect(map.size).toBe(1);
});

test("Should confirm key existence", () => {
  // Given
  const map = new HashMap(new KeysComparer());

  const firstKey = new Key(1, 1);
  const firstKeyValue = 1;

  // When
  map.set(firstKey, firstKeyValue);

  // Then
  expect(map.has(firstKey)).toBeTrue();
});

test("Should delete existed key", () => {
  // Given
  const map = new HashMap(new KeysComparer());

  const firstKey = new Key(1, 1);
  const firstKeyValue = 1;

  const secondKey = new Key(2, 2);
  const secondKeyValue = 2;

  // When
  map.set(firstKey, firstKeyValue);
  map.set(secondKey, secondKeyValue);

  // Then
  expect(map.delete(firstKey)).toBeTrue();
  expect(map.get(secondKey)).toBe(secondKeyValue);
  expect(map.size).toBe(1);
});

test("Should delete not existed key", () => {
  // Given
  const map = new HashMap(new KeysComparer());

  const firstKey = new Key(1, 1);
  const firstKeyValue = 1;

  const secondKey = new Key(2, 2);

  // When, Then
  map.set(firstKey, firstKeyValue);
  expect(map.delete(secondKey)).toBeFalse();
  expect(map.has(firstKey)).toBeTrue();
  expect(map.size).toBe(1);
});

test("Should clear collection", () => {
  // Given
  const map = new HashMap(new KeysComparer());

  const firstKey = new Key(1, 1);
  const firstKeyValue = 1;

  const secondKey = new Key(2, 2);
  const secondKeyValue = 2;

  // When
  map.set(firstKey, firstKeyValue);
  map.set(secondKey, secondKeyValue);
  map.clear();

  // Then
  expect(map.has(firstKey)).toBeFalse();
  expect(map.has(secondKey)).toBeFalse();
  expect(map.size).toBe(0);
});

test("Should collect values", () => {
  // Given
  const map = new HashMap(new KeysComparer());

  const firstKey = new Key(1, 1);
  const firstKeyValue = 1;

  const secondKey = new Key(2, 2);
  const secondKeyValue = 2;

  // When
  map.set(firstKey, firstKeyValue);
  map.set(secondKey, secondKeyValue);
  const values = [];
  map.forEach(x => values.push(x));

  // Then
  expect(values).toIncludeSameMembers([firstKeyValue, secondKeyValue]);
});

test("Should get keys", () => {
  // Given
  const map = new HashMap(new KeysComparer());

  const firstKey = new Key(1, 1);
  const firstKeyValue = 1;

  const secondKey = new Key(2, 2);
  const secondKeyValue = 2;

  // When
  map.set(firstKey, firstKeyValue);
  map.set(secondKey, secondKeyValue);
  const keys = Array.from(map.keys());

  // Then
  expect(keys).toIncludeSameMembers([firstKey, secondKey]);
});

test("Should get values", () => {
  // Given
  const map = new HashMap(new KeysComparer());

  const firstKey = new Key(1, 1);
  const firstKeyValue = 1;

  const secondKey = new Key(2, 2);
  const secondKeyValue = 2;

  // When
  map.set(firstKey, firstKeyValue);
  map.set(secondKey, secondKeyValue);
  const values = Array.from(map.values());

  // Then
  expect(values).toIncludeSameMembers([firstKeyValue, secondKeyValue]);
});

test("Should get entries", () => {
  // Given
  const map = new HashMap(new KeysComparer());

  const firstKey = new Key(1, 1);
  const firstKeyValue = 1;

  const secondKey = new Key(2, 2);
  const secondKeyValue = 2;

  // When
  map.set(firstKey, firstKeyValue);
  map.set(secondKey, secondKeyValue);
  const entries = Array.from(map.entries());

  // Then
  expect(entries).toIncludeSameMembers([[firstKey, firstKeyValue], [secondKey, secondKeyValue]]);
});

test("Should iterate collection", () => {
  // Given
  const map = new HashMap(new KeysComparer());

  const firstKey = new Key(1, 1);
  const firstKeyValue = 1;

  const secondKey = new Key(2, 2);
  const secondKeyValue = 2;

  // When
  map.set(firstKey, firstKeyValue);
  map.set(secondKey, secondKeyValue);

  const entries = Array.from(map);

  // Then
  expect(entries).toIncludeSameMembers([[firstKey, firstKeyValue], [secondKey, secondKeyValue]]);
});
