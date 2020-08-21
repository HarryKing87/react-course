import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Component: 
// State
// Lifecycle
// UI

 class App extends React.Component {
      render(){
            return (
                  <div>Hello World!</div> // Every time you use JSX, React uses the React.createElement(). This means that JSX takes HTML looking code into React create Element. This is done with Babel. Takes JSX and turns it into vanilla react code. 
            )
      }
 }

 ReactDOM.render(
       // React Element
       // Where to render the element to. 
       <App />, // gets converted from JSX to vanilla React js
       document.getElementById('app')
 )