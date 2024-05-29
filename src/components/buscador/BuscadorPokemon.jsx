import React, { useState } from "react";
import { useDispatch } from "react-redux";
import fetchPokemon from "../../redux/actions/buscadorAction";

const BuscadorPokemon = () => {
  const dispatch = useDispatch();
  const [pokemon_name, setPokemonName] = useState("mewtwo");
  return (
    <div className="form-goup">
      <label htmlFor="buscar_pokemon" className="text-white">
        Buscar Pokemon
      </label>
      <input
        type="text"
        className="form-control"
        id="buscar_pokemon"
        value={pokemon_name}
        onChange={(event) => {
          setPokemonName(event.target.value);
        }}
      />
      <button
        className="btn btn-primary mt-3"
        onClick={() => {
          dispatch(fetchPokemon(pokemon_name));
        }}>
        Enviar
      </button>
    </div>
  );
};

export default BuscadorPokemon;
