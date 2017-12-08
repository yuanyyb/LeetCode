1.
//传入数组nums[2,7,11,15]  --nums[0]+nums[1] = target    2+7=9  return [0,1]
// getnum([2, 7, 11, 15, 1, 8], 9);

// function getnum(nums, target) {
//     var res = new Array();
//     for (var i = 0; i < nums.length; i++) {
//         for (var j = nums.length; j > i; j--) {
//             if (nums[i] + nums[j] == target) {
//                 res.push([i, j]);
//             }
//         }
//     }
//     print(res);
// }