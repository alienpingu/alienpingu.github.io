import React, { Component } from 'react';

const List = props => (
  <ul className='list fl w-100 b--navy'>
    {
      props.items.map((item, index) => <li className=' f3 ttc courier bg-lightest-blue bw1 b--navy' key={index}>{item}</li>)
    }
  </ul>
);

export default List;