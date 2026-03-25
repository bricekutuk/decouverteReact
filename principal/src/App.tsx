import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/pokemonCard";

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];
  const [pokemonName, setPokemonName] = useState("bulbasaur");
  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);
  if (pokemon == null) {
    throw new Error("Invalid pokemon name");
  }

  return (
    <div>
      <nav>
        <ul>
          {pokemonList.map((pokemon, _index) => (
            <button
              key="index"
              type="button"
              onClick={() => setPokemonName(pokemon.name)}
            >
              {pokemon.name}
            </button>
          ))}
        </ul>
      </nav>
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}

export default App;
