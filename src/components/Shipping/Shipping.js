import React from 'react';

const Shipping = (props) => {
   const count = props.count;
  return (
    <div>
      <h1>This is Shipping</h1>
      <h2> Home Count : {count}</h2>
    </div>
  );
};

export default Shipping;