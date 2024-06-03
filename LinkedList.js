/*
Create a Linked List Class
Let's create a linked list class. Every linked list should start out with a few basic properties: a head (the first item in your list) and a length (number of items in your list). Sometimes you'll see implementations of linked lists that incorporate a tail for the last element of the list, but for now we'll just stick with these two. Whenever we add an element to the linked list, our length property should be incremented by one.

We'll want to have a way to add items to our linked list, so the first method we'll want to create is the add method.

If our list is empty, adding an element to our linked list is straightforward enough: we just wrap that element in a Node class, and we assign that node to the head of our linked list.

But what if our list already has one or more members? How do we add an element to the list? Recall that each node in a linked list has a next property. To add a node to the list, find the last node in the list, and point that last node's next property at our new node. (Hint: you know you've reached the end of a linked list when a node's next property is null.)

Write an add method that assigns the first node you push to the linked list to the head; after that, whenever adding a node, every node should be referenced by the previous node's next property.

Note

Your list's length should increase by one every time an element is added to the linked list.
*/

function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

  this.add = function(element){
    var newNode = new Node(element);
    if (head === null) {
      head = newNode;
    } 
    else {
      var currNode = head;
      while (currNode.next !== null) {
        currNode = currNode.next;
      }
      currNode.next = newNode;
    }
    length++;
  };
  
  this.remove = function(element){
    if (head.element === element) {
      head = head.next;
      length--;
    } else {
      var currentNode = head;
      while(currentNode.next) {
        if (currentNode.next.element === element) {
          currentNode.next = currentNode.next.next;
          length--;
          break;
        }
        currentNode = currentNode.next;
      }
    }
  };
  
  this.indexOf = (element) => {
    let index = 0;
    var currentNode = head;
    while(currentNode) {
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
      index++;
    }
    return -1;
  }

  this.isEmpty = () => {
    return length === 0 ? true : false;
  }

  this.elementAt = (index) => {
    var currentNode = head;
    while (currentNode && index > 0) {
      currentNode = currentNode.next;
      index--;
    }
    return currentNode ? currentNode.element : undefined; 
  }
  
    this.removeAt = (index) => {
    var currentNode = head;
    var previousNode;
    var currentIndex = 0;

    // Pre-checks
    if (index >= length || index < 0) {
      return null;
    }

    // Head Case to avoid null nodes
    if (index === 0) {
      const returnValue = head ? head.element : null
      head = head.next;
      length--;
      return returnValue;
    }

    // Loop finished at the node before the removedNode
    while (currentNode && index !== currentIndex) {
      previousNode = currentNode;
      currentNode = currentNode.next
      currentIndex++;
    }

    if (index === currentIndex) {
      const returnValue = currentNode.element
      previousNode.next = currentNode.next;
      length--;
      return returnValue;
    }

    return null;
  }
  
  this.addAt = (index, element) => {
    // Pre-checks
    if (index >= length || index < 0) {
      return false;
    }

    var newNode = new Node(element);
    var currentIndex = 0;
    var currentNode = head;
    
    // Once finished. currentNode = before newNode
    while (currentIndex < index - 1) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    if (currentIndex === 0) {
      newNode.next = head;
      head = newNode; 
    } else {
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
    length++;
  }
}