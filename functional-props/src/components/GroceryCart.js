import React, { Component } from 'react'

class GroceryCart extends Component{
  render(){
    return(
      <React.Fragment>
        <h3>Grocery Cart</h3>
        <ul>
          { this.props.cart.map((item, index) => {
            return (
              <li key={ index }>{ item }</li>
            )
          })}
        </ul>
      </React.Fragment>
    )
  }
}
export default GroceryCart
