import "./BeerCard.scss";

type BeerCardsProps = {
  image: string; //image_url
  name: string;
  description: string; // description
  abv: number; // abv
  ph: number; // ph
}

const BeerCards = ({ image, name, description, abv, ph }: BeerCardsProps) => {
  return (

    <div className="beer-card">
      <div className="beer-card__content"></div>
      <img src={image} alt={name} />
      <p className="beer-card__name">{name}</p>
      <p className="beer-card__description">{description}</p>
      <p className="beer-card__abv">{abv}</p>
      <p className="beer-card__ph">{ph}</p>
    </div>

  );
}

export default BeerCards

