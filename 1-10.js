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

// window.onload = function() {

//     var str = 'pwwkew';

//     //思路：去重得单字符，组合新串，判断是否子串，判断是否最长
//     var temparr = new Array();
//     for (var i = 0; i < str.length; i++) {
//         var s = str.charAt(i);
//         if (temparr.indexOf(s) == '-1') {
//             temparr.push(s);
//         }
//     }
//     var newstrarr = new Array();
//     if (temparr) {
//         var maxLength = 0;
//         var maxStr = "";
//         var newstrarr = getChildList(temparr);
//         for (var j = 0; j < newstrarr.length; j++) {
//             if (str.indexOf(newstrarr[j]) != -1) {
//                 if (newstrarr[j].length >= maxLength) {
//                     maxLength = newstrarr[j].length;
//                     maxStr += "——" + newstrarr[j];
//                 }
//             }
//         }
//         console.log(str);
//         console.log(temparr);
//         console.log(newstrarr);
//         console.log(maxStr);
//         console.log(maxLength);
//     }
//     //传入一个数组获取到这个数组的子集()
//     function getChildList(temparr) { //c d
//         var newstrarr = new Array();

//         for (var j = 1; j <= temparr.length; j++) {

//             for (var n = 1; n <= j; n++) {

//                 for (var m = 0; m < temparr.length; m++) {
//                     if (newstrarr.indexOf(temparr[m]) == -1) {
//                         newstrarr.push(temparr[m]);
//                     } else {
//                         var temparr1 = new Array();
//                         for (var z = 0; z < temparr.length; z++) {
//                             temparr1[z] = temparr[z];
//                         }
//                         temparr1.splice(m, 1);
//                         var children2 = getChildList(temparr1);
//                         for (var y = 0; y < children2.length; y++) {
//                             if (newstrarr.indexOf(temparr[m] + children2[y]) == -1) {
//                                 newstrarr.push(temparr[m] + children2[y]);
//                             }
//                         }

//                     }

//                 }

//             }

//         }

//         return newstrarr;
//     }
// }

4.