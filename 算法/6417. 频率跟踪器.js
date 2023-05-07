
var FrequencyTracker = function() {
    this.numMap = new Map();
    this.frequencyMap = new Map();
};

/** 
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.add = function(number) {
    const {numMap, frequencyMap} = this;
    let prevNum = numMap.get(number) || 0;
    let num = prevNum + 1;
    numMap.set(number, num)
    let frequencyPrevnum = frequencyMap.get(prevNum);
    let frequencyNum = frequencyMap.get(num) || 0;
    frequencyMap.set(num, frequencyNum + 1)
    frequencyPrevnum > 1 ? frequencyMap.set(prevNum, frequencyPrevnum - 1) : frequencyMap.delete(prevNum);
};

/** 
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.deleteOne = function(number) {
    const {numMap, frequencyMap} = this;
    let prevNum = numMap.get(number);
    if (prevNum) {
        let num = prevNum - 1;
        num > 0 ? numMap.set(number, num) : numMap.delete(number);
        let frequencyPrevnum = frequencyMap.get(prevNum);
        let frequencyNum = frequencyMap.get(num) || 0;
        frequencyMap.set(num, frequencyNum + 1)
        frequencyPrevnum > 1 ? frequencyMap.set(prevNum, frequencyPrevnum - 1) : frequencyMap.delete(prevNum);
    };
}


/** 
 * @param {number} frequency
 * @return {boolean}
 */
FrequencyTracker.prototype.hasFrequency = function(frequency) {
    const {frequencyMap} = this;
    return frequencyMap.has(frequency);
};

/**
 * Your FrequencyTracker object will be instantiated and called as such:
 * var obj = new FrequencyTracker()
 * obj.add(number)
 * obj.deleteOne(number)
 * var param_3 = obj.hasFrequency(frequency)
 */