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
const tradeMark = document.querySelector('.trade-mark');
const model = document.querySelector('.model');

assortment.forEach((item) => {
  const shopDiv = document.createElement('div');
  shopDiv.innerHTML = item.title;
  products.appendChild(shopDiv);
  shopDiv.addEventListener('click', () => {
    const child = item.children;
    child.forEach((e) => {
      const categoriesDiv = document.createElement('div');
      categoriesDiv.innerHTML = e.title;
      tradeMark.appendChild(categoriesDiv);
      categoriesDiv.addEventListener('click', () => {
        const childE = e.children;
        childE.forEach((u) => {
          const individualsDiv = document.createElement('div');
          individualsDiv.innerHTML = u.title;
          model.appendChild(individualsDiv);
          individualsDiv.addEventListener('click', () => {
            if (!alert('sold out!')) { window.location.reload(); }
          });
        });
      }, { once: true });
    });
  }, { once: true });
});
