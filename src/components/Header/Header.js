import React from 'react';

const Header = (props) => {
  const {count, setCount} = props;
  return (
    <div>
      <h1>This is Header</h1>
      <h2>Header Count : {count}</h2>
      <button onClick={() => setCount(count + 1)}> <h2> increase </h2></button>
    </div>
  );
};

export default Header;