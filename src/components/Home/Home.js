import React from 'react';
import Category from '../Category/Category';
import './Home.css'

const Home = (props) => {
  const count = props.count;
  return (
    <div className='home'>
      <h1>This is Home</h1>
      <h2> Home Count : {count}</h2>
      <Category count ={count}></Category>
    </div>
  );
};

export default Home;