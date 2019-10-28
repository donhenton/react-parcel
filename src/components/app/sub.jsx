import React from "react";
import { render } from "react-dom";
import postal from "postal";

class Sub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomValue: 0
    };
  }
  componentDidMount() {
    var subscription = postal.subscribe({
      channel: "carts",
      topic: "item.add",
      callback: this.handleStorageChange.bind(this)
    });

    console.log("Subscribing as, ", subscription);
  }
  handleStorageChange(data, env) {
    console.log("Data", data);
    console.log("Env", env);
    this.setState({
      randomValue: data.quantity
    });
  }
  render() {
    return (
          <div>
              <h2> I am the subscribing component </h2> 
              <span>
                  I received this value from publisher::{
                    this.state.randomValue ? this.state.randomValue : ''
                  } 
              </span> 
          </div>
          );
  }
}

export default Sub;