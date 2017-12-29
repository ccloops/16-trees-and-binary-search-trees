'use strict';

class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  _insert(node, value) {
    if(typeof value !== 'number') {
      throw new TypeError('Binary Search Tree - value must be a number');
    }

    if(node.value === value)
      throw new TypeError('Binary Search Tree - value already exists');

    if(node.value < value) {
      if(!node.right) {
        node.right = new Node(value);
        return;
      }
      this._insert(node.right, value);
      return;
    }

    if(node.value > value) {
      if(!node.left) {
        node.left = new Node(value);
        return;
      }
      this._insert(node.left, value);
      return;
    }
  }

  insert(value) {

    if(!this.root) {
      this.root = new Node(value);
    } else {
      this._insert(this.root, value);
    }
  }

  _find(node, value) {
    if(!node)
      return null;

    else if(node.value === value)
      return node;

    else if(node.value < value) 
      return this._find(node.right, value);
        
    else if(node.value > value)
      return this._find(node.left, value);

  }

  find(value) {
  
    return this._find(this.root, value);
  }


  _findMinValue() {
    return this.left ? this.left.findMinValue() : this.value;
  }


  _remove(node, value, parentNode) {

    if(!node)
      return null;

    else if(node.value === value) {
      if(node.left && node.right) {
        node.value = this._findMinValue(node.right);
        this._remove(node.right, node.value, node);
        return;
      }

      else if(node.left) {
        if(parentNode.right.value === value) {
          parentNode.right = node.left;
        }

        else if(parentNode.left.value === value) {
          parentNode.left = node.left;
        }
        return;
      }

      else if(node.right) {
        if(parentNode.right.value === value) {
          parentNode.right = node.right;
        }

        else if(parentNode.left.value === value) {
          parentNode.left = node.right;
        }
        return;
      }
      else {
        if(parentNode.left.value === value) {
          parentNode.left = null;
        }
        else if(parentNode.right.value === value) {
          parentNode.right = null;
        }
      } 
      return;
    }

    else if(node.value > value) {
      if(node.left.value) {
        this._remove(node.left, value, node);
      }
      return null;
    }

    else if(node.value < value) {
      if(node.right.value) {
        this._remove(node.right, value, node);
      }
      return null;
    }
  }

  remove(value) {
    return this._remove(this.root, value);
  }

}


module.exports = BinarySearchTree;