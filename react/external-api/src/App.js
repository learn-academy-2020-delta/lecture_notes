import React, { Component } from 'react'
// import nasa from './nasaData.js'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      nasaData: null,
      marsPic: null
    }
  }

  componentDidMount(){
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
    .then(response => {
      if(response.status === 200){
        return response.json()
      }
    })
    .then(payload => {
      this.setState({ nasaData: payload.photos })
    })
    .catch(error => {
      console.log(error)
    })
  }

  getPic = () => {
    let randomNum = Math.floor(Math.random() * this.state.nasaData.length)
    console.log(randomNum)
    this.setState({ marsPic: this.state.nasaData[randomNum].img_src })
  }

  render(){
    return(
      <React.Fragment>
        <h1>Mars Pics</h1>
        <button onClick={ this.getPic }>See a Pic of Mars</button>
        <br />
        {
          this.state.marsPic &&
          <img
            src={ this.state.marsPic }
            alt="pictures of mars"
            style={{ height: "200px" }}
          />
        }
      </React.Fragment>
    )
  }
}
export default App
