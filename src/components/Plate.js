import React, { Component } from "react";
import './Plate.css'


export default class Plate extends Component {
  
  eat = () => {
    console.log("hello from the eat fn", this.props.food.id)
    this.props.eatMeal(this.props.food.id)
  }
  
  
   state = {
     //this is place where we store userinput 
   }
  render() {
    console.log("Render of Plate component", this.props);

    
    
    return (
    
      <div className="outer-circle">
        <div className="inner-circle" onClick={this.eat} >
            {this.props.food.name}
        </div>
      </div>
    );
  }
}
