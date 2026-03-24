function PokemonCard({ pokemon }) {
  return (
    <>
      {pokemon.imgSrc !== undefined ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </>
  );
}

export default PokemonCard;
