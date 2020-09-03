import React from 'react';
import PropTypes from 'prop-types'; // npm install prop-types

// Functional Component
function LanguagesNav( {selected, onUpdateLanguage} ){ // destructuring the props
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

  return(
    <ul className='flex-center'>
    { languages.map( language => (
      <li key={language}>  {/* key here is the way React can keep track of what items in the list chaged (performance issue) */}
        <button 
        className='btn-clear nav-link' 
        onClick={() => onUpdateLanguage(language) /* you can pass arrow function instead of binding, With arrow functions the this keyword always represents the object that defined the arrow function. Not always recommended */ }
        style={language === selected ? {color: 'rgb(187,46,31)'} : null}
        >
        { language }</button>
        {/* every button will now have a onclick method that depends on the language */}
        {/* when on click calls update languaghe, it will call setState and update the current state of the componennt which will re-render everything */}
      </li>
    ))}
    </ul>
  )

}

// Checking types with prop-types - powerfull because you know what type of props a specific component takes
LanguagesNav.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired
}

export default class Popular extends React.Component {

  constructor(props){

    // Props 
    // super();
    // console.log(this.props) //undefined

    // When you pass props to super, the props get assigned to this
    super(props);

    // Add state
    this.state = {
      selectedLanguage: 'All' // default
    }

    this.updateLanguage = this.updateLanguage.bind(this);

  }

  updateLanguage(selectedLanguage){
    this.setState({
      selectedLanguage: selectedLanguage
    })
  }

  render(){

    let { selectedLanguage } = this.state;

    return (
      <React.Fragment>
        <LanguagesNav 
          selected = {selectedLanguage}
          onUpdateLanguage = {this.updateLanguage}
        />
      </React.Fragment>
    )
  }
}