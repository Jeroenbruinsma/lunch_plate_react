import React from "react";
import "./App.css";
import Plate from "./components/Plate";

class App extends React.Component {
  state= {
    //menu: ["Spagetti", "ice cream", 'soup']
    menu: [{name: "Spagetti", status: "not eaten", id:"0"},
           {name: "ice cream", status: "not eaten", id:"1"},
           {name: "soup", status: "not eaten", id:"2"}]
  }

  eatMeal = (menuItemId) =>{
    console.log("fn eatMeal called",menuItemId)
    let newMenu = this.state.menu
    newMenu[menuItemId].name = 'Eaten'

    this.setState({
      menu: newMenu
    })
  }
  
  render() {
    console.log("render of App", this.state);
    
    return (
      <div className="App">
        {this.state.menu.map(meal => {
          return <Plate food={meal} key={meal.id} eatMeal={this.eatMeal}/>
        })}
      </div>
    );
  }
}
export default App;
