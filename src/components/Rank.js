import React from 'react';

const Rank = ({ changeFilter }) => (
  <button className="btn btn-primary rank" onClick={(e) => changeFilter(e.target.name)} name="rank">Rank</button>
);

export default Rank;
