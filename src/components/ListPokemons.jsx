import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const ListPokemons = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        setPokemons(data);
    });
}, []);


    return (
        <section>
            <h1>La liste entière des 898 pokémons !</h1>
            {pokemons ? ( 
        <>
          {pokemons.map((pokemon) => {
            return (  
              <article>
                <p>{pokemon.name}</p>
                <Link to={`/pokemon-details/${pokemon.id}`}>Voir le détail du pokemon</Link>
                {pokemon.apiTypes.map((type)=>{
                        return(<>
                            <Link to={`/pokemons-by-type/${type.name}`}><p>{type.name}</p></Link>
                        </>
                        )
                    })}
              </article>
            );
          })}
        </>
      ) : (
        <p>En cours de chargement</p>
      )}
    </section>
    );
};

export default ListPokemons;