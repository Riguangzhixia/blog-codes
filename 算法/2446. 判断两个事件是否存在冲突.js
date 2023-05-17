/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function (event1, event2) {
    let [s1, e1] = event1.map(strToTime), [s2, e2] = event2.map(strToTime);
    return !(e1 < s2 || s1 > e2)
};
let strToTime = (str) => { return (`1970-01-01T${str}`) };

var haveConflict = function(event1, event2) {
    return (event1[0] >= event2[0] && event1[0] <= event2[event2.length-1] ) ||
    (event2[0] >= event1[0] && event2[0] <= event1[event1.length-1] )  
};