import React from 'react';

const Age = ({ changeFilter }) => (
  <button className="btn btn-primary age" name="age" onClick={(e) => changeFilter(e.target.name)} >Age</button>
);

export default Age;
