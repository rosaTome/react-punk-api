import "./NavContainer.scss"
import ExploreBeersContainer from "../ExploreBeersContainer/ExploreBeersContainer"
import beers from "../../data/beers";


type NavContainerProps = {

}

const NavContainer = ({}: NavContainerProps) => {

    return (
        <nav className="nav-container">

            <div>
                {/* SearchBox */}
                <p>Search Box:</p>


                {/* <ExploreBeersContainer 
                beers={beers} /> */}

            </div>


            {/* FiltersList */}
            <p>Filters</p>

        </nav>
    )
}

export default NavContainer;
