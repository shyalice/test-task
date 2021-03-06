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

    render(){
        return(
            <div>
                {/* {this.props.pokemons.map((pokemon, index) => (
                    <PokemonCard key={index} name={pokemon.name} info={pokemon.info}/>
                ))} */}
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