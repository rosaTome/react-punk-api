import { FormEvent, useState } from "react";
import SearchBox from "../../components/SearchBox/SearchBox";
import Beer from "../../types/Beer";

import BeerContainer from "../BeerContainer/BeerContainer";

type ExploreBeersContainerProps = {
    beers: Beer[];
}

const ExploreBeersContainer = ({ beers }: ExploreBeersContainerProps ) => {
    const [searchTerm, setSearchTerm] = useState<string>("");
  
    const handleInput = (event: FormEvent<HTMLInputElement>) => {
      const cleanInput = event.currentTarget.value.toLowerCase();
      setSearchTerm(cleanInput);
    };
  
    const filteredBeers = beers.filter((beer) =>
      beer.name.toLowerCase().includes(searchTerm)
    );
  
    return (
      <>
        <SearchBox
          label="Search Beers"
          handleInput={handleInput}
          searchTerm={searchTerm}
        />

        <BeerContainer
          heading="Results" 
          beerCards={filteredBeers}
        />

      </>
    );
  };
  
  export default ExploreBeersContainer;

