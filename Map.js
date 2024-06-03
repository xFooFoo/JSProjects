var Map = function() {
  this.collection = {};
  
  this.add = (key, val) => {
    this.collection[key] = val;
  }

  this.remove = (key) => {
    delete this.collection[key];
  }

  this.get = (key) => {
    return this.collection[key];
  }
  
  this.has = (key) => {
    return this.collection[key] !== undefined;
  }

  this.values = () => {
    return Object.values(this.collection);
  }

  this.size = () => {
    return Object.keys(this.collection).length;
  }

  this.clear = () => {
	this.collection = {};
  }
};