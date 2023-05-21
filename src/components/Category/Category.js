import React from 'react';
import CategoryDetails from '../CategoryDetails/CategoryDetails';

const Category = (props) => {
  const {count} = props;
  return (
    <div>
      <h3>This is Category Details Section</h3>
      <CategoryDetails count={count}></CategoryDetails>
    </div>
  );
};

export default Category;