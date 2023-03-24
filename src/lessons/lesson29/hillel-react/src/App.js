import { useState } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import PlanetConainer from './pages/planets/planet-conainer';

function App() {
  const [data, setData] = useState(0);
  
  return (
    <div className="App">
      <Header data={data} setCount={setData}/>
      <Content>
        <PlanetConainer />
      </Content>
      

      <Footer data={data} setCount={setData} />
    </div>
  );
}

export default App;
