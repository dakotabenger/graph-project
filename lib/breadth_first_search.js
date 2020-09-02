function breadthFirstSearch(startingNode, targetVal) {

    let queue = [startingNode];

    let visited = new Set();

    while(queue.length) {
        let currentNode = queue.shift();
        if(visited.has(currentNode)) {
            continue;
        }
        visited.add(currentNode);

        if(currentNode.val === targetVal) return currentNode;

        queue.push(...currentNode.neighbors)


    }

    return null;
}

module.exports = {
    breadthFirstSearch
};