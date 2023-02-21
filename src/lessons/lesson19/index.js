// const table = document.createElement('div');
// table.style.display = 'flex';
// table.style.flexWrap = 'wrap';
// document.body.appendChild(table);
// document.body.style.margin = 0;

// for (let i = 1; i <= 100; i++) {
//   const cell = document.createElement('div');

//   cell.innerText = i;
//   cell.style.cssText = `
//     border: 1px solid grey;
//     box-sizing: border-box;
//     width: 10%;
//   `;
//   // cell.style.border = '1px solid grey';
//   // cell.style.boxSizing = 'border-box';
//   // cell.style.width = '10%';
//   // cell.style.height = '20px';
//   table.appendChild(cell);
// }


/** set couple styles */
// addEventListner vs node[eventProperty]


/** Events phases */
// capturing phase addEventlistner('key', Fn, isCaprutingPhaseEnabled)
// target phase
// bubling phase

// const parrent = document.querySelector('.parrent');
// const child = document.querySelector('.child');
// const button = document.querySelector('button');
// const input = document.querySelector('input');

// input.addEventListener('change', (event) => {
//   console.log(event.target.value);
//   console.log('clicked input');
// });
// parrent.addEventListener('click', (event) => {
//   console.log(event);
//   console.log('clicked parrent');
// });

// child.addEventListener('click', () => console.log('clicked child'), true);
// button.addEventListener('click', (event) => {
//   // console.log(event);
//   console.log('clicked button');
// }, true);

/** Events */
// target
// preventDefault()
// stopPropagation()
// stopImmediatePropagaion()


/** BOM */
// navigator - browser general info, OS
// - appName
// - appVersion
// - cookieEnabled
// - platform
// - language
// - geolocation-getCurrentPostion(clb)
// location - current URL info
// - reload
// - host = sitename + port
// - hostname - sitename
// - href - full url
// - port
// - protocol
// - search
// - hash
// history - moving between URL histoty
// go, back, forward
// - state
// screen - viewport
// -width height
// -availWidth availHeight
// window - alert, prompt, confirm, clearInterval, setInterval, setTimeout
// open, close, resizeTo, scrollTo



const goods = [
  {
    category: 'phones',
    tradeMarks: [
      {
        title: 'iphone',
        model: [
          { name: 'x' },
          { name: '11' },
          { name: '11 pro' },
        ],
      },
      {
        title: 'huawei',
        model: [
          { name: 'p20' },
          { name: 'p30' },
          { name: 'p40' },
        ],
      },
      {
        title: 'samsung',
        model: [
          { name: 's10' },
          { name: 's20' },
          { name: 's30' },
        ],
      },
    ],
  },
  {
    category: 'laptops',
    tradeMarks: [
      {
        title: 'lenovo',
        model: [
          { name: 'tp10' },
          { name: 'tp20' },
          { name: 'tp360' },
        ],
      },
      {
        title: 'asus',
        model: [
          { name: 'theros' },
          { name: 'ideaPad' },
          { name: 'A50' },
        ],
      },
    ],
  },
];

// const index = 0;

// goods[index]
const shop = document.createElement('div');
const categories = document.createElement('div');
shop.style.cssText = `
  border: 1px solid grey;
  min-width: 30%;
`;
document.body.appendChild(shop);
document.body.appendChild(categories);

// goods.forEach((item) => {
//   const categoryElement = document.createElement('div');

//   categoryElement.innerText = item.category;
//   categoryElement.addEventListener('click', () => {
//     item.tradeMarks
//   });
//   shop.appendChild(categoryElement);
// });

function showContent(list, key, container, childrenKey, childrenName) {
  list.forEach((item) => {
    const categoryElement = document.createElement('div');

    categoryElement.innerText = item[key];
    categoryElement.addEventListener('click', () => {
      console.log(item[key]);

      showContent(item[childrenKey], childrenName, categories, 'model');
    });

    container.appendChild(categoryElement);
  });
}

showContent(goods, 'category', shop, 'tradeMarks', 'title');
