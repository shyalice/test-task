import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {fetchPokemons} from "../actions/pokemonActions";
import PokemonCard from '../../components/PokemonCard';
import Pager from "../../components/widgets/Pager";
import {createLoadingSelector} from "../reducers/loadingReducer";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';

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
                {!!this.props.loading ? (
                    <div className="loading">
                        <FontAwesomeIcon icon={faSpinner} size="lg" fixedWidth spin />
                    </div>
                ) : (
                    <>
                        <div className="cards-block">
                            {this.props.pokemons.map(pokemon => (
                                <PokemonCard 
                                    key={pokemon.name} name={pokemon.name}
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.getPokemonId(pokemon.url)}.png`}
                                    id={this.getPokemonId(pokemon.url)}/>
                            ))}
                            
                        </div>
                        <Pager page={this.props.page} pagesTotal={this.props.pagesTotal} loadPage={this.props.fetchPokemons}/>
                    </>
                )}
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: createLoadingSelector(['FETCH_POKEMONS'])(state),
        pokemons: state.pokemon.pokemons,
        page: state.pokemon.page,
        pagesTotal: state.pokemon.pagesTotal
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({fetchPokemons}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsBlock); 