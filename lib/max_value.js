
function maxValue(node, visited = new Set(), stack = [node], maxVal = 0) {
  if (stack.length === 0) return maxVal;
  let currentNode = stack.pop();
//   console.log('current node: ', currentNode)
  if (!visited.has(currentNode.val)) {
      visited.add(currentNode.val)
    //   console.log(visited)
    if (currentNode.val > maxVal) {
      maxVal = currentNode.val;
    }
    stack.push(...currentNode.neighbors)
    return maxValue(null, visited,stack, maxVal)
  } else {
        return maxValue(null, visited, stack, maxVal)
   }
    //   if (visited.has(node)) return;
    //   visited.add(node);

    //   let maxes = node.neighbors.map((neighbor) => {
    //     maxValue(neighbor, visited);
    //   });
    //   return Math.max(node.val, ...maxes);
}



class GraphNode {
    constructor(val) {
        this.val = val;
        this.neighbors = [];
    }
}

// let seven = new GraphNode(7);
// let eight = new GraphNode(8);
// let nine = new GraphNode(9);
// seven.neighbors = [eight];
// eight.neighbors = [nine];
// nine.neighbors = [seven];

let five = new GraphNode(5);
let three = new GraphNode(3);
let two = new GraphNode(2);
let four = new GraphNode(4);
let ten = new GraphNode(10);
let seven = new GraphNode(7);
let six = new GraphNode(6);
let eight = new GraphNode(8);
five.neighbors = [three, two, four];
two.neighbors = [seven, ten];
four.neighbors = [six];
console.log(maxValue(five))
console.log(maxValue(eight))
// // console.log(maxValue(eight))
// console.log(maxValue(seven))

module.exports = {
  maxValue
};
