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
    if (!this.root){
      this.root = new Node(val)
      return this
    }  // if the tree is empty, just add the root
    let currNode = this.root;
    while(currNode){ // loop while on a node
      if(val === currNode.val) return new Error("value already exists")
      else if (val > currNode.val){ // if the value is greater, insert to the right or continue towards leaf
        if (currNode.right) currNode = currNode.right;
        else {
          currNode.right = new Node(val)
          return this
        }
      }
      else{ // same as previous condition, but for the left
        if (currNode.left) currNode = currNode.left;
        else{
          currNode.left = new Node(val)
          return this
        } 
      }
    }
    return this
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currNode=this.root) {
    if (!this.root){
      this.root = new Node(val)
      return this
    }  // if the tree is empty, just add the root
    if (currNode.val < val){
      if (!currNode.right){
        currNode.right = new Node(val)
        return this
      }
      else { // if there is a currNode.right, call function with val and curr.right as root
       return this.insertRecursively(val, currNode.right)
      }
    }
    if (currNode.val > val){
      if (!currNode.left){
        currNode.left = new Node(val)
        return this
      }
      else { // if there is a currNode.right, call function with val and curr.right as root
       return this.insertRecursively(val, currNode.left)
      }
    }

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) throw new Error("No root Value for this tree")
    let currNode = this.root;
    while(currNode){
      if (val === currNode.val) return currNode
      else if(val > currNode.val){
        if(currNode.right) currNode = currNode.right //continue
        else return undefined
      }
      else{
        if (currNode.left) currNode = currNode.left
        else return undefined
      }

    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currNode=this.root) {
    if (!this.root) throw new Error("No root Value for this tree")
    if (val === currNode.val) return currNode
    else if (val > currNode.val){
      if (currNode.right) return this.findRecursively(val, currNode.right)
      else return undefined
    }
    else{
      if (currNode.left) return this.findRecursively(val, currNode.left)
      else return undefined
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const res = [];
    const dpo = (currNode) => {
      res.push(currNode.val)
      if(currNode.left) dpo(currNode.left)
      if(currNode.right) dpo(currNode.right)
    }
    dpo(this.root)
    return res;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const res = [];
    const dio = (currNode) => {
      if(currNode.left) dio(currNode.left)
      res.push(currNode.val)
      if(currNode.right) dio(currNode.right)
    }
    dio(this.root)
    return res;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const res = [];
    const dpso = (currNode) => {
      if(currNode.left) dpso(currNode.left)
      if(currNode.right) dpso(currNode.right)
      res.push(currNode.val)
    }
    dpso(this.root)
    return res;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
   let currNode = this.root;
   let queue = [this.root];
   let res = [];

   while(queue.length){ // exit once queue is empty
    currNode = queue.shift() // remove the first value from the queue
    res.push(currNode.val) // and add it to the list
    if(currNode.left) queue.push(currNode.left) // add both children to the queue
    if(currNode.right) queue.push(currNode.right)
    // the loop will now start over
    // pushing the first child, and adding its children to the queue
    // then pushing the second chid, and adding its children to the queue
    // so the entire generation of children will be pushed to res before any of their chilren are
    // and once the entire generation has been pushed, then the next generation begins adding their own children

   }
   return res
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
