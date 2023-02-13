// eslint-disable import/extensions
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

function removeActiveClasses(parent) {
  for (const el of parent.children) {
    el.classList.remove('active');
  }
}

function clearAllNeighbours(col) {
  if (col !== null) {
    const div = col.querySelector('div');
    div.innerHTML = '';
    clearAllNeighbours(col.nextElementSibling);
  }
}

function renderColumn(col, list) {
  if (col !== null) {
    const categoryBlock = col.querySelector('div');
    categoryBlock.innerHTML = '';
    for (const el of list) {
      const node = document.createElement('div');

      node.innerText = el.title.toUpperCase();
      categoryBlock.appendChild(node);

      node.addEventListener('click', function () {
        removeActiveClasses(this.parentNode);
        clearAllNeighbours(this.parentElement.parentElement.nextElementSibling);

        this.classList.add('active');
        const assort = list.find((product) => product.title === this.textContent.toLowerCase());
        renderColumn(this.parentElement.parentElement.nextElementSibling, assort.children);
      });
    }

    const models = col.querySelector('.model');
    if (models !== null) {
      for (const product of models.children) {
        product.addEventListener('click', function() {
          const marks = document.querySelector('.trade-mark .active');
          alert(`You bought ${marks.textContent} ${this.textContent}!`);
          clearAllNeighbours(document.querySelector('.col').nextElementSibling);
          removeActiveClasses(document.querySelector('.products'));
        });
      }
    }
  }
}

renderColumn(document.querySelector('.col'), assortment);
