// eslint-disable-next-line import/extensions
import assortment from './assortment.js';

/**
 *
 * Дано 3 блока:
 * В лівій частині сторінки - перелік категорій.
 * При клику на категорію виводиться в средний блок список торгових марок цієї категорії.
 * Клік на торгову мароку - моделі торгової марки у правому блоці.
 * При клику на модель виводиться повідомлення, що товар куплений
 * і повернення в початковий стан (коли відображється тільки список категорій)
 *
 */

const products = document.querySelector('.products');
const mark = document.querySelector('.trade-mark');
const model = document.querySelector('.model');

function show(list, shop) {
  list.forEach((item) => {
    const div = document.createElement('div');
    div.innerText = item.title;
    div.addEventListener('click', () => {
      if (item.type === undefined) {
        show(item.children, mark);
      }
      if (item.type === 'trade mark') {
        show(item.children, model);
      }
      if (item.type === 'model') {
        alert(`${item.title} куплений`);
        mark.innerText = '';
        model.innerText = '';
      }
    });
    shop.appendChild(div);
  });
}
show(assortment, products);
