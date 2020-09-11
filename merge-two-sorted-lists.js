
function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}
 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let dummyHead = new ListNode();
    let result = new ListNode();
    dummyHead.next = result;
    while (l1 || l2) {
        let number;

        if (!l1) {
            number = l2.val;
            l2 = l2.next;
        } else if (!l2) {
            number = l1.val;
            l1 = l1.next;
        } else if (l1.val < l2.val) {
            number = l1.val;
            l1 = l1.next;
        } else {
            number = l2.val;
            l2 = l2.next;
        }

        result.next = new ListNode(number);
        result = result.next;
    }
    return dummyHead.next.next;
};

var one = new ListNode(1);
var two = new ListNode(2);
var three = new ListNode(4);

one.next = two;
two.next = three;

var four = new ListNode(1);
var five = new ListNode(3);
var six = new ListNode(4);

four.next = five;
five.next = six;

console.log(mergeTwoLists(one, four));