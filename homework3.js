/** @format */
/* create tree1 and tree2 from nodes (function, 
which will take argument nodes and returns the tree1/tree2) */
nodes = [
	{ id: 1, parentId: null },
	{ id: 2, parentId: 1 },
	{ id: 3, parentId: 1 },
	{ id: 4, parentId: 2 },
	{ id: 5, parentId: 2 },
	{ id: 6, parentId: 3 },
	{ id: 7, parentId: 4 },
	{ id: 8, parentId: 7 },
	{ id: 9, parentId: 8 },
];

tree1 = {
	1: {
		2: {
			4: {
				7: {
					8: {
						9: {},
					},
				},
			},
			5: {},
		},
		3: {
			6: {},
		},
	},
};
tree2 = {
	id: 1,
	children: [
		{
			id: 2,
			children: [
				{
					id: 4,
					children: [
						{
							id: 7,
							children: [{ id: 8, children: [{ id: 9, children: [] }] }],
						},
					],
				},
				{ id: 5, children: [] },
			],
		},
		{
			id: 3,
			children: [{ id: 6, children: [] }],
		},
	],
};
making Tree1
function makeTree1(nodes, rootId) {
	const tree1 = {};
	tree1[rootId] = {};
	for (let i = 0; i < nodes.length; i++) {
		if (nodes[i].parentId === rootId) {
			let newRootId = nodes[i].id;
			let innerObj = makeTree1(nodes, newRootId);
			tree1[rootId][newRootId] = innerObj[newRootId];
		}
	}
	return tree1;
}
function findTree1(nodes) {
	root = nodes.find((obj) => !obj.parentId);
	return makeTree1(nodes, root.id);
}
console.log(findTree1(nodes));
//end of making Tree1

