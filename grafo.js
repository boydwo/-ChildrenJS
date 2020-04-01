
const data =
{
  id: 0,
  name: 'item 0',
  children: [
    {
      id: 1,
      name: 'item 1',
      children: [
        {
          id: 2,
          name: 'item 2',
          children: [
            {
              id: 3,
              name: 'item 3',
              value: 5,
            },
            {
              id: 4,
              name: 'item 4',
              value: 6,
            }
          ]
        },
        {
          id: 5,
          name: 'item 5',
          children: [
            {
              id: 6,
              name: 'item 6',
              value: 2,
            },
            {
              id: 7,
              name: 'item 7',
              value: 8,
            }
          ]
        }
      ]
    }
  ]
}

const search = (root) => {
  if (root.children[0].children) {
    for (let i = 0; i < root.children.length; i++) {
      search(root.children[i]);
    }
  }
  if (!root.value) {
    root.value = root.children.reduce((a, b) => a + b.value, 0);
  }
  console.log(root.name, root.value);
}
search(data)

// const search = (root) => {
//   if (root.children[0].children) root.children.map(item  => search(item))
//   if (!root.value) root.value = root.children.reduce((a, b) => a + b.value, 0);
//   console.log(root.name, root.value);
// }
// search(data)