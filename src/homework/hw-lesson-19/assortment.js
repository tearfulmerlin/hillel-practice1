const assortment = [
  {
    title: 'phones',
    children: [
      {
        type: 'trade mark',
        title: 'iphone',
        children: [
          { title: 'x' },
          { title: '11' },
          { title: '11 pro' },
        ],
      },
      {
        type: 'trade mark',
        title: 'huawei',
        children: [
          { 
            type: 'model',
            title: 'p20',
          },
          {
            title: 'p30',
            type: 'model',
          },
          {
            type: 'model',
            title: 'p40',
          },
        ],
      },
      {
        type: 'trade mark',
        title: 'samsung',
        children: [
          {
            type: 'model',
            title: 'a23',
          },
          {
            type: 'model',
            title: 'a33',
          },
          {
            type: 'model',
            title: 's22',
          },
        ],
      },
    ],
  },
  {
    title: 'laptops',
    children: [
      {
        type: 'trade mark',
        title: 'lenovo',
        children: [
          {
            type: 'model',
            title: 'ideapad',
          },
          {
            type: 'model',
            title: 'thinkpad',
          },
          {
            type: 'model',
            title: 'legion',
          },
        ],
      },
      {
        type: 'trade mark',
        title: 'asus',
        children: [
          {
            type: 'model',
            title: 'rog',
          },
          {
            type: 'model',
            title: 'vivobook',
          },
          {
            type: 'model',
            title: 'tuf',
          },
        ],
      },
    ],
  },
];

export default assortment;
