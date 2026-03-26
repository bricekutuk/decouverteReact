interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  setPokemonName: (name: string) => void;
  pokemonList: Pokemon[];
}

function NavBar({ setPokemonName, pokemonList }: NavBarProps) {
  return (
    <nav>
      {pokemonList.map((pokemon, index) => (
        <button
          key="index"
          type="button"
          onClick={() => {
            setPokemonName(pokemon.name);
            if (index === 3) {
              alert("pika pikachu !!!");
            }
          }}
        >
          {pokemon.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
