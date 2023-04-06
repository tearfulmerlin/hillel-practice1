import assortment from './assortment.js';

function getTable(col, list) {
  const category = col.querySelector('div');
  category.innerHTML = '';

  list.forEach((e) => {
    const div = document.createElement('div');

    div.innerText = e.title.toUpperCase();
    category.appendChild(div);

    div.onclick = function () {
      deleteClasses(this.parentNode);
      getClear(this.parentElement.parentElement.nextElementSibling);

      this.classList.add('active');

      const { children } = list.find((product) => product.title === this.textContent.toLowerCase());
      getTable(this.parentElement.parentElement.nextElementSibling, children);
    }
  });

  const model = col.querySelector('.model');

  Array.from(model.children).forEach((product) => {
    product.onclick = function () {
      const mark = document.querySelector('.trade-mark .active');
      const resultBuy = document.querySelector('.prod');
      const productName = `${mark.textContent} ${this.textContent}`;

      const productEl = document.createElement('div');
      productEl.classList.add('product');
      productEl.innerText = productName;

      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('delete-product');
      deleteBtn.innerText = 'Delete';

      deleteBtn.onclick = function () {
        productEl.remove();
      };

      resultBuy.appendChild(productEl);
      productEl.appendChild(deleteBtn);

      getClear(document.querySelector('.col').nextElementSibling);
      deleteClasses(document.querySelector('.products'));
    }
  });
}

function deleteClasses(parent) {
  Array.from(parent.children).forEach((e) => {
    e.classList.remove('active');
  });
}

function getClear(col) {
  if (col) {
    col.querySelector('div').innerHTML = '';
    getClear(col.nextElementSibling);
  }
}

getTable(document.querySelector('.col'), assortment);
