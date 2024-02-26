function findRotatedIndex(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let midIdx = Math.floor((right - left) / 2);
  while (right - left !== 1) {
    if (arr[midIdx] === num) {
      return midIdx;
    } else if (arr[midIdx] > num) {
      if (arr[0] > num) {
        left = midIdx + 1;
        midIdx += Math.floor((right - left) / 2);
      } else {
        right = midIdx;
        midIdx = Math.floor((right - left) / 2);
      }
    } else if (arr[midIdx] < num) {
      if (arr[arr.length - 1] < num && arr[right] < num) return -1;
      else {
        left = midIdx;
      }
      midIdx += Math.floor((right - left) / 2);
    }
  }
  if (arr[left] !== num && arr[right] !== num) return -1;
}

module.exports = findRotatedIndex;
