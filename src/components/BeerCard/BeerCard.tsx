import "./BeerCard.scss";

type BeerCardProps = {
  image: string; 
  name: string;
  first_brewed: string;
  description: string; 
  abv: number; 
  ph: number; 
}

const BeerCard = ({ image, name, first_brewed, description, abv, ph }: BeerCardProps) => {
  return (

    <div className="beer-card">
      <div className="beer-card__content"></div>
      <img src={image} alt={name} />
      <h2 className="beer-card__name">Name: {name}</h2>
      <p className="beer-card__first_brewed">First brewed: {first_brewed}</p>
      <p className="beer-card__description">{description}</p>
      <p className="beer-card__abv">ABV: {abv}</p>
      <p className="beer-card__ph">PH: {ph}</p>
    </div>

  );
}

export default BeerCard;