import { useContext, useState } from 'react';
import './App.css';
import Card from 'components/card';
import List from 'components/list';
import NewProduct from 'components/new-product/new-product';
import withTitle, { withData } from './hocs';
import usePizzaData from 'hooks/usePizzaData';
import { CartContext } from './context';


function App() {
  const WithTitle = withTitle(NewProduct, 'New product')
  const ListWithData = withData(List, Card, usePizzaData);

  const [cart, setCart] = useState(
    [
      {
        name: 'texas',
        price: '150',
      }
    ]
  );

  const addToCart = (item) => {
    setCart((prevState) => [...prevState, item]);
  }



  return (
    <>
      <Router.Provider>
        <div>Items in the cart: {cart.length}</div>
        <WithTitle addProduct={() => {}} />
        <CartContext.Provider value={{ cart, addToCart }}>
          <OtherContext.Provider value={{ cart, addToCart }}>
            <div className='container pizzas'>
              <ListWithData />
            </div>
          </OtherContext.Provider>
        </CartContext.Provider>
      </Router.Provider>
    </>
  )
}

export default App;
