function Queue() {
  var collection = [];
  
  this.isEmpty = function() {
    if (collection.length == 0) {
      return true;
    }
    return false;
  }

  this.front = function() {
    if (!this.isEmpty()) {
      return collection[0];
    }
    return undefined;
  }

  this.size = function() {
    return collection.length;
  }

  this.dequeue = function() {
    const frontElement = this.front();
    if (frontElement) {
      collection.splice(0, 1);
      return frontElement;
    }
    return undefined;
  }

  this.enqueue = function(element) {
    collection[collection.length] = element;
  }
}