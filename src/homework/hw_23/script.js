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

function showAssortment(col, list) {
  const category = col.querySelector('div');
  category.innerHTML = '';

  function showClear(col) {
    if (col !== null) {
      col.querySelector('div').innerHTML = '';
      showClear(col.nextElementSibling);
    }
  }

  for (const element of list) {
    const div = document.createElement('div');

    div.innerText = element.title.toUpperCase();
    category.appendChild(div);

    div.onclick = function () {
      showClear(this.parentElement.parentElement.nextElementSibling);
      this.classList.add('active');
      const select = list.find((product) => product.title === this.textContent.toLowerCase());
      showAssortment(this.parentElement.parentElement.nextElementSibling, select.children);
    }
  }

  const model = col.querySelector('.model');
  for (const product of model.children) {
    product.onclick = function () {

      const mark = document.querySelector('.trade-mark .active');
      alert(`you have added : ${mark.textContent} ${this.textContent} to cart!`);
      showClear(document.querySelector('.col').nextElementSibling);
    }
  }
}

showAssortment(document.querySelector('.col'), assortment);
