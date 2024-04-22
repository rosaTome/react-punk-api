import "./BeerCard.scss";

type BeerCardProps = {
  image: string; 
  name: string;
  description: string; 
  abv: number; 
  ph: number; 
}

const BeerCard = ({ image, name, description, abv, ph }: BeerCardProps) => {
  return (

    <div className="beer-card">
      <div className="beer-card__content"></div>
      <img src={image} alt={name} />
      <h2 className="beer-card__name">{name}</h2>
      <p className="beer-card__description">{description}</p>
      <p className="beer-card__abv">{abv}</p>
      <p className="beer-card__ph">{ph}</p>
    </div>

  );
}

export default BeerCard;