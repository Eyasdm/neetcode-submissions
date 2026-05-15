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
     * @return {ListNode}
     */
    reverseList(head) {
        if(!head) return head
          let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }

     let headOfLinkedList = new ListNode(result[result.length - 1]);
  let current = headOfLinkedList;
  

  for (let i = result.length - 2; i >= 0 ; i--) {
    current.next = new ListNode(result[i]);
    current = current.next;
  }

     return headOfLinkedList; 
    }
}
