//1. Two Sum
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
//2.Add Two Numbers？？？？？？？？？？？
// var addTwoNumbers = function(l1, l2) {
// };
//3.Longest Substring Without Repeating Characters
//给定一个字符串，找到最长的子串的长度没有重复字符
//如：abcabcbb -->abs   长度3
//    bbbbbb  -->b     长度1
//    pwwkew  -->wke   长度3  去重后pwke  但pwke不是pwwkew的子串
var str = 'abcabcbb';
//思路：去重得单字符，组合新串，判断是否子串，判断是否最长
var temparr = new Array();
for (var i = 0; i < str.length; i++) {
    var s = str.charAt(i);
    for (var j = 0; j < temparr.length; j++) {
        if (temparr[j] == s) {} else {}
    }
}