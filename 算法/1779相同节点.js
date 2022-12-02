let calDistance = (pointA, pointB) => {
    return Math.abs(pointA[0] - pointB[0]) + Math.abs(pointA[1] - pointB[1]);
}

let validPoint = (pointA, pointB) => {
    return pointA[0]  ===  pointB[0] || pointA[1] === pointB[1]
}

/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
let nearestValidPoint = function(x, y, points) {
    let nearestPoint = {
        distance: Number.MAX_VALUE,
        index: -1
    }
    points.forEach((point, index) => {
        if(validPoint([x,y], point)) {
            let curDis = calDistance([x,y], point);
            if(curDis < nearestPoint.distance) {
                nearestPoint.distance = curDis;
                nearestPoint.index = index;
            } else if(curDis === nearestPoint.distance) {
                if (nearestPoint.index > index) {
                    nearestPoint.index = index;
                }
            }
        }
    });
    return nearestPoint.index;
};

console.log(nearestValidPoint(3,4, [[1,2],[3,1],[2,4],[2,3],[4,4]]));