/**
 * @param {string} s
 * @return {string}
 */

/*
* 给你一条个人信息字符串 s ，可能表示一个 邮箱地址 ，也可能表示一串 电话号码 。返回按如下规则 隐藏 个人信息后的结果：
* 示例 1：
*
* 输入：s = "LeetCode@LeetCode.com"
* 输出："l*****e@leetcode.com"
* 解释：s 是一个电子邮件地址。
* 名字和域名都转换为小写，名字的中间用 5 个 * 替换。
* 示例 2：
*
* 输入：s = "AB@qq.com"
* 输出："a*****b@qq.com"
* 解释：s 是一个电子邮件地址。
* 名字和域名都转换为小写，名字的中间用 5 个 * 替换。
* 注意，尽管 "ab" 只有两个字符，但中间仍然必须有 5 个 * 。
* 示例 3：
*
* 输入：s = "1(234)567-890"
* 输出："***-***-7890"
* 解释：s 是一个电话号码。
* 共计 10 位数字，所以本地号码为 10 位数字，国家代码为 0 位数字。
* 因此，隐藏后的电话号码应该是 "***-***-7890" 。
*
* 来源：力扣（LeetCode）
* 链接：https://leetcode.cn/problems/masking-personal-information
* 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */

let eMailReg = new RegExp(/^[A-Za-z]+@[a-zA-Z]+\.[a-zA-Z]+$/);
let phoneReg = new RegExp(/^[0-9- ,+()]+$/);

let validInput = input => {
    return eMailReg.test(input) || phoneReg.test(input);
}

let isEmail = (input) => {
    if(input.indexOf('@') !== -1) {
        return true;
    }
}

let transMail = (email) => {
    let eArr = email.split("@");
    let name = eArr[0];
    let domain = eArr[1];
    eArr = null;
    let newName = name.charAt(0).toLowerCase().padEnd(6, '*') + name.slice(-1).toLowerCase();
    return `${newName}@${domain.toLowerCase()}`
}


let transPhoneNum = (number) => {
    number = number.replace(/[- ,+()]/g, '');
    let numStr = '';
    if(number.length > 10) {
        numStr = '+'.padEnd(number.length - 10, '*') + '-';
    }
    numStr += `***-***-${number.slice(-4)}`
    return numStr;
}

var maskPII = function(s) {
    if(!validInput(s)) {
        throw new Error("Invalid input");
    }
    return isEmail(s) ? transMail(s) : transPhoneNum(s);
};

console.log(maskPII("LeetCode@LeetCode.com"))

// 补充一条正则方法实现，内存占用低 详情可见
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace#%E4%BD%BF%E7%94%A8%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%BD%9C%E4%B8%BA%E5%8F%82%E6%95%B0

var maskPII = function(s) {
    const emailReg=/^(\w)\w*(\w)@(\w+.\w+)$/
    if(emailReg.test(s)){
        return s.replace(emailReg,(_,head,foot,domain)=>(head+'*****'+foot+'@'+domain).toLowerCase())
    }
    else{
        const [_,country,phone]=s.replace(/[\(\)+\- ]/g,'').match(/^(\d*)(\d{10})$/)
        let res=''
        res+=country?'+'+'*'.repeat(country.length)+'-':''
        res+=phone.replace(/^\d{6}(\d{4})$/, (_,foot)=>'***-***-'+foot)
        return res
    }
};