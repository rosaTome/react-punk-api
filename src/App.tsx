import BeerContainer from "./containers/BeerContainer/BeerContainer";
import beers from "./data/beers";
import "./App.scss"
import NavContainer from "./containers/NavContainer/NavContainer";
import { FormEvent, useState } from "react";
import SearchBox from "./components/SearchBox/SearchBox";
import "./components/SearchBox/SearchBox.scss"

const App = () => {

  const [searchTerm, setSearchTerm] = useState<string>("");
  
    const handleInput = (event: FormEvent<HTMLInputElement>) => {
      const cleanInput = event.currentTarget.value.toLowerCase();
      setSearchTerm(cleanInput);
    };
  
    const filteredBeers = beers.filter((beer) =>
      beer.name.toLowerCase().includes(searchTerm)
    );


  return (
    <div className="app">
      <nav>
      <SearchBox
        label="Search Beers"
        handleInput={handleInput}
        searchTerm={searchTerm}
        />

        <NavContainer
        />

        
      </nav>

      <BeerContainer 
      beerCards={filteredBeers} 
      />

    </div>

  )
}

export default App

