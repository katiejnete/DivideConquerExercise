function sortedFrequency(arr, num, left = 0, right = arr.length - 1) {
  const mid = left + Math.floor((right - left) / 2);
  if (arr[mid] === num) {
    const startIdx = findStart(arr, num, left, mid);
    const endIdx = findEnd(arr,num,mid,right);
    return endIdx - startIdx + 1;
  } else if (arr[mid] < num) {
    if (arr[right] < num) return -1;
    const startIdx = findStart(arr, num, mid, right);
    return arr.length - startIdx;
  } else if (arr[mid] > num) {
    if (arr[left] > num) return -1;
    const endIdx = findEnd(arr,num,left,mid);
    return endIdx + 1;
  } 
}

function findStart(arr, num, left, right) {
  const mid = left + Math.floor((right - left) / 2);
  if (arr[mid + 1] === num && arr[mid] < num) return mid + 1;
  if (left <= right) {
    if (arr[mid] < num) return findStart(arr, num, mid, right);
    else if (arr[mid] === num && arr[mid - 1] < num) return mid;
  }
}

function findEnd(arr, num, left, right) {
  const mid = left + Math.floor((right - left) / 2);
  if (arr[mid] === num && arr[mid+1] > num) return mid;
  if (left <= right) {
    if (arr[mid] === num) return findEnd(arr,num,mid,right);
    else if (arr[mid] > num) return findEnd(arr,num,left,mid);
  } 
}

module.exports = sortedFrequency;
