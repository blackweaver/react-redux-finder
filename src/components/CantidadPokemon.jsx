import React, { Component } from "react";
import { connect } from "react-redux";

class CantidadPokemon extends Component {
  render() {
    return (
      <React.Fragment>Unidades: {this.props.games_shop.pokemon}</React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    games_shop: state.games_shop,
  };
};

export default connect(mapStateToProps)(CantidadPokemon);
