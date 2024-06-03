function Stack() {
  var collection = [];

  this.isEmpty = function() {
    if (collection.length == 0) {
      return true;
    }
    return false;
  }

  this.push = function(element) { 
    collection[collection.length] = element; 
  }

  this.peek = function() {
    if (!this.isEmpty()) {
      return collection[collection.length - 1];
    } 
    return undefined;
  }

  this.pop = function() {
    if (!this.isEmpty()) {
      const valueToRemove = this.peek();
      const indexToRemove = collection.lastIndexOf(valueToRemove);
      collection.splice(indexToRemove, 1);
      return valueToRemove;
    }
    return undefined;
  }

  this.clear = function() {
    collection = [];
  }

}