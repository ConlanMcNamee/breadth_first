module.exports = function(tree) {
  //initizalize a queue in the form of an array
  //only interact with enqueue and dequeue like a normal queue
  //javascript doesnt have these but we can use push as an enqueue
  //and we can use shift to dequeue
  var queue = [];
  //push the head node aka tree into the queue
  queue.push(tree);

  //while the queue has items in it
  while(queue.length) {
    //remove the first item in the queue and store it for use
    var current = queue.shift();
    //console log as our way of seeing the data interaction
    console.log(current.data);
    //check if there are a left/right can replace with children
    if(current.left) {
      //we push the left child first
      queue.push(current.left);
    }
    if(current.right) {
      //push the right child second
      queue.push(current.right);
    }
  }
  //the above will loop until we no longer find children to queue up
}
