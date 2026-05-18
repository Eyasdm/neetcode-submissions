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
     * @return {boolean}
     */
    hasCycle(head) {
        let seen = new Map(), current  = head;

        while(head) {
           if (seen.has(head)){
            let value = seen.get(head)
            if(head === value) return true;
           } 
           seen.set(head, head);
           head = head.next;
        }
        return false
    }
}
