import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Components
import Popular from './components/popular';

// Component: 
// State
// Lifecycle
// UI

 class App extends React.Component {
      render(){
            return (
                  <div className='container'>
                        <Popular />
                  </div>
            )
      }
 }

 ReactDOM.render(
       // React Element
       // Where to render the element to. 
       <App />, // gets converted from JSX to vanilla React js
       document.getElementById('app')
 )