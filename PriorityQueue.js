function PriorityQueue () {
  this.collection = [];
  
  this.isEmpty = function() {
    if (this.collection.length == 0) {
      return true;
    }
    return false;
  }

  this.front = function() {
    return this.collection[0][0];
  }

  this.size = function() {
    return this.collection.length;
  }

  this.enqueue = function(element) {
    const elementPriority = element[1];
    for (let i = 0; i < this.size(); i ++) {
      // this condition allows the new element to be placed at the end of equal   priority elements, if it is equal or less to the lowest priority element then the final return statement covers that case
      if (elementPriority < this.collection[i][1]) {
        this.collection.splice(i, 0 , element);
        return;
      }
    }
    this.collection[this.collection.length] = element;
  }

  this.dequeue = function() {
    const frontElement = this.front();
    if (frontElement) {
      this.collection.splice(0,1);
      return frontElement[0];
    }
    return;
  }
}
/*  TEST

let pq = new PriorityQueue();
pq.collection = [['kitten', 2], ['dog', 2], ['rabbit', 2]];
pq.enqueue(['human', 1] );
pq.enqueue(['koala', 3] );
pq.dequeue();
pq.dequeue();
for (const element of pq.collection) {
  console.log(element);
}

*/