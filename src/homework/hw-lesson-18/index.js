


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