import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Components
import Hello from './Hello'; // importing components Hello

// Component: 
// State
// Lifecycle
// UI

 class App extends React.Component {
      render(){
            return (
                  // Passing Props/data
                  <Hello 
                        username='anndresvidoza' // string
                        authed={ true } // boolean
                        logout={ () => alert('logged Out') } // function
                        header={ <h1>Welcome !</h1>} // HTML 
                  />
            )
      }
 }

 ReactDOM.render(
       // React Element
       // Where to render the element to. 
       <App />, // gets converted from JSX to vanilla React js
       document.getElementById('app')
 )