import React from 'react';

class Hello extends React.Component {
  render(){
    return (

      // render some data based on props and ternary operator
      <h2>
        { this.props.header} {this.props.username}

        { this.props.authed === true ? <button onClick={this.props.logout}>Logout</button> : null }

      </h2>
    )
  }
}

export default Hello; // export it to be used