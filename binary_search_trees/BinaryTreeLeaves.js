//              3
//             /  \
//            5   5
//           /\
//          6  8      

// BFS: 5, 6, 8 
// DFS: 6, 8, 5


//          2
//         /  \
//        6   4   
//            /\
//            8 5

// BFS: 6, 8, 5
// DFS: 6, 8, 5



// 872. Leaf-Similar Trees
// Consider all the leaves of a binary tree.  From left to right order, the values of those leaves form a leaf value sequence.

// For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

// Two binary trees are considered leaf-similar if their leaf value sequence is the same.

// Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

// Constraints:
// Both of the given trees will have between 1 and 200 nodes.
// Both of the given trees will have values between 0 and 200


//DFS
//Main function: Taking in both trees, comparing the values of the leaves in order, and returning true if they are the same
//Helper function: Process stacks for trees

function mainFunction(root1, root2) {
    const root1Leaves = helperFunction(root1)
    const root2Leaves = helperFunction(root2)
    
    
}

function helperFunction(root) {
    const stack = []
    const leaves = []
    
    stack.push(root);
       
    while (stack.length > 0) {
        const node = stack.pop
        
        if (node.left) {
            stack.push(node.left)
        }
    
        if (node.right) {
            stack.push(node.right)
        }
    
        if (!node.left && !node.right) {
            leaves.push(node)
        }
    }

    return leaves
}
