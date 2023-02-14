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

const cart = [];

window.showCart = () => {console.log({cart})}

const productContainer = document.querySelector('.products');
const markContainer = document.querySelector('.trade-mark');
const modelContainer = document.querySelector('.model');

function renderModels(modelList) {
  modelList.forEach((item) => {
    const model = document.createElement('div');

    model.innerText = item.title;
    model.style.cursor = 'pointer';
    model.addEventListener('click', () => {
      cart.push(item);
      const message = document.createElement('div');
      message.innerText = `${item.title} has been added`;
      document.body.appendChild(message);
      setTimeout(() => {
        message.innerHTML = '';
      }, 2000);
    });
    modelContainer.appendChild(model);
  });
}

function renderTradeMarks(tradeMarkList) {
  tradeMarkList.forEach((item) => {
    const product = document.createElement('div');

    product.innerText = item.title;
    product.style.cursor = 'pointer';
    product.addEventListener('click', () => {
      modelContainer.innerHTML = '';
      renderModels(item.children);
    });
    markContainer.appendChild(product);
  });
}

function renderCategories(productList) {
  productList.forEach((item) => {
    const product = document.createElement('div');
    product.innerText = item.title;
    product.style.cursor = 'pointer';

    product.addEventListener('click', () => {
      markContainer.innerHTML = '';
      modelContainer.innerHTML = '';
      renderTradeMarks(item.children);
    });

    productContainer.appendChild(product);
  });
}

renderCategories(assortment);
