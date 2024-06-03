class Set {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = {};
    this.length = 0;
  }

  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }

  // This method will return all the keys (used as values) in the set
  values() {
    return Object.keys(this.dictionary);
  }

  add(element) {
    if (!this.has(element)) {

      this.dictionary[element] = true;
      this.length++;
      return true;
    }
    return false;
  }

  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }
    return false;
  }

  size() {
    return this.length;
  }
  
  union(set) {
    const newSet = new Set();
    let setValues = [];
    if (this.length >= set.length) {
      newSet.dictionary = this.dictionary;
      newSet.length = this.length;
      setValues = set.values();
    } 
    else { 
      newSet.dictionary = set.dictionary;
      newSet.length = set.length;
      setValues = this.values();
    }
    for (const value of setValues) {
      if (!newSet.has(value)) {
        newSet.add(value);
      }
    }
    return newSet;
  }
  
  intersection(set) {
    const newSet = new Set();
    let smallerSet;
    let largerSet;
    if (this.size() >= set.size()) {
      smallerSet = set;
      largerSet = this;
    }
    else {
      smallerSet = this;
      largerSet = set;
    }
    smallerSet.values().forEach(value => {
      if (largerSet.has(value)) {
        newSet.add(value);
      }
    });
    return newSet;
  }
  
  difference(set) {
    const newSet = new Set();
    this.values().forEach(value => {
      if (!set.has(value)) {
        newSet.add(value);
      }
    })
    return newSet;
  }
  
  isSubsetOf(set) {
    for (const value of this.values()) {
      if (!set.has(value)) {
        return false;
      }
    }
    return true;
  }
  
  
}
