import axios from 'axios';
import * as actions from '../constants/actionTypes';

export function fetchPokemons() {
    return dispatch => {
        dispatch(fetchPokemonsRequest());
        return axios.get("https://pokeapi.co/api/v2/pokemon")
            .then(response => {
                dispatch(fetchPokemonsSuccess(
                    response.data.results.map(pokemon => this.getPokemon(pokemon.name))
                ));
            })
            .catch(error => {
                dispatch(fetchPokemonsFailure());
            });
    }
}
function fetchPokemonsRequest() {
    return {
        type: actions.FETCH_POKEMONS_REQUEST,
    }
}
export function fetchPokemonsSuccess() {
    return {
        type: actions.FETCH_POKEMONS_SUCCESS,
    }
}
function fetchPokemonsFailure(error) {
    return {
        type: actions.FETCH_POKEMONS_FAILURE,
    }
}

export function getPokemon(name) {
    return dispatch => {
        dispatch(getPokemonRequest());
        return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(response => {
                dispatch(getPokemonSuccess(response.data));
            })
            .catch(error => {
                dispatch(getPokemonFailure());
            });
    }
}
function getPokemonRequest() {
    return {
        type: actions.GET_POKEMON_REQUEST,
    }
}
export function getPokemonSuccess(pokemon) {
    return {
        type: actions.GET_POKEMON_SUCCESS,
        pokemon
    }
}
function getPokemonFailure(error) {
    return {
        type: actions.GET_POKEMON_FAILURE,
    }
}