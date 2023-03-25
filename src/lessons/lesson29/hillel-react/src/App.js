import { useState, useEffect, useCallback } from 'react';
import './App.css';
import Card from 'components/card';
import NewProduct from 'components/new-product/new-product';
// import { apiProducts } from './pizzas-api-data';
import { useOnlineStatus } from 'hooks/useOnlineStatus';

let renderCount = 0;

function App() {
  const [products, setProducts] = useState([]);
  const [counter2, setCounter2] = useState(0);
  
  const addProduct = useCallback((data) => {
    // passing callback to setState to avoid state butching
    setProducts((state) => [
      ...state,
      data
    ]);
   
    // setProducts((state) => [
    //   ...state,
    //   data
    // ]);

    // state butching
    setCounter2(1);
    console.log(counter2)
    setCounter2(2);
    console.log(counter2)
  }, [counter2, setProducts]);

    
  // alternative way to set products without callback
  // const addProduct = useCallback((data) => {
  //   setProducts([
  //     ...products,
  //     data,
  //   ]);
  //   setProducts([
  //     ...products,
  //     data,
  //   ]);
  // }, [products, setProducts])

  useEffect(() => {
    setTimeout(async () => {
      const data = await fetch('http://localhost:3000/products');
      const parsed = await data.json();

      console.log({data, parsed});
      setProducts(parsed)
      // setProducts(apiProducts)
    }, 1000)
  }, []);

  console.log(renderCount++)

  return (
    <>
      <button onClick={() => setCounter2(counter2 + 1)}>click</button>
      <NewProduct addProduct={addProduct} />
      <div className='container pizzas'>
        {products.map((item) => <Card key={item.title} data={item} />)}
      </div>
    </>
  )
  // const online = useOnlineStatus();

  // return online ? (
  //   <>
  //     <button onClick={() => setCounter2(counter2 + 1)}>click</button>
  //     <NewProduct addProduct={addProduct} />
  //     <div className='container pizzas'>
  //       {products.map((item) => <Card key={item.title} data={item} />)}
  //     </div>
  //   </>
  // ) : (<h1>You're offline</h1>)
}

export default App;
