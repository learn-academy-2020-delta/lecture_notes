# External API Example

- Nasa - App.js
- IP Address example
```javascript
import React, { Component } from 'react'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      ip: ""
    }
  }

  getIP = () => {
    fetch("https://ipapi.co/json/")
    .then(response => {
      if(response.status === 200){
        return response.json()
      }
    })
    .then(payload => {
      this.setState({ ip: payload.ip })
    })
    .catch(error => {
      console.log(error)
    })
  }

  render(){
    console.log(this.state.ip)
    return(
      <React.Fragment>
        <h1>IP Info</h1>
        <button onClick={ this.getIP }>Get Your IP Address</button>
        <p>Your IP: { this.state.ip }</p>
      </React.Fragment>
    )
  }
}
export default App
```
