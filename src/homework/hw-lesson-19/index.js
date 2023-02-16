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

function cleaner() {
  document.querySelector('.trade-mark').removeChild(document.querySelector('.trade-mark > div'));
  document.querySelector('.model').removeChild(document.querySelector('.model > div'));
}

function buy(category, mark, model) {
  const titleOfItem = `${assortment[category].children[mark].title} ${assortment[category].children[mark].children[model].title}`;
  const buyInfoElement = document.createElement('div');
  buyInfoElement.innerText = `Товар ${titleOfItem} добавлен в корзину`;
  document.body.appendChild(buyInfoElement);

  cleaner();
}

function showModels(category, mark) {
  if (document.querySelector('.model > div') !== null && document.querySelector('.model > div').classList.contains('models')) {
    document.querySelector('.model').removeChild(document.querySelector('.models'));
  }

  const modelsElement = document.createElement('div');
  modelsElement.classList.add('models');
  document.querySelector('.model').appendChild(modelsElement);

  assortment[category].children[mark].children.forEach((item, index) => {
    const modelElement = document.createElement('div');
    modelElement.innerText = item.title;
    document.querySelector('.model > div:last-child').appendChild(modelElement);
    modelElement.addEventListener('click', () => { buy(category, mark, index); });
  });
}

function showTradeMarks(category) {
  if (document.querySelector('.trade-mark > div') !== null && document.querySelector('.trade-mark > div').classList.contains('trade-marks')) {
    document.querySelector('.trade-mark').removeChild(document.querySelector('.trade-marks'));
  }

  const tradeMarkElement = document.createElement('div');
  tradeMarkElement.classList.add('trade-marks');
  document.querySelector('.trade-mark').appendChild(tradeMarkElement);

  assortment[category].children.forEach((item, index) => {
    const markElement = document.createElement('div');
    markElement.innerText = item.title;
    document.querySelector('.trade-mark > div:last-child').appendChild(markElement);
    markElement.addEventListener('click', () => { showModels(category, index); });
  });
}

assortment.forEach((item, index) => {
  const categoryElement = document.createElement('div');
  categoryElement.innerText = item.title;
  document.querySelector('.products').appendChild(categoryElement);
  categoryElement.addEventListener('click', () => { showTradeMarks(index); });
});
