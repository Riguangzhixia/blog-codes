// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let transNodeList = arr => {
    let nextNode = new ListNode(arr[arr.length - 1]);
    let node;
    for (let i = arr.length - 2; i >= 0; i--) {
        node = new ListNode(arr[i], nextNode);
        nextNode = node;
    }
    return node;
}


// 思路1 暴力求解 复杂度o(n^2)
let findLargeNode = node => {
    let { val } = node;
    while(node.next !== null) {
        let { next } = node;
        if(val < next.val) {
            return next.val;
        }
        node = node.next
    }
    return 0;
}

/**
 * @param {ListNode} head
 * @return {number[]}
 */

// DFS(I) = I > I-1 ? F(I) : DFS(I-1)

var nextLargerNodes = function(head) {
    let answer = [];
    let index = 0;
    let pre = Infinity;
    while(head != null) {
        if (pre <= head.val && index > 0 && head.val < answer[index - 1]) {
            answer.push(answer[index - 1])
        } else {
            answer.push(findLargeNode(head));
        }
        pre = head.val;
        head = head.next;
        index++;
    }
    return answer;
};


// 思路2 单调栈求解
// 通过一个有序数组将前面的值存放起来，当前值和已存放的数组里最小值比较，比较成功就说明最小值的下一个最大数就是当前的数，继续比较直到比较失败或者数组为空。将当前值push进去暂存，继续下一轮比较。时间复杂度相当于o（n）
var nextLargerNodes2 = function(head) {
    let tmp = [];
    let answer = [0]
    let index = 0;
    while(head) {
        while(tmp.length && tmp[tmp.length - 1][0] < head.val) {
            answer[tmp.pop()[1]] = head.val;
        }
        tmp.push([head.val, index]);
        head = head.next;
        index++;
    }
    tmp.forEach(item => {
        answer[item[1]] = 0;
    })
    return answer;
};
console.log(nextLargerNodes2(transNodeList([2,7,3,3,5])));