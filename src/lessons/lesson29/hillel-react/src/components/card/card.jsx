import React, { useContext, useState } from 'react';
import Image from '../image';
import Title from '../title';
import Ingredients from '../ingredients';
import './card.css';
// import { CartContext as CartCont } from 'context';
import { useDispatch } from 'react-redux';
import { add, remove } from '../../store/cartSlice';
import { Link } from 'react-router-dom';


export default function Card({
  data
}) {

const {
    id,
    imgSrc,
    title,
    ingredients,
    sizes,
    doe,
    bort,
    price = 150,
    colors,
    defaultColor
} = data;
const dispatch = useDispatch();

  return (
    <div className='card'>

      <Link to={`/pizza/${id}`}>
        <Image src={imgSrc} alt={title} className="pizza-img" />
      </Link>
      <Title text={title} />
      <Ingredients  data={ingredients} />
      {/* <Colors colors={props.colors} setSelected={setColor}/> */}
      {/* <Size />
      <Doe />
      <Bort />
      <Price/>
      <Button text="В кошик"/> 
    */}
    <button onClick={() => dispatch(add({ payload: data }))}> add to cart </button>
    <button onClick={() => dispatch(remove({ payload: data }))}> remove from cart </button>
    </div>
  )
}
