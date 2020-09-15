import React, { Component } from 'react'
import GroceryCart from './components/GroceryCart'
import GroceryItems from './components/GroceryItems'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      items: ["Apples", "Oatmeal", "Cheese", "Ice cream", "Juice", "Peanut butter", "Chocolate"],
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
        <GroceryItems
          items={ this.state.items }
          addItem={ this.addItem }
        />
        <GroceryCart cart={ this.state.cart } />
      </React.Fragment>
    )
  }
}
export default App
