import React from 'react';

const users = (props) => {
  return (props.usersData.sort((a, b) => {
    switch (props.sortBy) {
      case 'points':
        return b.points - a.points;
      case 'age':
        return a.age - b.age;
      case 'name':
        return b.name > a.name ? -1 : 1;
      case 'rank':
        return a.rank - b.rank;
      default:
        return 1;
    }
  }).map((user, index) => {
    return (<tr key={index}>
      <td>{user.age}</td>
      <td>{user.name}</td>
      <td>{user.points}</td>
      <td>{user.rank}</td>
    </tr>)
  }));
}

export default users;