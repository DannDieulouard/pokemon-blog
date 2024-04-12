import { Link, useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const pokemonSearch = event.target.addPokemon.value;
    
        navigate("/search/" + pokemonSearch);
      };



    return (
        <header>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png" alt="logo" />
                <h1>Welcome to Pokebuild</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/pokemon-random-team">Create Random Team</Link></li>
                    
                 </ul>
                 <form onSubmit={handleSubmit}>
        <label>Découvrez si votre pokémon existe</label>
        <input type="text" name="addPokemon" />
        <input type="submit" />
        </form>
        </header>
    )
}

export default Header;