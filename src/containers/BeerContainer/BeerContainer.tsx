import { Beer } from "../../types/Beer";
import BeerCard from "../../components/BeerCard/BeerCard";
import "./BeerContainer.scss";

type BeerContainerProps = {
    heading?: string;
    beerCards: Beer[];
}

const BeerContainer = ({ beerCards }: BeerContainerProps) => {

    return (
        <div className="beer-container">
            {beerCards.map((beerCard) => 
                <BeerCard 
                    key={beerCard.id}
                    image={beerCard.image_url}
                    name={beerCard.name}
                    description={beerCard.description}
                    abv={beerCard.abv}
                    ph={beerCard.ph}
                />
            )}

        </div>
    );
};

export default BeerContainer;