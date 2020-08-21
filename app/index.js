import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Component: 
// State
// Lifecycle
// UI

function isLoading(){
      return true;
}

function isAuthed(){
      return true;
}

function isNew(){
      return true;
}

function showWarning(){
      return true;
}

 class App extends React.Component {
      render(){

            const name = 'Andres';

            const authed = isAuthed();
            const firstLogin = isNew();
            const showWarningNow = showWarning();


            // Introduction

            // if (isLoading() === true){
            //       return null // dont return any UI according to this if statement and function
            // }



            // JavaScript Conditional Rendering

            // if (firstLogin === true){
            //       return <h1>Welcome !</h1>
            // } else if (authed === true){
            //       return <h1>Welcome back!</h1>
            // }else{
            //       return <h1>Login to see your dashboard!</h1>
            // }
            

            // Realistically you use JavaScript ternaries to render in JSX.

            return (
                  // Every time you use JSX, React uses the React.createElement(). This means that JSX takes HTML looking code into React create Element. This is done with Babel. Takes JSX and turns it into vanilla react code. 

                  // JSX

                  // Whenever you want to use an expression (something that produces a value) in JSX, you need to wrap the expression in single curly braces, {}.

                  // <div>
                  //       <h1>Hello {name}</h1>
                  //       <p> Today is { new Date().toLocaleString()}</p>
                  //       <p>What is 2 + 2? { 2 + 2}</p>
                  // </div>


                  // Render JSX with JS ternary
                  // <div>
                  //       <h1>👀</h1>
                  //       {authed === true ? <h1>Welcome back!</h1> : <h1>Login to see your dashboard!</h1>}
                  //       {/* {showWarningNow === true ? <p>Oh oh!</p> : null} */}
                  //       {/* Another way to do this if rendered null */}
                  //       {showWarningNow === true && <p>Oh oh!</p>}
                  // </div>

                  // Avoid creating an extra div in 2 ways: React.Fragment or use <> </>

                  // <>
                  //       <h1>👀</h1>
                  //       {authed === true ? <h1>Welcome back!</h1> : <h1>Login to see your dashboard!</h1>}
                  //       {/* {showWarningNow === true ? <p>Oh oh!</p> : null} */}
                  //       {/* Another way to do this if rendered null */}
                  //       {showWarningNow === true && <p>Oh oh!</p>}
                  // </>

                  <React.Fragment>
                        <h1>👀</h1>
                        {authed === true ? <h1>Welcome back!</h1> : <h1>Login to see your dashboard!</h1>}
                        {/* {showWarningNow === true ? <p>Oh oh!</p> : null} */}
                        {/* Another way to do this if rendered null */}
                        {showWarningNow === true && <p>Oh oh!</p>}
                  </React.Fragment>

            )
      }
 }

 ReactDOM.render(
       // React Element
       // Where to render the element to. 
       <App />, // gets converted from JSX to vanilla React js
       document.getElementById('app')
 )