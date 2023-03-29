import React, { useContext, useState } from 'react';
import Image from '../image';
import Title from '../title';
import Ingredients from '../ingredients';
import './card.css';
import { CartContext as CartCont } from 'context';

export default function Card({
  data: {
    imgSrc,
    title,
    ingredients,
    sizes,
    doe,
    bort,
    price = 150,
    colors,
    defaultColor
  }
}) {
  const [color, setColor] = useState(defaultColor || colors?.[0]);

  const { cart, addToCart } = useContext(CartCont);

  return (
    <div className='card'>
      <span>cart {cart.length}</span>
      <Image src={imgSrc} alt={title} className="pizza-img" />
      <Title text={title} />
      <Ingredients  data={ingredients} />
      {/* <Colors colors={props.colors} setSelected={setColor}/> */}
      {
        colors.map(
          ({id, value = '#0000FF', title = 'blue'}) => <span key={id} onClick={() => setColor(id)}>{title}<span/>
        )
      }
      {/* <Size />
      <Doe />
      <Bort />
      <Price/>
      <Button text="В кошик"/> 
    */}
    <button onClick={() => addToCart({title, price, color})}>В кошик</button>
    </div>
  )
}
