function countZeroes(arr) {
  let left = 0;
  let right = arr.length - 1;
  let midIdx = Math.floor((right - left) / 2);
  while (right - left !== 1) {
    if (arr[midIdx] === 1) {
      left = midIdx;
      midIdx += Math.floor((right - left) / 2);
    }
    else {
      right = midIdx;
      midIdx = Math.floor((right - left) / 2);
    }
  }
  if (arr[left] === arr[right] && arr[left] === 0) {
    return arr.length
  }
  else if (arr[left] === arr[right] && arr[left] === 1) {
    return 0
  }
  return arr.slice(right).length
}

module.exports = countZeroes;
