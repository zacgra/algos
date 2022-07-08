const runningSum_1 = function (nums) {
  let sum = 0;
  return nums.map((num) => {
    return (sum += num);
  });
};

const runningSum_2 = function (nums) {
  // const sum = Array(nums.length);
  const sum = [];
  sum[0] = nums[0];

  for (let i = 0; i < nums.length; i++) {
    sum[i] = sum[i - 1] + nums[i];
  }
  return sum;
};

const max = 100000000;

for (let n = 100000; n <= max; n *= 10) {
  const arr = Array(n).fill(1);
  startTime = Date.now();
  runningSum_2(arr);
  endTime = Date.now();

  console.log(`${(endTime - startTime) / 1000}`);
}
