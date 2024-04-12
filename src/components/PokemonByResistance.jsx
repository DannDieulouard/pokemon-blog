import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokemonByResistance = () => {

    const [pokemons, setPokemons] = useState([]);
    const {type} = useParams();

    useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/type/resistance/" + type)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        setPokemons(data);
    });
}, [type]);

console.log(pokemons)

    return (
        <section> 
            <h1>La liste de tous les pokemons résistants au type {type} </h1>
            {pokemons.map((pokemon) => {
                return (
                    <div>
            <img src = {pokemon.image} alt=""/>
            <p>Name: {pokemon.name}</p>
            <p>Type: {pokemon.apiTypes.map((typePoke) => {
                 return (
                     <h2>{typePoke.name}</h2>
                 )
            })}</p>
            <p>HP: {pokemon.stats.HP}</p>
            <p>defense: {pokemon.stats.attack}</p>
            <p>special attack: {pokemon.stats.defense}</p>
            <p>special attack: {pokemon.stats.special_attack}</p>
            <p>special defense: {pokemon.stats.special_defense}</p>
            <p>speed: {pokemon.stats.speed}</p> 
                </div>
                )
        })}
        </section>
    )
}

export default PokemonByResistance;