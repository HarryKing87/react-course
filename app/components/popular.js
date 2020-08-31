import React from 'react';

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

  }

  updateLanguage(selectedLanguage){
    this.setState({
      selectedLanguage: selectedLanguage
    })
  }

  render(){

    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
      <ul className='flex-center'>
        { languages.map( language => (
          <li key={language}>  {/* key here is the way React can keep track of what items in the list chaged (performance issue) */}
            <button 
            className='btn-clear nav-link' 
            onClick={() => this.updateLanguage(language) /* you can pass arrow function instead of binding, With arrow functions the this keyword always represents the object that defined the arrow function. Not always recommended */ }
            style={language === this.state.selectedLanguage ? {color: 'rgb(187,46,31)'} : null}
            >
            { language }</button>
            {/* every button will now have a onclick method that depends on the language */}
            {/* when on click calls update languaghe, it will call setState and update the current state of the componennt which will re-render everything */}
          </li>
        ))}
      </ul>
    )
  }
}