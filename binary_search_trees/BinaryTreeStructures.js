/*
Guligena
Khris
Carol
Alice
Sarah
Nikita


Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

Example 1:

Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true
Example 2:

Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

Output: false
Example 3:

Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

Output: false

//Bfs way:
//make two queues
//add each root node to the queue
//while loop: while there's something in the queues:
    //dequeue/shift from the front of the queue
    //check if the values are the same, if they are not return false
    //add left and right nodes to each queue if they exist, or null if they don't 
    
*/
//DFS way:
// boolean inorder(node1, node2)
//{
    //if (node1 == null || node2 == null)
     //  {
    //        if (node1 ==null && node2 == null) return true;
  //          else return false;
//        }
//if (node1.val !== node2.val)
//return false
 
// return inorder(node1.left, node2.left) && inorder(node1.right, node2.right)
//      
//}

// !node1 && !node2 return true
// !node1 || !node2 || node1.val !== node2.val  return false
// inOrder(node1.left, node2.left) && inOrder(node1.right, node2.right)

function sameTrees(root1, root2){
    
    function traverseBoth(node1, node2){
        if (!node1) {
            
        }
    }
    traverseBoth(root1, root2);
    return true;
}
class Node{
    constructor(value){
        this.val = value
        this.left = null
        this.right = null
    }
}

root = new Node(1)
node2 = new Node(2)
node3 = new Node(3)

root.left = node2
root.right = node3

console.log(root)

var isSameTree = function(p, q) {
    if(!p && !q) return true
    
    if(!p || !q || p.val !== q.val) return false
    
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}