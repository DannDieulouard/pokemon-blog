import {useState} from "react";

const PokemonFinder = () => {
    const [pokemon, setPokemon] = useState(null);

      const handleSubmit = (event) => {
      event.preventDefault();
      
      const pokemonToSearch = event.target.searchPokemon.value;

      fetch("https://pokebuildapi.fr/api/v1/pokemon/" + pokemonToSearch)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
           setPokemon(data);
      });
    };

console.log(pokemon);

    return (
      <section>
        <h1>Recherchez votre pokemon !</h1>
      <form onSubmit={handleSubmit}>
      <label></label>
      <input type="text" name="searchPokemon" />
      <input type="submit" />
    </form>
    {      
             !pokemon ? <p>Waiting for your input</p> :   
             <article>
                <h2>{pokemon.name}</h2>
                <img src = {pokemon.image} alt=""/>
                <p>{pokemon.apiTypes[(pokemon.apiTypes.length)-1].name}</p>
                <p>HP: {pokemon.stats.HP}</p>
                <p>defense: {pokemon.stats.attack}</p>
                <p>special attack: {pokemon.stats.defense}</p>
                <p>special attack: {pokemon.stats.special_attack}</p>
                <p>special defense: {pokemon.stats.special_defense}</p>
                <p>speed: {pokemon.stats.speed}</p>
             </article>                  
            }   
      </section>
    );
};

export default PokemonFinder;