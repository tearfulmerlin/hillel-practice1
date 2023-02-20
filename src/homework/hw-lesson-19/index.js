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
      break;
    }
  }
}

function cleanChildrenDisplay(type, title) {
  const activeCategory = assortment.find((x) => x.isActive);
  if (!activeCategory) return;

  if (type === undefined) {
    if (activeCategory.title === title) {
      activeCategory?.children.forEach((tradeMarkItem) => {
        tradeMarkItem.isActive = false;
        tradeMarkItem.children.forEach((modelItem) => { modelItem.isSelected = false; });
      });
    } else {
      activeCategory.isActive = false;
      activeCategory?.children.forEach((tradeMarkItem) => { tradeMarkItem.isActive = false; });
    }
  }

  if (type === 'trade mark') {
    const activeTradeMark = activeCategory.children.find((x) => x.isActive);
    if (!activeTradeMark) return;

    activeTradeMark.isActive = false;
  }

  if (type === 'model') {
    const activeTradeMark = activeCategory.children.find((x) => x.isActive);
    const activeModels = activeTradeMark.children
      .filter((item) => item.isSelected && item.title === title);
    activeModels?.forEach((item) => { item.isSelected = false; });
  }
}

function cleanNextSeblingElementemnt(element) {
  if (element.nextElementSibling) {
    cleanNextSeblingElementemnt(element.nextElementSibling);
  }

  const div = element.querySelector('div');
  div.innerHTML = '';
}

function cleanElementsWithChildren(element) {
  const parent = element.closest('.col');

  if (parent?.nextElementSibling) {
    cleanNextSeblingElementemnt(parent.nextElementSibling);
  }
}

function render(data, columnIndex) {
  const ul = document.createElement('ul');

  data.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item.title;

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
      item.isSelected && li.classList.add('selected');

      li.addEventListener('click', (e) => {
        const processingItem = item;
        const { isSelected } = item;

        if (processingItem.isSelected) {
          deleteClassOnElements(e.target, 'selected');
          cleanChildrenDisplay(processingItem.type, item.title);
        } else {
          addClass(e.target, 'selected');
          alert(`"${e.target.innerText}" is purchased`);
        }

        processingItem.isSelected = !isSelected;
      });
    }

    ul.append(li);
  });

  columns[columnIndex].innerHTML = '';
  columns[columnIndex].append(ul);
}

render(assortment, 0);
