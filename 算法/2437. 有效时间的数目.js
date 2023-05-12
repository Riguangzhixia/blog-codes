/**
 * @param {string} time
 * @return {number}
 */
// 枚举o(1)
var countTime = function (time) {
    let hours = 0;
    let minutes = 0;
    let hour = time.split(':')[0];
    let minute = time.split(':')[1];
    if (hour.indexOf('?') > -1) {
        if (hour.charAt(0) === '?') {
            if (hour.charAt(1) === '?') {
                hours += 24;
            } else {
                hours += parseInt(hour.charAt(1)) > 3 ? 2 : 3;
            }
        } else if (hour.charAt(1) === '?') {
            hours += parseInt(hour.charAt(0)) === 2 ? 4 : 10;
        }
    }
    if (minute.indexOf('?') > -1) {
        if (minute.charAt(0) === '?') {
            if (minute.charAt(1) === '?') {
                minutes += 60;
            } else {
                minutes += 6;
            }
        } else if (minute.charAt(1) === '?') {
            minutes += 10;
        }
    }
    return (hours || 1) * (minutes || 1);
};