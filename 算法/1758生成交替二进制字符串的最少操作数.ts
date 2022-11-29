/*
样例：
    输入：s = "10"
    输出：0
    解释：s 已经是交替字符串。
思路：
    交替字符串只有0101..和1010101...两种，计算出转变成其中一种的操作数，与长度做差得出另一种，然后取最小值即可
 */
function minOperations(s: string): number {
    let sum = 0;
    let len = s.length;
    for (let i = 0; i < len; i++) {
        if(parseInt(s.charAt(i)) ^ i%2) {
            sum++;
        }
    }
    return Math.min(sum, len -sum);
}