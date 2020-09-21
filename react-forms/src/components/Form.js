import React, { Component } from 'react'

class Form extends Component{
  constructor(props){
    super(props)
    this.state = {
      form: {
        firstName: "",
        lastName: "",
        age: ""
      }
    }
  }

  handleChange = (event) => {
    // console.log(e.target.name)
    const { form } = this.state
    form[event.target.name] = event.target.value
    this.setState({ form: form })
  }

  handleSubmit = (e) => {
    console.log(e)
    e.preventDefault()
    console.log("clicked!")
    this.props.handleFormSubmit(this.state.form)
  }

  render(){
    // console.log(this.state.form)
    return(
      <React.Fragment>
        <h3>Form!</h3>
        <form>
          <label>Enter your first name:</label>
          <input
            name="firstName"
            type="text"
            value={ this.state.form.firstName }
            onChange={ this.handleChange }
          />
          <br />
          <label>Enter your last name:</label>
          <input
            name="lastName"
            type="text"
            value={ this.state.form.lastName }
            onChange={ this.handleChange }
          />
          <br />
          <label>Enter your age:</label>
          <input
            name="age"
            type="text"
            value={ this.state.form.age }
            onChange={ this.handleChange }
          />
          <br />
          <input
            type="submit"
            value="Enter Form"
            onClick={ this.handleSubmit }
          />
        </form>
      </React.Fragment>
    )
  }
}
export default Form
