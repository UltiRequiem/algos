function ternarySearch(
  key: unknown,
  array: unknown[],
  limit = 0,
  r = array.length,
) {
  if (!(r >= limit)) {
    return -1;
  }

  const mid1 = limit + (r - limit) / 3;
  const mid2 = r - (r - limit) / 3;

  if (array[mid1] == key) {
    return mid1;
  }

  if (array[mid2] == key) {
    return mid2;
  }

  if (key < array[mid1]) {
    return ternarySearch(key, array, limit, mid1 - 1);
  } else if (key > array[mid2]) {
    return ternarySearch(key, array, mid2 + 1, r);
  }

  return ternarySearch(key, array, mid1 + 1, mid2 - 1);
}
