import React, { Component } from 'react'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      items: ["Apples", "Oatmeal", "Cheese", "Ice cream", "Juice", "Peanut butter"],
      cart: []
    }
  }

  addItem = (currentItem) => {
    const { cart } = this.state
    this.setState({ cart: [...cart, currentItem] })
  }

  render(){
    return(
      <React.Fragment>
          <h1>Grocery App</h1>
          <h3>Grocery Items</h3>
          <ul>
            { this.state.items.map((item, index) => {
              return (
                <div key={ index }>
                  <li>{ item }</li>
                  <button onClick={ () => { this.addItem(item) } }>Add Item</button>
                </div>
              )
            })}
          </ul>
          <h3>Grocery Cart</h3>
          <ul>
            { this.state.cart.map((item, index) => {
              return (
                <li key={ index }>{ item }</li>
              )
            })}
          </ul>
      </React.Fragment>
    )
  }
}
export default App
