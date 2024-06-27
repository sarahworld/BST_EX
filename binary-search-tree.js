class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);

        if (this.root === null) {
            this.root = newNode;
            return this.root;
        }

        let current = this.root;
        while (true) {
            if (val < current.val) {
                if (current.left === null) {
                    current.left = newNode;
                    return this.root;
                } else {
                    current = current.left;
                }
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this.root;
                } else {
                    current = current.right;
                }
            }
        }
    }
  

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    const newNode = new Node(val);
        if (this.root === null) {
            this.root = newNode;
            return this.root;
        }

        const insertNode = (node, newNode) => {
            if (newNode.val < node.val) {
                if (node.left === null) {
                    node.left = newNode;
                } else {
                    insertNode(node.left, newNode);
                }
            } else {
                if (node.right === null) {
                    node.right = newNode;
                } else {
                    insertNode(node.right, newNode);
                }
            }
        };

        insertNode(this.root, newNode);
        return this.root;
  }

  // /** find(val): search the tree for a node with value val.
  //  * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;

    while (current !== null) {
        if (val === current.val) {
            return current;
        } else if (val < current.val) {
            current = current.left;
        } else {
            current = current.right;
        }
    }

    return undefined;
  }

  // /** findRecursively(val): search the tree for a node with value val.
  //  * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    const findNode = (node, val) => {
      if (node === null) {
          return undefined;
      }
      if (val === node.val) {
          return node;
      } else if (val < node.val) {
          return findNode(node.left, val);
      } else {
          return findNode(node.right, val);
      }
  };

  return findNode(this.root, val);
  }

  // /** dfsPreOrder(): Traverse the array using pre-order DFS.
  //  * Return an array of visited nodes. */

  dfsPreOrder() {
    const result = [];
        
    const traverse = (node) => {
        if (node === null) return;
        result.push(node.val);  // Visit the root node
        traverse(node.left);    // Traverse the left subtree
        traverse(node.right);   // Traverse the right subtree
    };

    traverse(this.root);
    return result;
  }

  // /** dfsInOrder(): Traverse the array using in-order DFS.
  //  * Return an array of visited nodes. */

  dfsInOrder() {
    const result = [];
        
    const traverse = (node) => {
        if (node === null) return;
        traverse(node.left);    // Traverse the left subtree
        result.push(node.val);  // Visit the root node
        traverse(node.right);   // Traverse the right subtree
    };

    traverse(this.root);
    return result;
  }

  // /** dfsPostOrder(): Traverse the array using post-order DFS.
  //  * Return an array of visited nodes. */

  dfsPostOrder() {
    const result = [];
        
    const traverse = (node) => {
        if (node === null) return;
        traverse(node.left);    // Traverse the left subtree
        traverse(node.right);   // Traverse the right subtree
        result.push(node.val);  // Visit the root node
    };

    traverse(this.root);
    return result;
  }

  // /** bfs(): Traverse the array using BFS.
  //  * Return an array of visited nodes. */

  bfs() {
    const result = [];
    const queue = [];

    if (this.root !== null) {
        queue.push(this.root);
    }

    while (queue.length > 0) {
        const node = queue.shift();
        result.push(node.val);

        if (node.left !== null) {
            queue.push(node.left);
        }

        if (node.right !== null) {
            queue.push(node.right);
        }
    }

    return result;
  }

  // /** Further Study!
  //  * remove(val): Removes a node in the BST with the value val.
  //  * Returns the removed node. */

  // remove(val) {

  // }

  // /** Further Study!
  //  * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  // isBalanced() {

  // }

  // /** Further Study!
  //  * findSecondHighest(): Find the second highest value in the BST, if it exists.
  //  * Otherwise return undefined. */

  // findSecondHighest() {
    
  // }
}

module.exports = BinarySearchTree;


const bst = new BinarySearchTree();
bst.insert(15);
bst.insert(20);
bst.insert(10);
bst.insert(12);

console.log(bst)