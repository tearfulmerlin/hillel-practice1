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

function getTable(col, list) {
  const category = col.querySelector('div');
  category.innerHTML = '';

  for (const e of list) {
    const div = document.createElement('div');

    div.innerText = e.title.toUpperCase();
    category.appendChild(div);

    div.onclick = function () {
      deleteClasses(this.parentNode);
      getClear(this.parentElement.parentElement.nextElementSibling);

      this.classList.add('active');

      const select = list.find((product) => product.title === this.textContent.toLowerCase());
      getTable(this.parentElement.parentElement.nextElementSibling, select.children);
    }
  }

  const model = col.querySelector('.model');

  for (const product of model.children) {
    product.onclick = function () {

      const mark = document.querySelector('.trade-mark .active');
      const resultBuy = document.querySelector('.prod');
      resultBuy.innerHTML = `You buy: ${mark.textContent} ${this.textContent}!`;

      getClear(document.querySelector('.col').nextElementSibling);
      deleteClasses(document.querySelector('.products'));
    }
  }
}

function deleteClasses(parent) {
  for (const e of parent.children) {
    e.classList.remove('active');
  }
}

function getClear(col) {
  if (col !== null) {
    const div = col.querySelector('div').innerHTML = '';

    getClear(col.nextElementSibling);
  }
}

const removeRes = () => document.getElementById('res').remove();
document.querySelector('.delete').addEventListener('click', removeRes);

getTable(document.querySelector('.col'), assortment);
