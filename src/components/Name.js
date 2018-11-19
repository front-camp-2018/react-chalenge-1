import React from 'react';

const Name = ({ changeFilter }) => (
  <button className="btn btn-primary name" onClick={(e) => changeFilter(e.target.name)} name="name">Name</button>
);

export default Name;
