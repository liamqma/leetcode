function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    // deal with edge case
    if (lists.length === 0) return null;
    lists = lists.filter((item) => !!item);

    const result = [];
    const dummyHead = new ListNode();
    let smallest = -1;

    // loop through lists
    // get head of each item, h1, h2, ... hn
    // find the smallest among h1.val, h2.val, ... hn.val
    // if h1.val is smallest, result.push(h1.val), h1 = h1.next
    // convert result to linked list

    while (lists.length) {
        for(let i = 0; i < lists.length; i++) {
            if (smallest < 0) {
                smallest = i;
            } else {
                if (lists[smallest].val >= lists[i].val) {
                    smallest = i
                }
            }
        }
        result.push(lists[smallest].val);
        lists[smallest] = lists[smallest].next;

        if (!lists[smallest]) {
            // remove index of smallest from lists
            lists.splice(smallest, 1);
            smallest = -1;
        }
    }

    if (result.length === 0) return null;

    let head = new ListNode(result[0]);
    dummyHead.next = head;

    for(let i = 1; i < result.length; i++) {
        head.next = new ListNode(result[i]);
        head = head.next;
    }

    return dummyHead.next;
};

// var one = new ListNode(1);
// var four = new ListNode(4);
// var five = new ListNode(5);

// one.next = four;
// four.next = five;

// var oneTwo = new ListNode(1);
// var threeTwo = new ListNode(3);
// var fourTwo = new ListNode(4);

// oneTwo.next = threeTwo;
// threeTwo.next = fourTwo;

// var twoThree = new ListNode(2);
// var sixThree = new ListNode(6);

// twoThree.next = sixThree;

// console.log(mergeKLists([one, oneTwo, twoThree]));

// console.log(mergeKLists([null]));

// console.log(mergeKLists([null, null]));

// var one = new ListNode(1);
// console.log(mergeKLists([null, one]));

// var one = new ListNode(1);
// var zeroTwo = new ListNode(0);
// console.log(mergeKLists([one, zeroTwo]));
