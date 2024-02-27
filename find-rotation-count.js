function findRotationCount(arr, left = 0, right = arr.length - 1) {
  const mid = left + Math.floor((right - left) / 2);
  if (arr[mid] < arr[mid - 1]) return mid;
  else if (arr[mid] > arr[mid + 1]) return mid + 1;
  if (arr[mid] < arr[left]) {
    return findRotationCount(arr, left, mid);
  } else if (arr[mid] > arr[right]) {
    return findRotationCount(arr, mid, right);
  } else return 0;
}

module.exports = findRotationCount;
