function countZeroes(arr) {
  const firstZero = findFirst(arr)
  if (firstZero === -1) return 0;
  return arr.length - firstZero;
}

function findFirst(arr, left = 0, right = arr.length - 1) {
  if (right >= left) {
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === 0 && arr[mid - 1] === 1) {
      return mid;
    } else if (arr[mid] === 1) {
      return findFirst(arr, mid + 1, right);
    } else if (arr[mid] === 0 && arr[mid - 1] === 0) {
      return findFirst(arr, left, mid - 1)
    } 
  }
  if (right === 0) return 0;
  return -1;
}

module.exports = countZeroes;
