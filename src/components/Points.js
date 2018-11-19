import React from 'react';

const Points = ({ changeFilter }) => (
  <button className="btn btn-primary points" onClick={(e) => changeFilter(e.target.name)} name="points">Points</button>
);

export default Points;
