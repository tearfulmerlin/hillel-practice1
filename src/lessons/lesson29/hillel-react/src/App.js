import { useState, useEffect } from 'react';
import './App.css';
import Card from 'components/card';

const apiProducts = [
  {
    imgSrc: 'https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2Ftekhas-300dpi-min.webp&w=640&q=75',
    title: 'Піца Техас',
    ingredients: [
      'Кукурудза', 'Ковбаски баварські',
      'Соус Барбекю', 'Моцарела',
      'Гриби', 'Цибуля',
    ],
    sizes: ['стандарт', 'велика', 'екстравелика'],
    doe: ['пухке', ' тонке'],
    bort: ['філадельфія', 'хот-дог'],
    price: 231,
  },
]

function App() {
  const [products, setProducts] = useState([]);

  console.log(products);
  useEffect(() => {
    setTimeout(() => {
      setProducts(apiProducts)
    }, 2000)
  }, []);


  return products.map((item) => <Card key={item.title} data={item} />)
}

export default App;
