import React, { useState,useEffect } from "react";
import PokemonPage from "./PokemonPage";

function App() {

  const [pokemonList,setPokemon]=useState([])
  const [searchInput,setSearchInput]=useState("")

  useEffect(()=>{
      fetch("http://localhost:3001/pokemon")
        .then((r)=>r.json())
        .then((pokemon)=>setPokemon(pokemon))
  },[])

  function handleSearchInput(event){
       setSearchInput(event.target.value)
  }

  function handleFormSubmit(newPokemon){
    setPokemon([...pokemonList,newPokemon])
  }

  const itemsToDisplay=pokemonList.filter((pokemon)=>{
        
    if (searchInput==="") 
    {return true;}

    else {
      return ((pokemon.name).toLowerCase()).includes((searchInput).toLowerCase());
    }
})

  return (
    <div className="App">
      <PokemonPage handleFormSubmit={handleFormSubmit} pokemonList={itemsToDisplay} handleSearchInput={handleSearchInput} searchInput={searchInput}/>
    </div>
  );
}

export default App;
