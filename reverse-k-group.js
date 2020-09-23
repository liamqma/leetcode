function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (!head) return null;
    if (!head.next) return head;

    const dummyNode = new ListNode();
    dummyNode.next = head;

    reverseK(dummyNode, k);
    return dummyNode.next;
};

var reverseK = function(head, k) {
    let pointer = head;
    pointer = pointer.next;

    const temp = [];

    for (let i = 1; i <= k; i++) {
        if (!pointer) return;
        temp.push(pointer);
        pointer = pointer.next;
    }

    temp.reverse();
    
    for (let i = 0; i < temp.length; i++) {
        head.next = temp[i];
        head = head.next;
    }

    head.next = pointer; // pointer is tail

    return reverseK(head, k);
}

var one = new ListNode(1);
var two = new ListNode(2);
var three = new ListNode(3);
var four = new ListNode(4);

one.next = two;
two.next = three;
three.next = four;

console.log(reverseKGroup(one, 2));