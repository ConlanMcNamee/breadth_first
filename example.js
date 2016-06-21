var nodes = require('./nodes.js');
var node1 = nodes.node1;
var node2 = nodes.node2;
var node3 = nodes.node3;
var node4 = nodes.node4;
var node5 = nodes.node5;
var node6 = nodes.node6;
var node7 = nodes.node7;

//appears likes this
/*
            n1
        /      \
     n2          n3
    /   \       /   \
  n4     n5   n6    n7
*/

var breadth_first = require('./breadth.js');

breadth_first(node1);
