import { useEffect, useState } from "react";

const PokemonRandomTeam = () => {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/random/team")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        setPokemons(data);
        console.log(data)
    });
}, []);

console.log(pokemons)

    return (
        <section> 
            <h1>Team aléatoire de 6 pokemons !</h1>
            {pokemons.map((pokemon) => {
                return (
            <article>
            <h2>{pokemon.name}</h2>
            <img src = {pokemon.image} alt=""/>
            <p>{pokemon.apiTypes.map((typePoke) => {
                 return (
                     <p>{typePoke.name}</p>
                 )
            })}</p>
            <p>HP: {pokemon.stats.HP}</p>
            <p>defense: {pokemon.stats.attack}</p>
            <p>special attack: {pokemon.stats.defense}</p>
            <p>special attack: {pokemon.stats.special_attack}</p>
            <p>special defense: {pokemon.stats.special_defense}</p>
            <p>speed: {pokemon.stats.speed}</p> 
                </article>
                )
        })}
        </section>
    )
}

export default PokemonRandomTeam;