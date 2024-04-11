import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokemonByType = () => {

    const {type} = useParams();
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/type/" + type)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        setPokemons(data);
        console.log(data)
    });
}, [type]);

console.log(pokemons)

    return (
        <section> 
            {pokemons.map((pokemon) => {
                return (
                    <div>
            <img src = {pokemon.image} alt=""/>
            <p>Name: {pokemon.name}</p>
            <p>Type: {pokemon.apiTypes.map((typePoke) => {
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
                </div>
                )
        })}
        </section>
    )
}

export default PokemonByType;