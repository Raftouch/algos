const tree = [
  {
    parent: 5,
    children: [
      {
        parent: 5,
      },
      {
        parent: 10,
        children: [
          {
            parent: 11,
          },
        ],
      },
      {
        parent: 11,
        children: [
          {
            parent: 12,
            children: [
              {
                parent: 5,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    parent: 5,
    children: [
      {
        parent: 7,
      },
      {
        parent: 12,
        children: [
          {
            parent: 11,
          },
        ],
      },
      {
        parent: 14,
      },
    ],
  },
]

function treeSum(tree) {
  if (!tree.length) {
    return 0
  }
  let sum = 0
  let stack = []

  tree.forEach((node) => stack.push(node))

  while (stack.length) {
    let node = stack.pop()
    sum += node.parent
    if (node.children) {
      node.children.forEach((n) => stack.push(n))
    }
  }
  return sum
}

console.log(treeSum(tree)) // 108
