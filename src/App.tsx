import React from "react";
import BeerContainer from "./containers/BeerContainer/BeerContainer";
import beers from "./data/beers";

import "./App.scss"

const App = () => {



  return (
    <div className="app">
      <h1 className="app-heading">Beer O'clock</h1>
      <BeerContainer beerCards={beers} />

        
    </div>
  )
}

export default App

