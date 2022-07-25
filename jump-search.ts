function jumpSearch(arr: unknown[], x: unknown, n = arr.length) {
  let step = Math.sqrt(n);

  let prev = 0;

  while (arr[Math.min(step, n) - 1] < x) {
    prev = step;
    step += Math.sqrt(n);

    if (prev >= n) {
      return -1;
    }
  }

  while (arr[prev] < x) {
    prev++;

    if (prev == Math.min(step, n)) {
      return -1;
    }
  }

  if (arr[prev] == x) {
    return prev;
  }

  return -1;
}
