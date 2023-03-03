/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
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
const columns = [
  document.querySelector('.products'),
  document.querySelector('.trade-mark'),
  document.querySelector('.model'),
];

function addClass(element, className) {
  element.classList.add(className);
}

function deleteClassOnElements(element, className) {
  const liElements = element.parentNode.querySelectorAll('li');

  for (const liElement of liElements) {
    if (liElement.classList.contains(className)) {
      liElement.classList.remove(className);
    }
  }
}

function cleanChildrenDisplay(type, title) {
  const activeCategory = assortment.find((x) => x.isActive);
  if (!activeCategory) return;

  activeCategory.children.forEach((tradeMarkItem) => { tradeMarkItem.isActive = false; });

  if ((type === undefined && activeCategory.title !== title) || type === 'model') {
    activeCategory.isActive = false;
  }
}

function cleanNextSeblingElement(element) {
  if (element.nextElementSibling) {
    cleanNextSeblingElement(element.nextElementSibling);
  }

  const div = element.querySelector('div');
  div.innerHTML = '';
}

function cleanElementsWithChildren(element) {
  const parent = element.closest('.col');

  if (parent?.nextElementSibling) {
    cleanNextSeblingElement(parent.nextElementSibling);
  }
}

function render(data, columnIndex) {
  const ul = document.createElement('ul');

  data.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item.title;
    ul.append(li);

    if (Array.isArray(item?.children)) {
      li.addEventListener('click', (e) => {
        const processingItem = item;
        const { isActive } = item;

        cleanElementsWithChildren(e.target);
        deleteClassOnElements(e.target, 'active');

        if (!processingItem.isActive) {
          addClass(e.target, 'active');
          render(item.children, columnIndex + 1);
        }

        cleanChildrenDisplay(processingItem.type, item.title);
        processingItem.isActive = !isActive;
      });
    } else {
      li.addEventListener('click', (e) => {
        alert(`"${e.target.innerText}" is purchased`);

        const activeCatigoryElement = document.querySelector('.products li.active');
        cleanElementsWithChildren(activeCatigoryElement);
        deleteClassOnElements(activeCatigoryElement, 'active');
        cleanChildrenDisplay(item.type, item.title);
      });
    }
  });

  columns[columnIndex].innerHTML = '';
  columns[columnIndex].append(ul);
}

render(assortment, 0);
