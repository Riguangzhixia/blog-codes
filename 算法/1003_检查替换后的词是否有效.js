/**
 * @param {string} s
 * @return {boolean}
 */
// 方法1：递归遍历删除abc字符串，判断最后是否能删光
var isValid = function (s) {
    if (s.length === 0) {
        return true;
    } else {
        let start = s.indexOf('abc');
        if (start >= 0) {
            return isValid(s.slice(0, start) + s.slice(start + 3, s.length));
        } else {
            return false;
        }
    }
};

// 方法2：单调栈，如果栈顶三个为abc则出栈
var isValid = function(s) {
    const stk = [];
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        stk.push(c);
        if (stk.length >= 3 && stk.slice(stk.length - 3).join("") === "abc") {
            stk.splice(stk.length - 3, 3);
        }
    }
    return stk.length === 0;
};

// 方法3： 方法1的正则表达式递归替换
var isValid = function(S) {
    S=S.replace(/abc/g,'');
    if(S.includes('abc')){
        return isValid(S)
    }
    return !!!S.length //!!表示转布尔值
};