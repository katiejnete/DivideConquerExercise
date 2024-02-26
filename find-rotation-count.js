function checkLeft(currMid, currLeft, currRight, arr) {
  currRight = currMid;
  currMid = Math.floor((currRight - currLeft) / 2);
  if (arr[currMid - 1] > arr[currMid]) {
    return arr.slice(0, currMid).length;
  } else if (arr[currMid] > arr[currMid + 1]) {
    return arr.slice(0, currMid + 1).length;
  } else {
    return 0;
  }
}

function checkRight(currMid, currLeft, currRight, arr) {
  currLeft = currMid;
  currMid += Math.floor((currRight - currLeft) / 2);
  if (arr[currMid - 1] > arr[currMid]) {
    return arr.slice(0, currMid).length;
  } else if (arr[currMid] > arr[currMid + 1]) {
    return arr.slice(0, currMid + 1).length;
  } else {
    return 0;
  }
}

function findRotationCount(arr) {
  let left = 0;
  let right = arr.length - 1;
  let leftMid = Math.floor((right - left) / 2);
  while (leftMid !== 0) {
    if (arr[leftMid - 1] > arr[leftMid]) {
      return arr.slice(0, leftMid).length;
    } else if (arr[leftMid] > arr[leftMid + 1]) {
      return arr.slice(0, leftMid + 1).length;
    } else {
      right = checkLeft(leftMid, left, right, arr);
      if (!right) {
        right = leftMid;
        leftMid = Math.floor((right - left) / 2);
        right = leftMid;
      } else {
        return checkLeft(leftMid, left, right, arr);
      }
      leftMid = Math.floor((right - left) / 2);
    }
  }
  left = 0;
  right = arr.length - 1;
  rightMid = Math.floor((right - left) / 2);
  while (rightMid !== 0) {
    left = checkRight(rightMid, left, right, arr);
    if (!left) {
      left = rightMid;
      rightMid += Math.floor((right - left) / 2);
      left = rightMid;
    } else {
      return checkRight(rightMid, left, right, arr);
    }
    rightMid = Math.floor((right - left) / 2);
  }
  return 0;
}

module.exports = findRotationCount;
