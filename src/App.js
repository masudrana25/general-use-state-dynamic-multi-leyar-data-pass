import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipping from './components/Shipping/Shipping';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2> App.js Count : {count}</h2>
      <Header count={count} setCount={setCount}></Header>
      <Home count={count}></Home>
      <Shipping count={count}></Shipping>
    </div>
  );
}

export default App;
