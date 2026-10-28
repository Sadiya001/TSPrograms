class Graph {
    // Maps node -> array of neighboring nodes
    adjList: Map<number, number[]>;

    constructor() {
        self.adjList = new Map<number, number[]>();
    }

    addVertex(vertex: number): void {
        if (!this.adjList.has(vertex)) {
            self.adjList.set(vertex, []);
        }
    }

    addEdge(u: number, v: number, bidirectional: boolean = true): void {
        this.addVertex(u);
        this.addVertex(v);
        
        self.adjList.get(u)!.push(v);
        if (bidirectional) {
            self.adjList.get(v)!.push(u);
        }
    }
}
function graphDFS(graph: Graph, startNode: number): void {
    const visited = new Set<number>();
    
    function helper(node: number): void {
        visited.add(node);
        console.log(node); // Process node
        
        const neighbors = graph.adjList.get(node) || [];
        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                helper(neighbor);
            }
        }
    }
    
    helper(startNode);
}
function graphBFS(graph: Graph, startNode: number): void {
    const visited = new Set<number>();
    const queue: number[] = [startNode];
    
    visited.add(startNode);
    
    while (queue.length > 0) {
        const node = queue.shift()!;
        console.log(node); // Process node
        
        const neighbors = graph.adjList.get(node) || [];
        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}
