function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let reverseList = function(head) {
    if(head == null) {
        return null;
    }
    let nextNode = null;
    let curNode = new ListNode(head.val);
    curNode.next = null;
    while(head.next !== null) {
        nextNode = new ListNode(head.next.val);
        nextNode.next = curNode;
        curNode = nextNode;
        head = head.next;
    }
    return curNode;
};

let reverseListByArr = function(head) {
    let arr = [];
    while(head.val !== null) {
        arr.push(head.val);
    }
    let nextNode = new ListNode(arr[1]);
    let curNode;
    for (let i = 0; i < arr.length - 1; i++) {
        curNode = new ListNode(arr[i]);
        curNode.next = nextNode;
        nextNode = curNode;
    }
}