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

    setPage = (data) => {
        let page = data.selected+1;
        this.props.fetchPokemons(page);
    };
    
    render(){
        return(
            <div className="cards-block-wrapper">
                <div className="cards-block">
                    {this.props.pokemons.map(pokemon => (
                        <PokemonCard 
                            key={pokemon.name} name={pokemon.name}
                            img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.getPokemonId(pokemon.url)}.png`}
                            id={this.getPokemonId(pokemon.url).toString().padStart(3,0)}/>
                    ))}
                </div>
                <div className="pagination-wrapper">
                    <ReactPaginate
                        previousLabel={<FontAwesomeIcon icon={faChevronLeft} size="lg"/>}
                        nextLabel={<FontAwesomeIcon icon={faChevronRight} size="lg"/>}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={this.props.pagesTotal}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={2}
                        onPageChange={this.setPage}
                        containerClassName={'pagination'}
                        subContainerClassName={'pages pagination'}
                        activeClassName={'active'}/>
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