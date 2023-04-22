import { useState, useEffect } from "react";
import axios from "axios";

const LoadMons = ({ offset, limit }) => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const getPokemonUrls = async () => {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
        const res = await axios.get(url);
        const urls = res.data.results.map((result) => result.url);
        const pokemonPromises = urls.map((url) => axios.get(url));
        const pokemonResponses = await Promise.all(pokemonPromises);
        const pokemonData = pokemonResponses.map((response) => response.data);
        setPokemonData(pokemonData);
      } catch (e) {
        console.log(e);
      }
    };
    getPokemonUrls();
  }, [offset, limit]);

  return pokemonData;
};

export default LoadMons;
