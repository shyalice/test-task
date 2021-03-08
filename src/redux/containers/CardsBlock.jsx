import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {fetchPokemons} from "../actions/pokemonActions";
import PokemonCard from '../../components/PokemonCard';

class CardsBlock extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){
        this.props.fetchPokemons();
    }

    getPokemonId(url){
        return url.split("/")[url.split("/").length-2]
    }

    render(){
        return(
            <div className="cards-block">
                {this.props.pokemons.map(pokemon => (
                    <PokemonCard 
                        key={pokemon.name} name={pokemon.name}
                        img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.getPokemonId(pokemon.url)}.png`}
                        id={this.getPokemonId(pokemon.url).toString().padStart(3,0)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        pokemons: state.pokemon.pokemons
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({fetchPokemons}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsBlock); 