import React, { Component } from 'react'

class GroceryItems extends Component{
  render(){
    return(
      <React.Fragment>
        <h3>Grocery Items</h3>
        <ul>
          { this.props.items.map((item, index) => {
            return (
              <div key={ index }>
                <li>{ item }</li>
                <button onClick={ () => { this.props.addItem(item) } }>Add Item</button>
              </div>
            )
          })}
        </ul>
      </React.Fragment>
    )
  }
}
export default GroceryItems
