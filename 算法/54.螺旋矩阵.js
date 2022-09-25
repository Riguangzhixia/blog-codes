// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[1,2,3,6,9,8,7,4,5]

// 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// 输出：[1,2,3,4,8,12,11,10,9,5,6,7]


let spiralOrder = function(matrix) {
    if ( matrix.length === 0 ) return [];
    if ( matrix.length === 1 ) return matrix[0];

    let total = matrix.length * matrix[0].length,
        result = [],
        limit_x = matrix[0].length,
        limit_y = matrix.length,
        start_x = 0,
        start_y = 0,
        direction = 'top';
    let changeDirection = {
        top: function() {
            direction = 'right';
            let temp = [];
            for ( let i = start_x; i < limit_x; i++ ) {
                temp.push( matrix[start_y][i] );
            }
            result = result.concat( temp );
            start_y++;
        },
        right: function() {
            direction = 'bottom';
            let temp = [];
            for ( let i = start_y; i < limit_y; i++ ) {
                temp.push( matrix[i][limit_x - 1] )
            }
            result = result.concat( temp );
            limit_x--;
        },
        bottom: function() {
            direction = 'left';
            let temp = [];
            for ( let i = start_x; i < limit_x; i++ ) {
                temp.unshift( matrix[limit_y - 1][i] );
            }
            result = result.concat( temp );
            limit_y--;
        },
        left: function() {
            direction = 'top';
            let temp = [];
            for ( let i = start_y; i < limit_y; i++ ) {
                temp.unshift( matrix[i][start_x] )
            }
            result = result.concat( temp );
            start_x++;
        }
    };
    let backtrack = function () {
        if (result.length !== total) {
            changeDirection[direction]();
            backtrack();
        }
    };
    backtrack();
    return result;
};