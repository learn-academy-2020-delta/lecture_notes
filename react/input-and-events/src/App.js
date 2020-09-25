import React, { Component } from 'react'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      userName: ""
    }
  }

  handleChange = (e) => {
    // console.log(e.target.value)
    this.setState({ userName: e.target.value })
  }

  render(){
    console.log(this.state.userName)
    return(
      <React.Fragment>
        <h1>Greeter App </h1>
        <input
          type="text"
          value={ this.state.userName }
          onChange={ this.handleChange }
        />
        <p>Hello, { this.state.userName }</p>
      </React.Fragment>
    )
  }
}
export default App
