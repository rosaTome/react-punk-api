import beers from "../../data/beers";
import BeerCard from "../../components/BeerCard/BeerCard";
import Carousel from "../../components/Carousel/Carousel";

type HomeProps = {
  };
  
  const Home = ({ }: HomeProps) => {

    const firstBeer = beers[0];
    const secondBeer = beers[1];
    const thirdBeer = beers[3];
    const fourthBeer = beers[4];
    const fifthBeer = beers[5];

    const galleryOfBeersImages = [
        secondBeer.image_url,
        thirdBeer.image_url,
        fourthBeer.image_url,
        fifthBeer.image_url
    ];    
  
    return (
      <div className="home">
    
        <section className="discover">
          <h2>Discover</h2> 
          <BeerCard
            image={firstBeer.image_url}
            name={firstBeer.name}
            first_brewed={firstBeer.first_brewed}
            description={firstBeer.description}
            abv={firstBeer.abv}
            ph={firstBeer.ph}
          />
        </section>

        <section className="gallery">
            <h2 className="gallery__heading">Gallery of Beers</h2>
            <Carousel images={galleryOfBeersImages} />
        </section>
  
      </div>
    );
  };
  
  export default Home;
  