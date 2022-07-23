export function linearSearch<T>(elements: readonly T[], valueToSearch: T) {
  for (const [index, item] of elements.entries()) {
    if (item === valueToSearch) {
      return index;
    }
  }

  return -1;
}
