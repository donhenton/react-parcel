import React from "react";
import { render }
from "react-dom";
import postal from "postal";
import Sub from './sub';
class App extends React.Component {
//publisher
  handleClick(e) {
    var newQuantity = Math.floor(Math.random() * 100) + 1;
    postal.publish({
      channel: "carts",
      topic: "item.add",
      data: {
        quantity: newQuantity
      }
    });
  }
  render() {
    return (
          <div>
              <h2> I am the publishing component </h2> 
              <button onClick={e => this.handleClick(e)}> Click me </button> 
          
              <hr/>
              <Sub/>
          </div>

          );
  }
}
export default App;