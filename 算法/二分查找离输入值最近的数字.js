const searchStart = (pos, target) => {
    let low = 0, high = pos.length;
    while (low < high) {
        const mid = low + Math.floor((high - low) / 2);
        if (pos[mid] >= target) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return low;
}

const searchEnd = (pos, target) => {
    let low = 0, high = pos.length;
    while (low < high) {
        const mid = low + Math.floor((high - low) / 2);
        if (pos[mid] > target) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return low;
}

console.log(BinarySearch([0, 1], 1, true))
console.log(BinarySearch([0, 1], 1, false))
console.log(BinarySearch([0, 1, 4, 5], 3, true))
console.log(BinarySearch([0, 1, 4, 5], 3, false))
