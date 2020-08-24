import React from 'react';

export default class Popular extends React.Component {
  render(){

    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
      <ul className='flex-center'>
        { languages.map( language => (
          <li key={language}>  {/* key here is the way React can keep track of what items in the list chaged (performance issue) */}
            <button className='btn-clear nav-link'>{ language }</button>
          </li>
        ))}
      </ul>
    )
  }
}