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
const tradeMarks = document.querySelector('.trade-mark');
const model = document.querySelector('.model');


assortment.forEach((item) => {
  const productsList = document.createElement('div');
  productsList.innerText = item.title;
  products.appendChild(productsList);
  productsList.addEventListener('click', () => {
    const arrIn = item.children;
    arrIn.forEach((e) => {
      const tradeMarksList = document.createElement('div');
      tradeMarksList.innerText = e.title;
      tradeMarks.appendChild(tradeMarksList);
      tradeMarksList.addEventListener('click', () => {
        const arrModels = e.children;
        arrModels.forEach((i) => {
          const modelList = document.createElement('div');
          modelList.innerText = i.title;
          model.appendChild(modelList);
          modelList.addEventListener('click', () => {
            if (!alert('SOLD OUT')) { window.location.reload(); }
          });
        });
      }, { once: true });
    });
  }, { once: true });
});
