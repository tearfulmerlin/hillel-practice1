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
const categoryList = document.querySelector('.products');
const tradeMarkList = document.querySelector('.trade-mark');
const modelList = document.querySelector('.model');

function renderCategoryList() {
  categoryList.innerHTML = '';
  assortment.forEach(category => {
    const categoryItem = document.createElement('div');
    categoryItem.textContent = category.title;
    categoryItem.addEventListener('click', () => {
      renderTradeMarkList(category.children);
      modelList.innerHTML = '';
    });
    categoryList.appendChild(categoryItem);
  });
}

function renderTradeMarkList(tradeMarks) {
  tradeMarkList.innerHTML = '';
  tradeMarks.forEach(tradeMark => {
    const tradeMarkItem = document.createElement('div');
    tradeMarkItem.textContent = tradeMark.title;
    tradeMarkItem.addEventListener('click', () => {
      renderModelList(tradeMark.children);
    });
    tradeMarkList.appendChild(tradeMarkItem);
  });
}

function renderModelList(models) {
  modelList.innerHTML = '';
  models.forEach(model => {
    const modelItem = document.createElement('div');
    modelItem.textContent = model.title;
    modelItem.addEventListener('click', () => {
      alert('Товар куплений!');
      resetCategoryList();
    });
    modelList.appendChild(modelItem);
  });
}

function resetCategoryList() {
  tradeMarkList.innerHTML = '';
  modelList.innerHTML = '';
  renderCategoryList();
}

renderCategoryList();
