


function onFocus(e) {
    const span = document.createElement('span');
    span.innerText = 'you focused!';
    span.id = 'focusSpan';
    e.target.insertAdjacentElement('afterend', span);
}

function onBlur(e) {
    const span = document.querySelector('#focusSpan');
    document.body.removeChild(span);
}

const input = document.querySelector('#nameInput');
input.onfocus = onFocus;
input.onblur = onBlur;


const rowAmnt = 10;
const colAmnt = 10;
let iterator = 1;
const table = document.createElement('table');

for (let i = 0; i < rowAmnt; i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j < colAmnt; j++) {
        const td = document.createElement('td');
        td.innerText = iterator++;
        tr.insertAdjacentElement('beforeend', td);
    }
    table.insertAdjacentElement('beforeend', tr);
}
document.querySelector('.table').insertAdjacentElement('beforeend', table);
