function findFloor(arr, x, left = 0, right = arr.length - 1) {
  if (right >= left) {
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid] > x) {
      return findFloor(arr, x, left, mid - 1);
    } else if (arr[mid] < x) {
      return findFloor(arr, x, mid + 1, right);
    }
  }
  if (right < 0) return -1;
  return arr[right];
}

module.exports = findFloor;
