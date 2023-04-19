import { format } from './utils';
import { counter } from './utils/counter';
import './styles.css';

console.log(format(500));

const body = document.querySelector('body');


body.innerText = format(1000) + counter;
