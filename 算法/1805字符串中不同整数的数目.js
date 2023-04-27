let judgeNum = char => {
    return char.charCodeAt(0) >= '0'.charCodeAt(0) && char.charCodeAt(0) <= '9'.charCodeAt(0);
}

let numDifferentIntegers = function(word) {
    let numArr = [];
    let num = '';
    for (let i = 0; i < word.length; i++) {
        let char = word.charAt(i);
        while(judgeNum(char)) {
            num += char;
            i++;
            char = word.charAt(i);
        }
        if(num !== '') {
            numArr.push(BigInt(num));
        }
        num = '';
    }
    return Array.from(new Set([...numArr]));
};

/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
    return new Set(word.match(/(?!0\d)\d+/g)).size;
};