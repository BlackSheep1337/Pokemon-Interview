import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import axios from 'axios';

export default function Pokemon({ pokemons }) {
  const [pokemon, setPokemon] = useState({
    url: '',
  });
  const [infoPokemon, setInfoPokemon] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    const randomNumer = Math.floor(Math.random() * 499);
    const { url } = pokemons[randomNumer];
    setPokemon({ url });
  }

  useEffect(() => {
    const handleSinglePokemon = async () => {
      if (!pokemon.url) {
        return;
      } else {
        try {
          const { data } = await axios.get(pokemon.url);
          setInfoPokemon(data);
        } catch (error) {
          console.log(error);
        }
      }
    }
    handleSinglePokemon();
  }, [pokemon]);

  const getTypeDetails = async (url) => {
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      console.log('err types', error);
    }
  }
  return (
    <Container>
      <img src="https://random-pokemon-v2.herokuapp.com/static/media/logo.e478e686.png" alt="pokemon" />
      <button onClick={ handleClick }>Get a random pokémon</button>
      <div className="pokemon">
        {
          infoPokemon.length === 0 ? <h3>Click on "Get a random pokémon"</h3>
          : 
          (
            <article>
              <img src={ infoPokemon.sprites.front_default } alt={ infoPokemon.name } />
              <span>{ infoPokemon.name }</span>
              <div className="info">
                { infoPokemon.types.map((type, idx) => {
                  getTypeDetails(type.type.url)
                  .then((resp) => console.log(resp))
                  console.log(type.type.name);
                  console.log(infoPokemon)

                  return (
                    <span key={ idx }>
                      { type.type.name }
                    </span>
                  )
                })}
              </div>
            </article>
          ) 
        }
      </div>
    </Container>
  )
}
