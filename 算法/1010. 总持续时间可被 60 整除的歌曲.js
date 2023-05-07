/**
 * @param {number[]} time
 * @return {number}
 */
// 方法1： 双循环枚举所有时间对
let numPairsDivisibleBy601 = function (time) {
    let nums = 0;
    for (let i = 0; i < time.length; i++) {
        const timeI = time[i];
        for (let j = i + 1; j < time.length; j++) {
            const timeJ = time[j];
            if ((timeI + timeJ) % 60 === 0) {
                nums++;
            }
        }
    }
    return nums;
};
// 方法2： 遍历对60取余，并保存到map中
let numPairsDivisibleBy60 = function (time) {
    let ans = 0;
    let map = new Map();
    time.forEach(num => {
        let key = num % 60;
        map.set(key, map.has(key) ? map.get(key) + 1 : 1);
    });
    for (let i = 0; i <= 30; i++) {
        if (map.has(i)) {
            if (i === 0 || i === 30) {
                ans += (map.get(i) * (map.get(i) - 1)) / 2
            } else {
                if (map.has(60 - i)) {
                    ans += map.get(i) * map.get(60 - i);
                }
            }
        }
    }
    return ans;
};
console.log(numPairsDivisibleBy60([30, 20, 150, 100, 40]));