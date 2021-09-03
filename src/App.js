import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pokemon from './Pokemon';
import './App.css';

export default function App() {
  const [pokemons, setPokemons] = useState([]);

  const handlePokemons = async () => {
    try {
      const { data: { results } } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=500');
      setPokemons(results);
    } catch (error) {
      console.log('Err', error);
    } 
  }

  useEffect(() => {
    handlePokemons();
  }, []);

  return (
    <>
      <Pokemon pokemons={ pokemons } />
    </>
  )
}
