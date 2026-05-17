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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
    let dummy = new ListNode();

    let current = dummy;

    let cur1 = list1;
    let cur2 = list2;

   while(cur1 && cur2){
    if(cur1.val <= cur2.val){
      current.next = cur1;
      cur1 = cur1.next;
    }else{
       current.next = cur2;
      cur2 = cur2.next;
     
    }
 current = current.next

   }
  if(cur1){
  current.next = cur1
}

if(cur2){
  current.next = cur2
}

    return dummy.next

    }
}
