import { useState, FormEvent, useEffect } from "react";
import BeerContainer from "./containers/BeerContainer/BeerContainer";
import "./App.scss"
import SearchBox from "./components/SearchBox/SearchBox";
import "./components/SearchBox/SearchBox.scss"
import FiltersList from "./components/FiltersList/FiltersList";
import Beer from "./types/Beer";
import Button from "./components/Button/Button";

const App = () => {

  const [beers, setBeers] = useState<Beer[]>([]);  
  
  const [filteredBeers, setFilteredBeers] = useState<Beer[]>([]);


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

  // const filteredBeers = beers.filter((beer) => {
  //   const matchesSearchTerm = beer.name.toLowerCase().includes(searchTerm);
  //   switch (selectedFilter) {
  //     case "Reset filters":
  //       return matchesSearchTerm;
  //     case "High ABV (ABV > 6.0%)":
  //       return matchesSearchTerm && beer.abv > 6.0;
  //     case "Classic Range (first brewed before 2010)":
  //       // Filter out beers brewed before 2010 for "Classic Range"
  //       const [, yearStr] = beer.first_brewed.split("/"); // Split by "/" and extract the year part
  //       const firstBrewedYear = parseInt(yearStr, 10); // Parse the year string to an integer
  //       return matchesSearchTerm && firstBrewedYear < 2010;
  //     case "High Acidity (PH < 4)":
  //       return matchesSearchTerm && beer.ph < 4.0;
  //     default:
  //       return matchesSearchTerm;
  //   }
  // });

  useEffect(() => {
    // Filter the beers based on the selected filter and search term - API
    const filtered = beers.filter((beer) => {
      const matchesSearchTerm = beer.name.toLowerCase().includes(searchTerm);
      switch (selectedFilter) {
        case "Reset filters":
          return matchesSearchTerm;
        case "High ABV (ABV > 6.0%)":
          return matchesSearchTerm && beer.abv > 6.0;
        case "Classic Range (first brewed before 2010)":
          const [, yearStr] = beer.first_brewed.split("/"); 
          const firstBrewedYear = parseInt(yearStr, 10); 
          return matchesSearchTerm && firstBrewedYear < 2010;
        case "High Acidity (PH < 4)":
          return matchesSearchTerm && beer.ph < 4.0;
        default:
          return matchesSearchTerm;
      }
    });
    setFilteredBeers(filtered);
  }, [beers, searchTerm, selectedFilter]);


  // API
  const getBeers = async () => {
    const baseUrl = 'http://localhost:3333/v2/beers';
    const perPage = 80;
    const totalPages = 5;
    const beers = [];

    for (let page = 1; page <= totalPages; page++) {
      const url = `${baseUrl}?page=${page}&per_page=${perPage}`;
      const res = await fetch(url);
      const data = await res.json();
      beers.push(...data)
    }
    setBeers(beers);
  }

  return (
    <div className="app">
      <nav>

        <Button 
        onClick={getBeers} 
        label="Get Random Beer"
        />


        <SearchBox
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

      </nav>

      <BeerContainer 
      beerCards={filteredBeers} 
      />

      {/* <BeerContainer 
      beerCards={filteredBeers} 
      /> */}

    </div>

  )
}

export default App

