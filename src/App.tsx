import {  useState, FormEvent } from "react";
import BeerContainer from "./containers/BeerContainer/BeerContainer";
import beers from "./data/beers";
import "./App.scss"
import NavContainer from "./containers/NavContainer/NavContainer";
import SearchBox from "./components/SearchBox/SearchBox";
import "./components/SearchBox/SearchBox.scss"
import FiltersList from "./components/FiltersList/FiltersList";

const App = () => {
  // SEARCHBOX  
  const [searchTerm, setSearchTerm] = useState<string>("");
  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const cleanInput = event.currentTarget.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  // FILTER 
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const applyFilter = (filter: string) => {
    setSelectedFilter(filter);
  };
  const filteredBeers = beers.filter((beer) => {
    const matchesSearchTerm = beer.name.toLowerCase().includes(searchTerm);
    switch (selectedFilter) {
      case "Reset filters":
        return matchesSearchTerm;
      case "High ABV (ABV > 6.0%)":
        return matchesSearchTerm && beer.abv > 6.0;
      case "Classic Range (first brewed before 2010)":
        // Filter out beers brewed before 2010 for "Classic Range"
        const [, yearStr] = beer.first_brewed.split("/"); // Split by "/" and extract the year part
        const firstBrewedYear = parseInt(yearStr, 10); // Parse the year string to an integer
        return matchesSearchTerm && firstBrewedYear < 2010;
      case "High Acidity (PH < 4)":
        return matchesSearchTerm && beer.ph < 4.0;
      default:
        return matchesSearchTerm;
    }
  });

  return (
    <div className="app">
      <nav>
        <SearchBox
          label="Search Beers:"
          handleInput={handleInput}
          searchTerm={searchTerm}
        />

        <FiltersList
          label="Filter Beers:"
          onChange={applyFilter}
          selected={selectedFilter}
          options={[
            "Reset filters",
            "High ABV (ABV > 6.0%)",
            "Classic Range (first brewed before 2010)", 
            "High Acidity (PH < 4)"
          ]}
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

