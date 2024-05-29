import React from "react";
import { useSelector } from "react-redux";

const CantidadPokemonHook = () => {
  const games_shop = useSelector((state) => state.games_shop);
  return <React.Fragment>Unidades: {games_shop.pokemon}</React.Fragment>;
};

export default CantidadPokemonHook;
