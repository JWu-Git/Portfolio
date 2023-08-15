export const swap = (arr: number[], i: number): number[] => {
  const beginning = arr.slice(0, i); // Elements before index i
  const first = arr[i]; // Element at index i
  const second = arr[i + 1]; // Element at index i + 1
  const end = arr.slice(i + 2); // Elements after index i + 1

  return [...beginning, second, first, ...end];
};
