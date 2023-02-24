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

const categoriesList = document.querySelector('.products');
const tradeMarksList = document.querySelector('.trade-mark');
const modelsList = document.querySelector('.model');

assortment.forEach((category) => {
  const categoryItem = document.createElement('div');
  categoryItem.textContent = category.title;
  categoryItem.addEventListener('click', () => {
    categoriesList.querySelectorAll('.active').forEach((activeItem) => {
      activeItem.classList.remove('active');
    });
    categoryItem.classList.add('active');
    tradeMarksList.innerHTML = '';
    modelsList.innerHTML = '';
    category.children.filter((child) => child.type === 'trade mark').forEach((tradeMark) => {
      const tradeMarkItem = document.createElement('div');
      tradeMarkItem.textContent = tradeMark.title;
      tradeMarkItem.addEventListener('click', () => {
        tradeMarksList.querySelectorAll('.active').forEach((activeItem) => {
          activeItem.classList.remove('active');
        });
        tradeMarkItem.classList.add('active');
        modelsList.innerHTML = '';
        tradeMark.children.filter((child) => child.type === 'model').forEach((model) => {
          const modelItem = document.createElement('div');
          modelItem.textContent = model.title;
          modelItem.addEventListener('click', () => {
            alert(`Product ${tradeMark.title} ${model.title} is purchased!`);
            modelsList.querySelectorAll('.active').forEach((activeItem) => {
              activeItem.classList.remove('active');
            });
            tradeMarksList.innerHTML = '';
            modelsList.innerHTML = '';
          });
          modelsList.appendChild(modelItem);
        });
      });
      tradeMarksList.appendChild(tradeMarkItem);
    });
  });
  categoriesList.appendChild(categoryItem);
});

// щось код вийшов трішки не зроумілий "не читаємий"
// у майюутьньому буду залишати коментарі як розмітку важливих секцій :)
