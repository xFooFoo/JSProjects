// JavaScript source code
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
// Used in BFS traversals
function Queue() {
    var collection = [];

    this.isEmpty = function () {
        if (collection.length == 0) {
            return true;
        }
        return false;
    }

    this.front = function () {
        if (!this.isEmpty()) {
            return collection[0];
        }
        return undefined;
    }

    this.size = function () {
        return collection.length;
    }

    this.dequeue = function () {
        const frontElement = this.front();
        if (frontElement) {
            collection.splice(0, 1);
            return frontElement;
        }
        return undefined;
    }

    this.enqueue = function (element) {
        collection[collection.length] = element;
    }
}
function BinarySearchTree() {
    this.root = null;

    this.add = (value) => {
        var currentNode = this.root;
        var newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return undefined;
        }

        while (currentNode) {
            if (value === currentNode.value) {
                return null;
            }
            else if (value < currentNode.value) {
                if (currentNode.left === null) {
                    currentNode.left = newNode;
                    break;
                }
                currentNode = currentNode.left;
            }
            else if (value > currentNode.value) {
                if (currentNode.right === null) {
                    currentNode.right = newNode;
                    break;
                }
                currentNode = currentNode.right;
            }
        }
        return undefined;
    }

    this.findMin = (currentNode = this.root) => {
        if (!this.root) {
            return null;
        }
        while (currentNode.left) {
            currentNode = currentNode.left;
        }
        return currentNode.value;
    }

    this.findMax = (currentNode = this.root) => {
        if (!this.root) {
            return null;
        }
        while (currentNode.right) {
            currentNode = currentNode.right;
        }
        return currentNode.value;
    }

    this.isPresent = (value) => {
        var currentNode = this.root;
        if (!this.root) {
            return false;
        }

        while (currentNode) {
            if (currentNode.value === value) {
                return true;
            }
            else if (value < currentNode.value) {
                currentNode = currentNode.left
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            }
        }
        return false;
    }

    this.findMinHeight = () => {
        if (!this.root) {
            return -1;
        }
        function findHeight(node, minHeight) {
            if (!node.left || !node.right) {
                return minHeight;
            }
            else {
                minHeight++;
                return Math.min(findHeight(node.left, minHeight), findHeight(node.right, minHeight));
            }
        }
        return findHeight(this.root, 0);
    }

    this.findMaxHeight = () => {
        function findHeight(node) {
            // A tree with only a root has a height of 0 (undo the addition on  return)
            if (!node) {
                return -1;
            }
            else {
                const leftHeight = findHeight(node.left);
                const rightHeight = findHeight(node.right);
                return Math.max(leftHeight, rightHeight) + 1;
            }
        }
        return findHeight(this.root);
    }

    this.isBalanced = () => {
        return this.findMaxHeight() - this.findMinHeight() <= 1 ? true : false;
    }
    // DFS
    this.inorder = () => {
        if (!this.root) {
            return null;
        }
        function inOrderTraversal(node) {
            if (!node) return [];
            else {
                return [...inOrderTraversal(node.left), node.value, ...inOrderTraversal(node.right)];
            }
        }
        return inOrderTraversal(this.root);
    }
    // DFS
    this.preorder = () => {
        if (!this.root) {
            return null;
        }
        function preOrderTraversal(node) {
            if (!node) return [];
            else {
                return [node.value, ...preOrderTraversal(node.left), ...preOrderTraversal(node.right)];
            }
        }
        return preOrderTraversal(this.root);
    }
    // DFS
    this.postorder = () => {
        if (!this.root) {
            return null;
        }
        function postOrderTraversal(node) {
            if (!node) return [];
            else {
                return [...postOrderTraversal(node.left), ...postOrderTraversal(node.right), node.value];
            }
        }
        return postOrderTraversal(this.root);
    }
    // BFS
    this.levelOrder = () => {
        if (!this.root) return null;
        let queue = new Queue();
        queue.enqueue(this.root);
        let levelOrderTraversal = [];
        while (!queue.isEmpty()) {
            const node = queue.dequeue();
            // Append node value to output array
            levelOrderTraversal.push(node.value);
            // Add its children to the queue for inspection
            if (node.left) queue.enqueue(node.left);
            if (node.right) queue.enqueue(node.right);
        }
        return levelOrderTraversal;
    }
    // BFS
    this.reverseLevelOrder = () => {
        if (!this.root) return null;
        let queue = new Queue();
        queue.enqueue(this.root);
        let reverseLevelOrderTraversal = [];
        while (!queue.isEmpty()) {
            const node = queue.dequeue();
            // Append node value to output array
            reverseLevelOrderTraversal.push(node.value);
            // Add its children to the queue for inspection
            if (node.right) queue.enqueue(node.right);
            if (node.left) queue.enqueue(node.left);
        }
        return reverseLevelOrderTraversal;
    }

    this.remove = (value) => {
        // Base cases
        if (!this.root) return null;
        if (this.root.value === value) {
            // No Child Case
            if (!this.root.left && !this.root.right) {
                this.root = null;
            }
            // 2 Children Case
            else if (this.root.left && this.root.right) {
                this.root.left.right = this.root.right
                this.root = this.root.left;
            }
            // One Child Case
            else {
                this.root = (this.root.left || this.root.right);
            }
            return
        }
        var isLeftChild;
        var parentNode;
        var currentNode = this.root;
        
        while (currentNode) {
            console.log(currentNode.value);
            // Value Found
            if (currentNode.value === value) {
                // Leaf Node Case
                if (!currentNode.left && !currentNode.right) {
                    if (isLeftChild) parentNode.left = null;
                    else parentNode.right = null;
                }
                // 2 Children Case
                else if (currentNode.left && currentNode.right) {
                    // ---- replace deleted node with smallest child on the Right-subtree
                    const smallestChildValue = this.findMin(currentNode.right);
                    this.remove(smallestChildValue);
                    currentNode.value = smallestChildValue;
                }
                // One Child Case
                else if (currentNode.left || currentNode.right) {
                    if (isLeftChild) {
                        parentNode.left = (currentNode.left || currentNode.right);
                    } else {
                        parentNode.right = (currentNode.left || currentNode.right);
                    }
                }
                return;
            }
            // Keep Finding the Value -- maybe find the value first!
            else {
                parentNode = currentNode;
                if (value < currentNode.value) {
                    currentNode = currentNode.left;
                    isLeftChild = true;
                } else {
                    currentNode = currentNode.right;
                    isLeftChild = false;
                }
            }
        }
        // Null if can't find the input value
        return null;
    }
}

function isBinarySearchTree(tree) {
    function isBinarySubTree(node) {
        // Base case: Empty tree is always valid
        return !node
            ||
            // If left node doesn't exist or is in the correct order --> resolves true
            (!node.left || node.left.value < node.value) &&
            // If right node doesn't exist or is in the correct order --> resolves true
            (!node.right || node.right.value > node.value) &&
            // Recursively check L & R
            (isBinarySubTree(node.left) && isBinarySubTree(node.right));
    }
    return isBinarySubTree(tree.root);
}

var tree = new BinarySearchTree();
tree.add(5);
tree.add(3);
tree.add(8);
tree.add(1);
tree.add(4);
tree.add(7);
tree.add(9);
tree.add(6);
tree.add(2);

//displayTree(tree);
console.log(tree.levelOrder().join(', '));
tree.remove(8);
console.log(tree.levelOrder().join(', '));