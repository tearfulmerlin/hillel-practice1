import React from 'react'
import Image from '../image';
import Title from '../title';
import Ingredients from '../ingredients';
import './card.css';

export default function Card({
  data: {
    imgSrc,
    title,
    ingredients,
    sizes,
    doe,
    bort,
    price,
  }
}) {
  return (
    <div className='card'>
      <Image src={imgSrc} alt={title} className="pizza-img" />
      <Title text={title} />
      <Ingredients  data={ingredients} />
      {/* <Size />
      <Doe />
      <Bort />
      <Price/>
      <Button text="В кошик"/> 
      */}
    </div>
  )
}
