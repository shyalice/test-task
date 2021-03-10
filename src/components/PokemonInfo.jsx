import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {createLoadingSelector} from "../redux/reducers/loadingReducer";
import {getPokemon} from "../redux/actions/pokemonActions";
import Sprite from "../components/widgets/Sprite";

class PokemonInfo extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    componentDidMount(){
        this.props.getPokemon(this.props.match.params.id);
    }

    render(){
        return(
            <>
                {!!this.props.loading ? (
                    <div>loading</div>
                ) : !this.props.pokemon ? (
                    <p className="text-block">Somethig goes wrong...</p>
                ) : (
                    <div className="pokemon-info-block">
                        <div>
                            <Sprite src={this.props.pokemon.sprites.front_default} alt={`${this.props.name}_front`} />
                            <Sprite src={this.props.pokemon.sprites.back_default} alt={`${this.props.name}_back`} />
                        </div>
                        <div className="pokemon-info">
                            <h2 className="pokemon-name">#{this.props.match.params.id.toString().padStart(3,0)} {this.props.pokemon.name[0].toUpperCase() + this.props.pokemon.name.slice(1)}</h2>
                            <h3>General</h3>
                            <ul className="pokemon-general">
                                <li className="pokemon-types">types: {this.props.pokemon.types.map((type, index) => (<span key={index} className={`pokemon-type ${type.type.name}`}>{type.type.name}</span>))}</li>
                                <li className="pokemon-height">height: <span>{parseFloat(this.props.pokemon.height*0.1).toFixed(2)} m</span></li>
                                <li className="pokemon-weight">weight: <span>{parseFloat(this.props.pokemon.weight*0.1).toFixed(2)} kg</span></li>
                            </ul>
                            <h3>Stats</h3>
                            <ul className="pokemon-stats">
                                {this.props.pokemon.stats.map((stat, index) => (
                                    <li key={index}>{stat.stat.name}: {stat.base_stat}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: createLoadingSelector(['GET_POKEMON'])(state),
        pokemon: state.pokemon.chosenPokemon
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({getPokemon}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonInfo); 