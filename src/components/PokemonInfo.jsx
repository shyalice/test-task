import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {createLoadingSelector} from "../redux/reducers/loadingReducer";
import {getPokemon} from "../redux/actions/pokemonActions";
import Sprite from "../components/widgets/Sprite";
import Loading from "../components/widgets/Loading";

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
            <div className="pokemon-info-wrapper">
                {!!this.props.loadingInfo ? (
                    <Loading/>
                ) : !this.props.pokemon ? (
                    <p className="text-block">Somethig goes wrong...</p>
                ) : (
                    <>
                        <h2 className="name">#{this.props.match.params.id.toString().padStart(3,0)} {this.props.pokemon.name[0].toUpperCase() + this.props.pokemon.name.slice(1)}</h2>
                        <div className="pokemon-info-block">
                            <div className="pokemon-sprites">
                                <Sprite src={this.props.pokemon.sprites.front_default} alt={`${this.props.name}_front`} />
                                <Sprite src={this.props.pokemon.sprites.back_default} alt={`${this.props.name}_back`} />
                            </div>
                            <div className="pokemon-info">
                                <div className="general">
                                    <h3>General</h3>
                                    <ul className="general">
                                        <li className="types">types: {this.props.pokemon.types.map((type, index) => (<span key={index} className={`pokemon-type ${type.type.name}`}>{type.type.name}</span>))}</li>
                                        <li className="height">height: <span>{parseFloat(this.props.pokemon.height*0.1).toFixed(2)} m</span></li>
                                        <li className="weight">weight: <span>{parseFloat(this.props.pokemon.weight*0.1).toFixed(2)} kg</span></li>
                                    </ul>
                                </div>
                                <div className="stats">
                                    <h3>Stats</h3>
                                    <ul>
                                        {this.props.pokemon.stats.map((stat, index) => (
                                            <li key={index}>{stat.stat.name}: {stat.base_stat}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loadingInfo: createLoadingSelector(['GET_POKEMON'])(state),
        pokemon: state.pokemon.chosenPokemon
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({getPokemon}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonInfo); 