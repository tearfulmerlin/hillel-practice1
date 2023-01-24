// const str = `The quick brown fox jumps
// over the lazy dog.`;
const str = 'The quick brown fox jumps over the lazy dog.';
const strWithSpaces = '     The quick brown fox jumps over the lazy dog.     ';

// String.length;
// console.log(str.length);
// str.length = 10;


// String.at()
// String.charAt();
// console.log(str.at(-1));
// console.log(str.charAt(1));


// String.charCodeAt(); unicode
// String.codePointAt(); utf-16
// console.log(str.charCodeAt(0));
// console.log(str.codePointAt(0));

// String.fromCharCode();
// String.fromCodePoint();
// console.log(String.fromCharCode(84));
// console.log(String.fromCodePoint(85));



// String.concat();
// console.log(str.concat(' - ', str, ' - ', str));
// String.slice();
// console.log(str.length);
// console.log(str.slice(15, 43));
// String.substring()
// console.log(str.substring(0, 20));
// String.split()
// console.log(str.split('o'));
// String.repeat();
// console.log(str.repeat(0));

// String.trim()
// console.log(strWithSpaces);
// console.log(1 + strWithSpaces.trim() + 1);
// String.trimStart()
// console.log(1 + strWithSpaces.trimStart() + 1);
// String.trimEnd()
// console.log(1 + strWithSpaces.trimEnd() + 1);
// String.trimLeft() - not standard
// String.trimRight() - not standard

// String.toLowerCase()
// console.log(str.toLowerCase());
// String.toUpperCase()
// console.log(str.toUpperCase());
// String.toLocaleLowerCase()
// console.log(str.toLocaleLowerCase('uk'));
// String.toLocaleUpperCase()
// console.log(str.toLocaleUpperCase('us-US'));


// String.includes();
// console.log(str.includes('fox', 0));
// String.startsWith()
// console.log(str[15]);
// console.log(str.startsWith('brown', 10));
// String.endsWith();
// console.log(str.endsWith('brown', 15));

// String.localeCompare();
// console.log('T'.charCodeAt() < 't'.charCodeAt());
// console.log('T'.localeCompare('t', 'uk-Uk', { sensitivity: 'base' }));

// String.indexOf();
// console.log(str.indexOf('fox', -30));
// String.lastIndexOf();
// console.log(str.lastIndexOf('fox', 16));

// String.padStart();
// String.padEnd();
// console.log(str.length);
// const padded = str.padEnd(55, '1');
// console.log(padded);
// console.log(padded.length);

// String.replace();
// const replaced1 = str.toLowerCase().replace('the', 'bear');
// String.replaceAll();
// const replaced = str.toLowerCase().replaceAll('the', 'bear');
// console.log(replaced1);
// console.log(replaced);

// regexp
// String.match();
// console.log(str.match(/the/ig));
// String.matchAll();
// console.log([...str.matchAll(/the/ig)]);
// String.search();
// console.log(str.search(/the/ig));


// String.normalize();


const regExp = /[^a-zA-Z\s]/g;

const replaced = str.replace(regExp, 'bear');

console.log(replaced);
