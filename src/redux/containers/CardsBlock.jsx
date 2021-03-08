import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {fetchPokemons, getPokemon} from "../actions/pokemonActions";
import PokemonCard from '../../components/PokemonCard';

class CardsBlock extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){
        this.props.fetchPokemons();
    }

    render(){
        return(
            <div className="cards-block">
                {this.props.pokemons.map((pokemon, index) => (
                    <PokemonCard key={index} name={pokemon.name} img={pokemon.sprites.front_default} id={pokemon.id.toString().padStart(3,0)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        pokemons: state.pokemon.pokemons.sort((a, b) => parseFloat(a.id) - parseFloat(b.id))
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({fetchPokemons, getPokemon}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsBlock); 