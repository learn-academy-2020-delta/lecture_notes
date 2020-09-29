import React, { Component } from 'react'
import Form from './components/Form'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      form: null
    }
  }

  handleFormSubmit = (newForm) => {
    // console.log(newForm)
    this.setState({ form: newForm })
  }

  render(){
    console.log(this.state.form)
    return(
      <React.Fragment>
        <h1>React Forms</h1>
        <Form handleFormSubmit={ this.handleFormSubmit }/>

        { this.state.form &&
          <div>
            My name is { this.state.form.firstName }
          </div>
        }
        
      </React.Fragment>
    )
  }
}
export default App
