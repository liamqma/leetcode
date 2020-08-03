class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummyHead = new ListNode(0);
    let current = new ListNode(0);
    dummyHead.next = current;
    let carryOver = 0;
    while(l1 || l2) {
        const x = l1 === null ? 0 : l1.val;
        const y = l2 === null ? 0 : l2.val;
        const sum = x + y + carryOver;
        const result = sum % 10;
        carryOver = Math.floor(sum / 10);
        current.next = new ListNode(result);
        current = current.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    if (carryOver > 0) {
        current.next = new ListNode(carryOver);
    }
    return dummyHead.next.next;    
};