export function solve() {
  function twoSumSorted(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) return [arr[left], arr[right]];
    if (sum < target) left++;
    else right--;
  }

  return null;
}

 console.log(twoSumSorted([1, 4, 5, 9, 11, 15], 20));

  return { twoSumSorted };
}
