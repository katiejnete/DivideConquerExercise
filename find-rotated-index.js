function findRotatedIndex(arr, num, left = 0, right = arr.length - 1) {
  if (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === num) return mid;
    else if (arr[mid] > num && arr[0] < num) {
      return findRotatedIndex(arr, num, left, mid - 1);
    } else if (arr[mid] < num || arr[mid] > num && arr[0] > num) {
      return findRotatedIndex(arr, num, mid + 1, right);
    }
  }
  if (right < left) return -1;
  return arr[mid];
}

module.exports = findRotatedIndex;
