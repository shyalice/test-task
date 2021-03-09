import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {fetchPokemons} from "../actions/pokemonActions";
import PokemonCard from '../../components/PokemonCard';
import ReactPaginate from 'react-paginate';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';

class CardsBlock extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){
        this.props.fetchPokemons(this.props.page);
    }

    getPokemonId(url){
        return url.split("/")[url.split("/").length-2]
    }
    
    render(){
        return(
            <div className="cards-block-wrapper">
                <div className="cards-block">
                    {this.props.pokemons.map(pokemon => (
                        <PokemonCard 
                            key={pokemon.name} name={pokemon.name}
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.getPokemonId(pokemon.url)}.png`}
                            id={this.getPokemonId(pokemon.url)}/>
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        pokemons: state.pokemon.pokemons,
        page: state.pokemon.page,
        pagesTotal: state.pokemon.pagesTotal
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({fetchPokemons}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsBlock); 