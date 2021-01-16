// find common elements between both arrays
const nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

const intersection = function(nums1, nums2) {
  
  let firstSet = new Set()

  for(let num of nums1) {
    firstSet.add(num)
  }

  let intersectionSet = new Set()

  for(let num of nums2) {
    
    if(firstSet.has(num)) {
      intersectionSet.add(num)
    }
  }

  return Array.from(intersectionSet)
}

console.log(intersection(nums1, nums2))