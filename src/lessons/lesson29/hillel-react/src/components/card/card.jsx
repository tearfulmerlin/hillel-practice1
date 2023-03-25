import React from 'react';
import Image from '../image';
import Title from '../title';
import Ingredients from '../ingredients';
import './card.css';
import { useOnlineStatus } from 'hooks/useOnlineStatus';
import useCounter from 'hooks/useCounter';
import OrderForm from 'components/order-form/order-form';

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
  const online = useOnlineStatus();
  const { count, setCount } = useCounter(online);

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
    <button text="В кошик" disabled={!online}>{online ? 'В кошик' : 'Відсутній інтернет'}</button>
    <button  onClick={() => setCount(count + 1)} disabled={!online}>{'Збільшити'}</button>
    <div>{count}</div>
    <OrderForm />
    </div>
  )
}
