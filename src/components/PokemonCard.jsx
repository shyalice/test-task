import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getPokemon} from "../redux/actions/pokemonActions"

class PokemonCard extends Component{
    render(){
        return(
            <div className="pokemon-card" onClick={() => this.props.getPokemon(this.props.name)}>
                <div className="pokemon-id">#{this.props.id}</div>
                <div className="pokemon-img">
                    <img src={this.props.img} alt={this.props.name}/>
                </div>
                <h3 className="pokemon-name">{this.props.name[0].toUpperCase() + this.props.name.slice(1)}</h3>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({getPokemon}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonCard); 