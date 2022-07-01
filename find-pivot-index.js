const pivotIndex_1 = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (sum(nums.slice(0, i)) === sum(nums.slice(i + 1, nums.length))) {
      return i;
    }
  }
};

const sum = function (arr) {
  return arr.reduce((sum, curr) => {
    return sum + curr;
  }, 0);
};

const pivotIndex_2 = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let lower = nums.slice(0, i);
    let upper = nums.slice(i + 1, nums.length);

    if (sum(lower) === sum(upper)) {
      return i;
    }
  }
  return -1;
};

let arr = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 100));
pivotIndex_2(arr);

startTime = Date.now();
endTime = Date.now();

console.log(`${(endTime - startTime) / 1000}`);

startTime = Date.now();
pivotIndex_1(arr);
endTime = Date.now();

console.log(`${(endTime - startTime) / 1000}`);
