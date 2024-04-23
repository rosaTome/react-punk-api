import BeerContainer from "./containers/BeerContainer/BeerContainer";
import beers from "./data/beers";
import "./App.scss"
import NavContainer from "./containers/NavContainer/NavContainer";

import ExploreBeersContainer from "./containers/ExploreBeersContainer/ExploreBeersContainer";

const App = () => {
  return (
    <div className="app">
      <h1 className="app-heading">Beer O'clock</h1>
      <NavContainer
      />

      <BeerContainer 
      beerCards={beers} 
      />


      <ExploreBeersContainer 
      beers={beers} />


    </div>


  )
}

export default App

