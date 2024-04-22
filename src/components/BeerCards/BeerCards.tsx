import { Beer, Hop, Malt } from "../../types/Beer";

import "./BeerCards.scss";

type BeerCardsProps = {
  information: Beer[];
}

const BeerCards = ({ information }: BeerCardsProps) => {



  return (

    <div className="beer-cards">
    {information.map((beer) => (
      <div key={beer.id} className="beer-id">
        <div className="beer-card__content">
          <img 
            className="beer-image" 
            src={beer.image_url}  
            alt={beer.name} />
          <p 
            className="beer-name">{beer.name}</p>
          <p 
            className="beer-tagline">{beer.tagline}</p>
          <p 
            className="beer-description">{beer.description}</p>
          <p 
            className="beer-abv">ABV: {beer.abv}%</p>
          <p 
            className="beer-ph">ph: {beer.ph}</p>

            <div className="malt-ingredients">
              <p>Malt:</p>
              <ul>
                {beer.ingredients.malt.map((malt: Malt, index: number) => (
                  <li key={index}>
                    {malt.name} - {malt.amount.value} {malt.amount.unit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="hop-ingredients">
              <p>Hops:</p>
              <ul>
                {beer.ingredients.hops.map((hop: Hop, index: number) => (
                  <li key={index}>
                    {hop.name} - {hop.amount.value} {hop.amount.unit} - {hop.add} ({hop.attribute})
                  </li>
                ))}
              </ul>
            </div>

            <p className="yeast">Yeast: {beer.ingredients.yeast}</p>

            <div className="food-pairing">
              <p>Food Pairing:</p>
              <ul>
                {beer.food_pairing.map((pairing, index) => (
                  <li key={index}>{pairing}</li>
                ))}
              </ul>
            </div>


          <div className="food-pairing">
            <p>Food Pairing:</p>
            <ul>
              {beer.food_pairing.map((pairing, index) => (
                <li key={index}>{pairing}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ))}
  </div>

  );
}

export default BeerCards

