import { useState, useEffect } from 'react';
import store from './store/store'
import { Provider, useSelector } from 'react-redux';
import './App.css';
import Card from 'components/card';
import { apiProducts } from './pizzas-api-data';
import Cart from 'components/cart';

function App() {
  const [products, setProducts] = useState([]);
    

  useEffect(() => {
    setTimeout(async () => {

      setProducts(apiProducts)
    }, 1000)
  }, []);

  return (
    <Provider store={store}>
      <Cart />
      <div className='container pizzas'>
        {products.map((item) => <Card key={item.title} data={item} />)}
      </div>
    </Provider>
  )
}

export default App;
