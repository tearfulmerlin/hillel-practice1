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
let tradeMark = document.querySelector('.trade-mark');
let model = document.querySelector('.model');

function showContent(list, container) {
  list.forEach((item) => {
    const categoryElement = document.createElement('div');
    categoryElement.innerText = item.title;
    categoryElement.addEventListener('click', () => {
      if (item.type === undefined) {
        showContent(item.children, tradeMark);
      }
      if (item.type === 'trade mark') {
        showContent(item.children, model);
      }
      if (item.type === 'model') {
        alert(`${item.title} куплений`);
        tradeMark.innerText = '';
        model.innerText = '';
      }
    });
    container.appendChild(categoryElement);
  });
}

showContent(assortment, products);
