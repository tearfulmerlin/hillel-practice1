import React from 'react'

const newProduct = () => ({
  imgSrc: 'https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2Ftekhas-300dpi-min.webp&w=640&q=75',
  title: 'Піца Техас' + new Date().getMilliseconds(),
  ingredients: [
    'Кукурудза', 'Ковбаски баварські',
    'Соус Барбекю', 'Моцарела',
    'Гриби', 'Цибуля',
  ],
  sizes: ['стандарт', 'велика', 'екстравелика'],
  doe: ['пухке', ' тонке'],
  bort: ['філадельфія', 'хот-дог'],
  price: 231,
});

export default function NewProduct({ addProduct }) {
  return (
    <button onClick={() => addProduct(newProduct())}>add new one</button>
  )
}
