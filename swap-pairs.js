 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {

    if (!head) return null;
    if (!head.next) return head;

    const dummyNode1 = new ListNode();
    let dummyNode2 = new ListNode();

    dummyNode1.next = dummyNode2;
    dummyNode2.next = head;

    while (dummyNode2 && dummyNode2.next && dummyNode2.next.next) {

        const node1 = dummyNode2.next;
        const node2 = dummyNode2.next.next;
        const node3 = dummyNode2.next.next.next;

        dummyNode2.next = node2;
        node2.next = node1;
        node1.next = node3;

        dummyNode2 = dummyNode2.next.next;
    }

    return dummyNode1.next.next;
};

var one = new ListNode(1);
var two = new ListNode(2);
var three = new ListNode(3);
var four = new ListNode(4);

one.next = two;
two.next = three;
three.next = four;

console.log(swapPairs(one));