var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  

  this.add = (element) => {
    if (this.tail) {
      var node = new Node(element, this.tail);
      this.tail.next = node; //Set next (of the prev) to the new node
      this.tail = node; //Overwrite DLL tail to the new node
    } else {
      var node = new Node(element, null);
      this.head = node;
      this.tail = node;
    }
  }

  this.remove = (data) => {
    if (!this.head) {
      return null;
    }

    var currentNode = this.head;

    while (currentNode) {
      if (currentNode.data === data){
        // One node case
        if (currentNode === this.head && currentNode === this.tail) {
          this.head = null;
          this.tail = null;
        } else if (currentNode === this.head) {
          this.head = this.head.next;
        } else if (currentNode === this.tail) {
          currentNode.prev.next = null;
          this.tail = currentNode.prev;
        } 
        // Case where the node to be removed is between H & T
        else {
          currentNode.prev.next = currentNode.next;
        }
      }
      // We always move onto the next node regardless
      currentNode = currentNode.next;
    }
  }
    

  this.reverse = () => {
    if (!this.head) {
      return null;
    }

    let currentNode = this.tail;
    this.tail = this.head;
    this.head = currentNode;
	
    while (currentNode !== null) {
      const tempNextNode = currentNode.next; 
      currentNode.next = currentNode.prev;
      currentNode.prev = tempNextNode;
      currentNode = currentNode.next;
    }
  }
};