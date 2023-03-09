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

const cartProducts = document.querySelector('div.products');
const cartMarks = document.querySelector('div.trade-mark');
const cartModel = document.querySelector('div.model');

function findProducts(asortment) {
  asortment.forEach((product) => {
    const someDevice = document.createElement('div');
    someDevice.innerText = product.title;
    someDevice.style.cursor = 'pointer';
    cartProducts.appendChild(someDevice);
    someDevice.addEventListener('click', () => {
      cartModel.innerHTML = '';
      cartMarks.innerHTML = '';
      product.children.forEach((marks) => {
        const someMarks = document.createElement('div');
        someMarks.innerText = marks.title;
        someMarks.style.cursor = 'pointer';
        cartMarks.appendChild(someMarks);
        someMarks.addEventListener('click', () => {
          cartModel.innerHTML = '';
          marks.children.forEach((models) => {
            const someModels = document.createElement('div');
            someModels.style.cursor = 'pointer';
            someModels.innerText = models.title;
            cartModel.appendChild(someModels);
            someModels.addEventListener('click', () => {
              cartMarks.innerHTML = '';
              cartModel.innerHTML = '';
              const cart = document.createElement('div');
              cart.innerHTML = `<b>Вітаю ви купили ${marks.title} ${models.title}</b>`;
              cart.style.textTransform = 'uppercase';
              document.body.appendChild(cart);
              setTimeout(() => {
                cart.innerHTML = '';
              }, 3000);
            });
          });
        });
      });
    });
  });
}
findProducts(assortment);