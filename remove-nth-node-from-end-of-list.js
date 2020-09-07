function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var dummy = new ListNode();
    dummy.next = head;
    let first = dummy;
    let second = dummy;
    for (let index = 0; index <= n; index++) {
        first = first.next;
    }

    while(first) {
        first = first.next;
        second = second.next;
    }
    
    if (!second.next) return null;

    second.next = second.next.next;
    return dummy.next;
};

// var one = new ListNode(1);
// var two = new ListNode(2);
// var three = new ListNode(3);
// var four = new ListNode(4);
// var five = new ListNode(5);
// one.next = two;
// two.next = three;
// three.next = four;
// four.next = five;
// console.log(removeNthFromEnd(one, 2));

// var one = new ListNode(1);
// console.log(removeNthFromEnd(one, 1));

// var one = new ListNode(1);
// var two = new ListNode(2);
// one.next = two;
// console.log(removeNthFromEnd(one, 2));