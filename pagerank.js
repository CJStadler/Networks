/*
Chris Stadler
pagerank.js

Implementation of PageRank algorithm.
Function calculatePageRank takes a Graph object as argument and sets the PageRank of each node in the graph.
*/

function calculatePageRank(graph) {
	var d = 0.85; // damping factor
	var pageranks = {}; // name --> PR
	var N = graph.names.length;

	// Initial Pageranks
	var initPR = 1/N;
	for (var i=0; i<N; i++) {
		var name = graph.names[i]
		pageranks[name] = initPR;
	}
	graph.setPageRanks(pageranks);

	// Update pageranks iteratively
	var change = 1; // Total change in PRs from previous iteration. Arbitrary starting value.
	var k = 0; // iterations
	while (change > 0.00001) { // Stop when the change is small.
		if (k >= 100) {
			alert("PageRank halted after 100 iterations");
			console.log("after 100 iterations change = ", change);
			break;
		}
		change = 0; // sum change for each node
		// Iterate over nodes
		for (var i=0; i<N; i++) {
			var PR = 0; // new page rank of this node
			var name = graph.names[i];
			var node = graph.getNode(name);
			
			var ins = graph.getIn(node).concat(graph.getSinks()); // Nodes pointing to node (all sinks have imaginary links)
			for (var j=0; j<ins.length; j++) { // Iterate over in-nodes
				if (!node.equals(ins[j])) { // Make sure not to link to self
					var outD = graph.getOut(ins[j]).length; // out degree
					if (outD == 0) {outD = N-1} // This is a sink
					PR = PR + ins[j].getPageRank()/outD;
				}
			}
			PR = PR*d + (1-d)/N; // account for damping factor
			
			change = change + Math.abs(PR-pageranks[name]);
			pageranks[name] = PR;
		}
		
		k = k + 1;
		graph.setPageRanks(pageranks); // Update the graph with the new page ranks.
	}
	//console.log("PageRank took ", k, " iterations");
}