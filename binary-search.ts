function binarySearch<T, S>(
  haystack: ArrayLike<T>,
  needle: S,
  comparator: (
    element: T,
    b: S,
    index?: number,
    haystack?: ArrayLike<T>,
  ) => number,
  low = 0,
  high = haystack.length - 1,
) {
  let mid: number, cmp: number;

  if (low < 0 || low >= haystack.length) {
    throw new RangeError("Invalid lower bound.");
  }

  if (high < low || high >= haystack.length) {
    throw new RangeError("Invalid upper bound.");
  }

  while (low <= high) {
    mid = low + ((high - low) >>> 1);

    cmp = comparator(haystack[mid], needle, mid, haystack);

    if (cmp < 0.0) {
      low = mid + 1;
    } else if (cmp > 0.0) {
      high = mid - 1;
    } else {
      return mid;
    }
  }

  return ~low;
}
