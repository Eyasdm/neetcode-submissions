/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        if (!head || !head.next) return;

        // find length
        let len = 0;
        let curr = head;

        while (curr) {
            len++;
            curr = curr.next;
        }

        // go to middle
        let mid = Math.floor((len - 1) / 2);

        curr = head;

        for (let i = 0; i < mid; i++) {
            curr = curr.next;
        }

        // split list
        let secondHalf = curr.next;
        curr.next = null;

        // reverse second half
        let prev = null;
        curr = secondHalf;

        while (curr) {
            let nxt = curr.next;

            curr.next = prev;

            prev = curr;
            curr = nxt;
        }

        secondHalf = prev;

        // merge
        let firstHalf = head;

        while (firstHalf && secondHalf) {
            let tmp1 = firstHalf.next;
            let tmp2 = secondHalf.next;

            firstHalf.next = secondHalf;
            secondHalf.next = tmp1;

            firstHalf = tmp1;
            secondHalf = tmp2;
        }
    }
}