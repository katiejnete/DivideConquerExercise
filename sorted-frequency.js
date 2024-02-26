function findStart(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let midIdx = Math.floor((right - left) / 2);
  while (right - left !== 1) {
    if (arr[midIdx] === num) {
      right = midIdx;
      midIdx = Math.floor((right - left) / 2);
    } else if (arr[midIdx] < num) {
      left = midIdx;
      midIdx += Math.floor((right - left) / 2);
    } else if (arr[midIdx] > num) {
      right = midIdx;
      midIdx = Math.floor((right - left) / 2);
    }
  }
  if (arr[left] === arr[right]) return left;
  if (arr[right] !== num) return null;
  return right;
}

function findEnd(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let midIdx = Math.floor((right - left) / 2);
  while (right - left !== 1) {
    if (arr[midIdx] === num) {
      left = midIdx;
      midIdx += Math.floor((right - left) / 2);
    } else if (arr[midIdx] < num) {
      left = midIdx;
      midIdx += Math.floor((right - left) / 2);
    } else if (arr[midIdx] > num) {
      right = midIdx;
      midIdx = Math.floor((right - left) / 2);
    }
  }
  if (arr[left] === arr[right]) return left;
  if (arr[left] !== num) return null;
  return left;
}

function sortedFrequency(arr, num) {
  const start = findStart(arr, num);
  let end = findEnd(arr, num);
  if (start === null) {
    return -1;
  } else if (end === null) {
    end = arr.length - 1;
    return arr.slice(start, end + 1).length;
  } else {
    return arr.slice(start, end + 1).length;
  }
}

module.exports = sortedFrequency;
