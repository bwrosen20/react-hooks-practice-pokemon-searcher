import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({pokemonList, handleSearchInput, searchInput, handleFormSubmit}) {
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleFormSubmit={handleFormSubmit}/>
      <br />
      <Search handleSearchInput={handleSearchInput} searchInput={searchInput}/>
      <br />
      <PokemonCollection pokemonList={pokemonList}/>
    </Container>
  );
}

export default PokemonPage;
