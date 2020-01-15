import React from "react";
import './css/index.css';
import GameCard from "./components/GameCard";
import Header from "./components/Header";

class Main extends React.Component{

  render(){
    return(
      <div>
        <Header />
        <div className="container">
          <GameCard />
        </div>
      </div>
      
      
    );
  }

}

export default Main;
