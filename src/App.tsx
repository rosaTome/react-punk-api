import BeerCards from "./components/BeerCards/BeerCards"
import { Beer } from "./types/Beer"

import beers from "./data/beers"

const App = () => {

    const AllBeers: Beer[] = beers;

  return (
    <div className="app">
        <h1>Beer o'clock</h1>
        <BeerCards information={AllBeers}/>
    </div>
  )
}

export default App

