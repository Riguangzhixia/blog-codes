var equalFrequency = function (word) {
    let map = new Map();
    let wordArr = word.split('')
    wordArr.forEach(char => {
        map.set(char, map.has(char) ? map.get(char) + 1 : 1);
    })
    for (let i = 0; i < wordArr.length; i++) {
        let tempMap = new Map([...map.entries()])
        let char = wordArr[i];
        if (tempMap.get(char) === 1) {
            tempMap.delete(char);
        } else {
            tempMap.set(char, tempMap.get(char) - 1)
        }
        let arr = [...new Set(tempMap.values())];
        if(arr.length === 1){
            return true;
        }
    }
    return false;
};

