import React, { useState, useId, useRef } from 'react';
import useInputState from './hooks/useInputState';

export default function OrderForm() {
  // const [quantity, setQuantity] = useState();

  // const quantityHandler = (event) => {
  //   console.log(event.target.value)
  //   setQuantity(+event.target.value);
  // }

  // const {value: quantity, onChange: quantityHandler } = useInputState(1);
  // const {value: additions, onChange: additionsHandler2 } = useInputState(0);

  const pizzasRef = useRef(null);
  const additionsRef = useRef(null);
  const counterRef = useRef(0);
  console.log({counterRef})


  const submitHandler = async (event) => {
    event.preventDefault();


    console.log({
      additionsRef: additionsRef.current.value,
      pizzasRef: pizzasRef.current.value,
      counterRef: counterRef.current,
    })
    try {
      await fetch('http://localhost:3000/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: new Date(),
          quantity: pizzasRef.current.value,
          additions: additionsRef.current.value,
        })
      });
    } catch (e) {
      console.log(e);
    }
    // alert(`your order contains ${quantity} pizzas and ${additions} additions`);
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder='quatity of pizzas'
        // onChange={quantityHandler}
        // value={quantity}
        ref={pizzasRef}
      />
      <input
        type="text"
        placeholder='quatity of pizzas'
        // onChange={additionsHandler2}
        // value={additions}
        ref={additionsRef}
      />

      <div>quantity of pizzas: {pizzasRef?.current?.value}</div>
      <div>quantity of additions: {additionsRef?.current?.value}</div>
      <button type="submit">submit</button>
      <button type="button" onClick={() => counterRef.current ? counterRef.current += 1 : 1}>+1</button>
    </form>
  )
}
