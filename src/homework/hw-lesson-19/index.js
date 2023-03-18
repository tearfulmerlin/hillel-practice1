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

const product = document.querySelector('.products');
const tradeMark = document.querySelector('.trade-mark');
const models = document.querySelector('.model');

function showProducts(arr, area) {
  arr.forEach((el) => {
    const divElem = document.createElement('div');
    divElem.innerText = el.title;
    divElem.addEventListener('click', () => {
      if (el.type === undefined) {
        showProducts(el.children, tradeMark);
      }
      if (el.type === 'trade mark') {
        showProducts(el.children, models);
      }
      if (el.type === 'model') {
        alert(`${el.title} added to cart`);
        tradeMark.innerText = null;
        models.innerText = null;
      }
    });
    area.appendChild(divElem);
  });
}

showProducts(assortment, product);
