// non-negative integers
// 그리디 알고리즘

const nums = [2,3,1,1,4]

const canJump = function(nums) {
  if(!nums) {
    return false;
  }

  let validIndex = nums.length - 1

  //4번 반복, 3번 인덱스 부터 계산 시작 ~ 인덱스 0 될 때 까지
  for (let i = nums.length -2; i>= 0; i--) {
    if(i + nums[i] >= validIndex) {
      validIndex = i
    }
  }

  return validIndex === 0
};

console.log(canJump(nums))