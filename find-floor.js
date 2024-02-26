function findFloor(arr, x) {
  let left = 0;
  let right = arr.length - 1;
  let newArr = arr;
  let midIdx = Math.floor((right - left) / 2);
  let midVal = arr[midIdx];
  while (newArr.length > 2) {
    if (midVal === x) {
      return midIdx;
    } else if (midVal < x) {
      newArr = newArr.slice(midIdx);
      left = 0;
      right = newArr.length - 1;
      midIdx = Math.floor((right - left) / 2);
      midVal = newArr[midIdx];
    } else if (midVal > x) {
      newArr = newArr.slice(0, midIdx + 1);
      left = 0;
      right = newArr.length - 1;
      midIdx = Math.floor((right - left) / 2);
      midVal = newArr[midIdx];
    }
    if (newArr.length === 2) {
      if (newArr[right] < x) return newArr[right];
      else if (newArr[left] < x) return newArr[left];
      else return -1;
    }
  }
}

module.exports = findFloor;
