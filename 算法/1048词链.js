/**
 * @param {string[]} words
 * @return {number}
 */

/**
    * 示例 1：
    * 输入：words = ["a","b","ba","bca","bda","bdca"]
    * 输出：4
    * 解释：最长单词链之一为 ["a","ba","bda","bdca"]
    * 示例 2:

    * 输入：words = ["xbc","pcxbcf","xb","cxbc","pcxbc"]
    * 输出：5
    * 解释：所有的单词都可以放入单词链 ["xb", "xbc", "cxbc", "pcxbc", "pcxbcf"].
    * 示例 3:

    * 输入：words = ["abcd","dbqca"]
    * 输出：1
    * 解释：字链["abcd"]是最长的字链之一。
    * ["abcd"，"dbqca"]不是一个有效的单词链，因为字母的顺序被改变了。

    * 来源：力扣（LeetCode）
    * 链接：https://leetcode.cn/problems/longest-string-chain
    * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * */

// DFS(S) = MAX(cnt(S) + cnt(s) + 1)

var longestStrChain = function(words) {
    const cnt = new Map();
    words.sort((a, b) => a.length - b.length);
    let res = 0;
    for (const word of words) {
        cnt.set(word, 1);
        for (let i = 0; i < word.length; i++) {
            const prev = word.substring(0, i) + word.substring(i + 1);
            if (cnt.has(prev)) {
                cnt.set(word, Math.max(cnt.get(word), cnt.get(prev) + 1));
            }
        }
        res = Math.max(res, cnt.get(word));
    }
    return res;
};