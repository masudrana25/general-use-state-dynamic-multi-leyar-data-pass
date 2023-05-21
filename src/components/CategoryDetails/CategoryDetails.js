import React from 'react';
import './CategoryDetails.css'

const CategoryDetails = (props) => {
  const {count} = props;
  return (
    <div>
      <h6>This is Category Details Section , Count : {count}</h6>
    </div>
  );
};

export default CategoryDetails;