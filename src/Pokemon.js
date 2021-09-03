import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import axios from 'axios';

export default function Pokemon({ pokemons }) {
  const [pokemon, setPokemon] = useState({
    url: '',
  });
  const [infoPokemon, setInfoPokemon] = useState([]);

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

  const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
  };
  //https://codepen.io/FlorinPop17/pen/gOYZxyE


  return (
    <Container>
      <img src="https://random-pokemon-v2.herokuapp.com/static/media/logo.e478e686.png" alt="pokemon" />
      <button className="btn-primary" onClick={ handleClick }>Get a random pokémon</button>
      <div>
        {
          infoPokemon.length === 0 ? <h3>Click on "Get a random pokémon"</h3>
          :
          <article style={{ background: colors[infoPokemon.types[0].type.name]}}>
            <img src={ infoPokemon.sprites.front_default } alt={ infoPokemon.name } />
            <h1>{ infoPokemon.name }</h1>
            <div className="info">
              { infoPokemon.types.map((type, idx) => {
                return (
                  <span key={ idx }>
                    { type.type.name }
                  </span>
                )
              })}
            </div>
          </article>
        }
      </div>
    </Container>
  )
}
