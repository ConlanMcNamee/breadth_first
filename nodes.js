function makeNode(data) {
  this.data = data;
}

var node1 = new makeNode(1);
var node2 = new makeNode(2);
var node3 = new makeNode(3);
var node4 = new makeNode(4);
var node5 = new makeNode(5);
var node6 = new makeNode(6);
var node7 = new makeNode(7);
var node8 = new makeNode(8);
node1.left = node2;
node1.right = node3;
node2.left = node4
node2.right = node5;
node3.left = node6
node3.right = node7;
node5.right = node8;

var breadth_first = require('./breadth.js');

breadth_first(node1);

//tree would appear as below n is a node

/*
            n1
      n2            n3
  n4      n5    n6      n7
*/


// module.exports = {
//   node1: node1,
//   node2: node2,
//   node3: node3,
//   node4: node4,
//   node5: node5,
//   node6: node6,
//   node7: node7
// }
