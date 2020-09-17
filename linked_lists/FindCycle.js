/*
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Follow up:

Can you solve it using O(1) (i.e. constant) memory?

Notes:
values won't be unique
singly linked list
empty case is false

input: 
output: boolean

what a list node needs:
value, next pointer to a node

store addresses for nodes in a map, if there is a cycle you'd run into the same address twice

pointer(s)?

slow pointer, and a fast pointer, that are destined to meet if there is a cycle.
if no cycle, they will both point eventually to null

4 -> 6s -> 8f -> 7 -> 4(again)


public class ListNode {
    int val;
    ListNode next;
    
    public ListNode(int v, ListNode n) {
        this.val = v;
        this.next = n;
    }
}
case 1: null (alice) false, good
case 2: 1 (dianna) false, good
case 3: 1 -> 4 -> 5 -> 6 (krystal) false, good
case 4: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 3(again) (alice) true, good

O(n) runtime, O(1) space
*/

function findCycle(head) {
    let fast = head
    let slow = head
    
    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
        
        if (fast === slow) {
            return true
        }
    }
    
    return false
}

(function main() {
    console.log('Hello World!');
}())