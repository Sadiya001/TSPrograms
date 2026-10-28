class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val: number = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
        self.val = val;
        self.left = left;
        self.right = right;
    }
}
function dfsTraversals(root: TreeNode | null): void {
    if (root === null) return;
    
    // 1. Pre-Order: Root -> Left -> Right
    console.log(root.val); 
    dfsTraversals(root.left);
    dfsTraversals(root.right);
    
    // 2. In-Order: Left -> Root -> Right
    // dfsTraversals(root.left);
    // console.log(root.val);
    // dfsTraversals(root.right);
    
    // 3. Post-Order: Left -> Right -> Root
    // dfsTraversals(root.left);
    // dfsTraversals(root.right);
    // console.log(root.val);
}
function dfsTraversals(root: TreeNode | null): void {
    if (root === null) return;
    
    // 1. Pre-Order: Root -> Left -> Right
    console.log(root.val); 
    dfsTraversals(root.left);
    dfsTraversals(root.right);
    
    // 2. In-Order: Left -> Root -> Right
    // dfsTraversals(root.left);
    // console.log(root.val);
    // dfsTraversals(root.right);
    
    // 3. Post-Order: Left -> Right -> Root
    // dfsTraversals(root.left);
    // dfsTraversals(root.right);
    // console.log(root.val);
}
function levelOrder(root: TreeNode | null): number[][] {
    if (root === null) return [];
    
    const result: number[][] = [];
    const queue: TreeNode[] = [root]; // Initialize queue with the root
    
    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel: number[] = [];
        
        // Process all nodes at the current depth layer
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()!; // Remove the front node
            currentLevel.push(node.val);
            
            // Push children to the queue for the next layer
            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }
        
        result.push(currentLevel);
    }
    return result;
}
