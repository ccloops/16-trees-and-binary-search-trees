'use strict';

const KAryTree = function(value) {
  this.value = value;
  this._children = [];
};

KAryTree.prototype.appendChild = function(tree) {
  if(!(tree instanceof KAryTree))
    throw new TypeError('must insert a k-ary tree');

  this._children.push(tree);
};

KAryTree.prototype.breadthFirstSearch = function(value) {
  let queue = [];
  queue.push(this);

  let current = null;

  while(queue.length > 0) {
    current = queue.shift();
    if(current.value === value) {
      return current;
    }

    for(let child of current._children) {
      queue.push(child);
    }
  }
};

// KAryTree.prototype.breadthFirstToString = function () {
//   let queue = [];
//   queue.enqueue(this);

//   let current = null;
  
//   while 
// };

module.exports = KAryTree;
